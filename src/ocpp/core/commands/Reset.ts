import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/Reset.json";
import responseSchema from "../../ocpp-1.6-schemas/ResetResponse.json";
import { RESET_STATUS, RESET_TYPE } from "../../../constants/enums";

export interface Params {
  type: RESET_TYPE;
}

export interface Conf {
  status: RESET_STATUS;
}

export class Reset extends BaseCommand {
  constructor(values: Conf) {
    super(requestSchema, responseSchema, values);
  }
}
