import "dotenv/config";
import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { RequestListener, Server } from "http";

import { runOcppSpawner } from "./components/ocppSpawner";
import CentralSystem from "./ocpp/core/centralSystem";

// Express setup
const app: Application = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "http://80.213.22.242:3000"],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server: Server = require("http").createServer(app);

// // OCPP ocppMasterServer
if (process.env.NODE_ENV === "development") {
  const centralSystem = new CentralSystem(server, 9920, "localhost");
  app.set("centralSystem", centralSystem);
}

// Routes
// Only use transactions router on development
import { transactionRouter } from "./routes/connector";
if (process.env.NODE_ENV === "development") {
  app.use(transactionRouter);
}
//
// // OCPP Handlers
const ocppHandlers = runOcppSpawner();
app.set("ocppHandlers", ocppHandlers);

server.listen(3030, async function () {
  if (server.address()) {
    // @ts-ignore
    console.log("[Node] App running on port.", server.address().port);
  }
});
