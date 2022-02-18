import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/GetLocalListVersion.json";
import responseSchema from "../../ocpp-1.6-schemas/GetLocalListVersionResponse.json";

export interface Conf {
  listVersion: number;
}

export class GetLocalListVersion extends BaseCommand {
  constructor(values: any) {
    super(requestSchema, responseSchema, values);
  }
}
