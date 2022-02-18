import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/Heartbeat.json";
import responseSchema from "../../ocpp-1.6-schemas/HeartbeatResponse.json";

export interface Request {
  TimeStamp: string;
}

export interface Conf {
  currentTime: Date;
}

export class Heartbeat extends BaseCommand {
  constructor(values: Request) {
    super(requestSchema, responseSchema, values);
  }
}
