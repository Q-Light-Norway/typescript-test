import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/UpdateFirmware.json";
import responseSchema from "../../ocpp-1.6-schemas/UpdateFirmwareResponse.json";

export interface Params {
  location: string;
  retries?: number;
  retrieveDate: number;
  retryInterval?: number;
}

export class UpdateFirmware extends BaseCommand {
  constructor(values: any) {
    super(requestSchema, responseSchema, values);
  }
}
