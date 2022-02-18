import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/RemoteStopTransaction.json";
import responseSchema from "../../ocpp-1.6-schemas/RemoteStopTransactionResponse.json";
import { REMOTE_START_STOP_STATUS } from "../../../constants/enums";

export interface Params {
  transactionId: number;
}

export interface Conf {
  status: REMOTE_START_STOP_STATUS;
}

export class RemoteStopTransaction extends BaseCommand {
  constructor(values: Conf) {
    super(requestSchema, responseSchema, values);
  }
}
