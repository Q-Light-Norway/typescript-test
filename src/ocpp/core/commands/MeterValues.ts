import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/MeterValues.json";
import responseSchema from "../../ocpp-1.6-schemas/MeterValuesResponse.json";
import { CONTEXT, FORMAT, LOCATION, MEASURAND, PHASE, UNIT } from "../../../constants/enums";

export interface MeterValue {
  timestamp: string;
  sampledValue: {
    value: string;
    context?: CONTEXT;
    format?: FORMAT;
    measurand?: MEASURAND;
    phase?: PHASE;
    location?: LOCATION;
    unit?: UNIT;
  }[];
}

export interface MeterData {
  meterValue: number;
  powerDraw: number;
  currentImport: number;
}

export interface Params {
  connectorId: number;
  transactionId: number;
  meterData: MeterData;
}

export interface Request {
  connectorId: number;
  transactionId: number;
  meterValue: MeterValue[];
}

export class MeterValues extends BaseCommand {
  constructor(values: Request) {
    super(requestSchema, responseSchema, values);
  }
}
