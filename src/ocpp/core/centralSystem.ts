import WebSocket from "ws";
import debugFn from "debug";
import { Server } from "http";
import Logger, { LOGGER_URL } from "./logger";
import { Connection } from "./connection";
import { DEBUG_LIBNAME, OCPP_PROTOCOL_1_6 } from "./constants";
import CentralSystemClient from "./centralSystemClient";
import OCPPError, { ERROR_NOTIMPLEMENTED } from "./ocppError";
import OCPPCommands from "./commands";
import * as BootNotificationConst from "./commands/BootNotification";
import * as AuthorizeConst from "./commands/Authorize";
import * as StartTransactionConst from "./commands/StartTransaction";
import * as StatusNotificationConst from "./commands/StatusNotification";

const debug = debugFn(DEBUG_LIBNAME);

export default class CentralSystem {
  server: WebSocket;
  apiServer: Server;
  clients: CentralSystemClient[];
  logger: Logger;
  port: number;
  host: string;

  constructor(server: Server, port: number, host: string) {
    this.apiServer = server;
    this.clients = [];
    this.logger = new Logger();
    this.port = port;
    this.host = host;

    this.listen();
  }

  listen() {
    // const validateConnection = this.options.validateConnection || (() => true);

    const wsOptions = {
      port: this.port,
      host: this.host,
      handleProtocols: (protocols) => {
        if (protocols.indexOf(OCPP_PROTOCOL_1_6) === -1) {
          return "";
        }
        return OCPP_PROTOCOL_1_6;
      },
      // verifyClient: async (info, cb) => {
      //   if (info.req.url === LOGGER_URL) {
      //     debug("Logger connected");
      //     return cb(true);
      //   }
      //   const isAccept = await validateConnection(info.req.url);
      //
      //   this.logger.debug(
      //     `Request for connect "${info.req.url}" (${
      //       info.req.headers["sec-websocket-protocol"]
      //     }) - ${isAccept ? "Valid identifier" : "Invalid identifier"}`
      //   );
      //
      //   cb(
      //     isAccept,
      //     404,
      //     "Central System does not recognize the charge point identifier in the URL path"
      //   );
      // },
      server: this.apiServer,
    };
    this.server = new WebSocket.Server(wsOptions);
    this.server.on("error", (ws, req) => {
      console.info(ws, req);
    });

    this.server.on("upgrade", (ws, req) => {
      console.info(req);
    });
    this.server.on("connection", (ws, req) => this.onNewConnection(ws, req));

    debug(`Listen on ${this.host || "default host"}:${this.port}`);
  }

  onNewConnection(socket, req) {
    socket.on("error", (err) => {
      console.info(err, socket.readyState);
    });

    if (req.url === LOGGER_URL) {
      this.logger.addSocket(socket);
      return;
    }

    if (!socket.protocol) {
      // From Spec: If the Central System does not agree to using one of the subprotocols offered by the client,
      // it MUST complete the WebSocket handshake with a response without a Sec-WebSocket-Protocol header and then
      // immediately close the WebSocket connection.
      this.logger.debug(`Close connection due to unsupported protocol`);
      return socket.close();
    }

    const connection = new Connection(socket, req, this.logger);

    const client: CentralSystemClient = new CentralSystemClient(connection);

    connection.onRequest = (command) => this.onRequest(client, command);

    socket.on("close", (err) => {
      console.log("[OCPP] ", err);
      const index = this.clients.indexOf(client);
      this.clients.splice(index, 1);
    });
    this.clients.push(client);
  }

  async onRequest(client, command) {
    const connection = client.connection;

    // console.info(`New command from ${connection.url}`);
    // console.log("Received command:", command);

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    switch (true) {
      case command instanceof OCPPCommands.BootNotification:
        client.info = {
          connectors: [],
          ...command,
        };
        return {
          status: BootNotificationConst.STATUS.ACCEPTED,
          currentTime: new Date().toISOString(),
          interval: 60,
        };

      case command instanceof OCPPCommands.Authorize:
        console.log("[OCPP] Auth", {
          idTagInfo: {
            status: AuthorizeConst.STATUS.ACCEPTED,
          },
        });
        return {
          idTagInfo: {
            status: AuthorizeConst.STATUS.ACCEPTED,
          },
        };

      case command instanceof OCPPCommands.StartTransaction:
        console.log("[OCPP] StartTransaction", {
          transactionId: getRandomInt(1000, 9999),
          idTagInfo: {
            status: StartTransactionConst.STATUS_ACCEPTED,
          },
        });
        return {
          transactionId: getRandomInt(1000, 9999),
          idTagInfo: {
            status: StartTransactionConst.STATUS_ACCEPTED,
          },
        };

      case command instanceof OCPPCommands.StopTransaction:
        console.log("[OCPP] StopTransaction", {
          transactionId: command.transactionId,
          idTagInfo: {
            status: StartTransactionConst.STATUS_ACCEPTED,
          },
        });
        return {
          transactionId: command.transactionId,
          idTagInfo: {
            status: StartTransactionConst.STATUS_ACCEPTED,
          },
        };

      case command instanceof OCPPCommands.Heartbeat:
        // console.log(
        //   "Received HeartBeat From:",
        //   client.info.chargeBoxSerialNumber,
        //   "status:",
        //   command.status
        // );

        return {
          currentTime: new Date().toISOString(),
        };

      case command instanceof OCPPCommands.StatusNotification:
        // client.info = client.info || {};
        // client.info.connectors = client.info.connectors || [];

        const connectorIndex = client.info.connectors.findIndex(
          (item) => command.connectorId === item.connectorId
        );
        if (connectorIndex === -1) {
          client.info.connectors.push({
            ...command,
          });
        } else {
          client.info.connectors[connectorIndex] = {
            ...command,
          };
        }
        await this.onStatusUpdate();
        return {};
      // return 'res'
      case command instanceof OCPPCommands.MeterValues:
        console.log("[OCPP] MeterValues not implemented on development server");
        return {};
      default:
        throw new OCPPError(ERROR_NOTIMPLEMENTED, "Unknown command");
    }
  }

  async onStatusUpdate() {
    return false;
  }

  async toggleChargePoint(client, connectorId, transactionId) {
    const connector = client.info.connectors.find(
      (item) => connectorId.toString() === item.connectorId.toString()
    );
    if (!connector) {
      console.log("Connector does not exist");
      return null;
    }

    // console.log("[OCPP] Connector status: ", connector);

    if (connector.status !== StatusNotificationConst.STATUS_AVAILABLE) {
      let command = new OCPPCommands.RemoteStopTransaction({
        transactionId: transactionId,
      });
      return await client.connection.send(command);
    }

    let command = new OCPPCommands.RemoteStartTransaction({
      connectorId: connectorId,
      idTag: "" + connectorId,
    });

    return await client.connection.send(command);
  }
}
