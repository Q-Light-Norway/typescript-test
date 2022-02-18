import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/ChangeConfiguration.json";
import responseSchema from "../../ocpp-1.6-schemas/ChangeConfigurationResponse.json";
import { CONFIGURATION_STATUS } from "../../../constants/enums";

export interface Params {
  key: string;
  value: string;
}

export interface Conf {
  status: CONFIGURATION_STATUS;
}

export class ChangeConfiguration extends BaseCommand {
  constructor(values: any) {
    super(requestSchema, responseSchema, values);
  }
}
