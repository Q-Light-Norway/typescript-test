import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/GetDiagnostics.json";
import responseSchema from "../../ocpp-1.6-schemas/GetDiagnosticsResponse.json";

export interface Params {
  location: string;
  retries?: number;
  retryInterval?: number;
  startTime?: string;
  stopTime?: string;
}

export interface Conf {
  fileName: string;
}

export class GetDiagnostics extends BaseCommand {
  constructor(values: any) {
    super(requestSchema, responseSchema, values);
  }
}
