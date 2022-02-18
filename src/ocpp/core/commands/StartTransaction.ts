import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/StartTransaction.json";
import responseSchema from "../../ocpp-1.6-schemas/StartTransactionResponse.json";
import { AUTH_STATUS } from "../../../constants/enums";

export interface IdTagInfo {
  expiryDate: Date;
  parentIdTag: string;
  status: AUTH_STATUS;
}

export interface Params {
  connectorId: number;
  idTag: string;
}

export interface Request {
  connectorId: number;
  idTag: string;
  meterStart: number;
  reservationId?: number;
  timestamp: string;
}

export interface Conf {
  idTagInfo: IdTagInfo;
}

export class StartTransaction extends BaseCommand {
  constructor(values: Request) {
    super(requestSchema, responseSchema, values);
  }
}
