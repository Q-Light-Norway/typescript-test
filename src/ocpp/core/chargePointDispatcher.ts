import WebSocket from "ws";
import debugFn from "debug";
// import Commands from "./commands/index.ts";
import { Connection } from "./connection";

import { DEBUG_LIBNAME } from "./constants";

const debug = debugFn(DEBUG_LIBNAME);

interface ChargePointDispatcherOptionsInterface {
  protocol: string;
  centralSystemUrl: string;
  params: {
    perMessageDeflate: boolean;
    protocolVersion: number;
    origin: string;
  };
  reconnectInterval?: number;
}

export default class ChargePointDispatcher {
  private options: ChargePointDispatcherOptionsInterface;
  connection: Connection | undefined | null;

  constructor(options: ChargePointDispatcherOptionsInterface) {
    this.options = options;
  }

  connect() {
    debug(`Try connect to ${this.options.centralSystemUrl}`);

    let reconnectTimer;
    const reconnectInterval = this.options.reconnectInterval || 5 * 60 * 1000; // 5 minutes
    const self = this;

    return new Promise((resolve, reject) => {
      const ws = new WebSocket(
        this.options.centralSystemUrl,
        [this.options.protocol],
        this.options.params
      );

      ws.on("upgrade", (res) => {
        if (!res.headers["sec-websocket-protocol"]) {
          return reject(new Error(`Server doesn't support protocol ${this.options.protocol}`));
        }
      });

      ws.on("close", () => {
        debug(`Connection is closed`);
        this.connection = null;
        nextReconnectAttempt();
      });
      ws.on("open", () => {
        ws.removeAllListeners("error");

        this.connection = new Connection(ws);
        this.connection.onRequest = (command) => this.onRequest(command);

        resolve(this.connection);
      });

      ws.on("error", reject);
    });

    function nextReconnectAttempt() {
      if (reconnectTimer) {
        clearInterval(reconnectTimer);
        reconnectTimer = null;
      }

      reconnectTimer = setTimeout(async () => {
        try {
          await self.connect();
        } catch (err) {
          console.log("[OCPP] ", err);
        }
      }, reconnectInterval);
    }
  }

  send(command) {
    if (!this.connection) {
      return false;
    }
    return this.connection.send(command);
  }

  onRequest(command) {
    console.log("chargePoint onRequest: ", command);
  }
}
