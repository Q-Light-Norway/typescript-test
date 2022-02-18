import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/UnlockConnector.json";
import responseSchema from "../../ocpp-1.6-schemas/UnlockConnectorResponse.json";
import { UNLOCK_STATUS } from "../../../constants/enums";

export interface Prams {
  connectorId: number;
}

export interface Conf {
  status: UNLOCK_STATUS;
}

export class UnlockConnector extends BaseCommand {
  constructor(values: any) {
    super(requestSchema, responseSchema, values);
  }
}
