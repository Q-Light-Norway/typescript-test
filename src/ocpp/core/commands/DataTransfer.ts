import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/DataTransfer.json";
import responseSchema from "../../ocpp-1.6-schemas/DataTransferResponse.json";
import { DATATRANSFER_STATUS } from "../../../constants/enums";

export interface Params {
  connectorId: string;
}

export interface Conf {
  status: DATATRANSFER_STATUS;
}

export class DataTransfer extends BaseCommand {
  constructor(values: Conf) {
    super(requestSchema, responseSchema, values);
  }
}
