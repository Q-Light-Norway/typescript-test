import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/DiagnosticsStatusNotification.json";
import responseSchema from "../../ocpp-1.6-schemas/DiagnosticsStatusNotificationResponse.json";
import { DIAGNOSTIC_STATUS_NOTIFICATION } from "../../../constants/enums";

export interface Params {
  test: string;
}

export interface Request {
  status: DIAGNOSTIC_STATUS_NOTIFICATION;
}

export class DiagnosticsStatusNotification extends BaseCommand {
  constructor(values: Request) {
    super(requestSchema, responseSchema, values);
  }
}
