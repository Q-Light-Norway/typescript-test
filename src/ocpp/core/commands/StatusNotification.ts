import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/StatusNotification.json";
import responseSchema from "../../ocpp-1.6-schemas/StatusNotificationResponse.json";
import { ERROR, STATUS } from "../../../constants/enums";

export interface Params {
  connectorId: number;
  errorCode?: ERROR;
  status: STATUS;
}

export interface Request {
  connectorId: number;
  errorCode: ERROR;
  info?: string;
  status: STATUS;
  timestamp?: string;
  vendorId?: string;
  vendorErrorCode?: string;
}

export class StatusNotification extends BaseCommand {
  constructor(values: Request) {
    super(requestSchema, responseSchema, values);
  }
}
