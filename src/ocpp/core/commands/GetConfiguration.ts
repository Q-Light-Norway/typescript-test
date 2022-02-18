import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/GetConfiguration.json";
import responseSchema from "../../ocpp-1.6-schemas/GetConfigurationResponse.json";

export interface KeyValue {
  key: string;
  readonly: boolean;
  value?: string;
}

export interface Params {
  key: string[];
}

export interface Conf {
  configurationKey?: KeyValue[];
  unknownKey?: string;
}

export class GetConfiguration extends BaseCommand {
  constructor(values: any) {
    super(requestSchema, responseSchema, values);
  }
}
