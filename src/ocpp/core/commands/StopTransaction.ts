import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/StopTransaction.json";
import responseSchema from "../../ocpp-1.6-schemas/StopTransactionResponse.json";
import { MeterValue } from "./MeterValues";
import { AUTH_STATUS, REASON } from "../../../constants/enums";

export interface IdTagInfo {
  expiryDate: Date;
  parentIdTag: string;
  status: AUTH_STATUS;
}

export interface Params {
  transactionId: number;
}

export interface Request {
  idTag?: string;
  meterStop: number;
  timestamp?: string;
  transactionId: number;
  reason?: REASON;
  transactionData?: MeterValue[];
}

export interface Conf {
  idTagInfo: IdTagInfo;
}

export class StopTransaction extends BaseCommand {
  constructor(values: Request) {
    super(requestSchema, responseSchema, values);
  }
}
