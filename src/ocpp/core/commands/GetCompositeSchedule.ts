import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/GetCompositeSchedule.json";
import responseSchema from "../../ocpp-1.6-schemas/GetCompositeScheduleResponse.json";
import { GET_COMPOSITE_SCHEDULE_STATUS, UNIT } from "../../../constants/enums";

export interface ChargingSchedulePeriod {
  startPeriod: number;
  limit: number;
  numberPhases?: number;
}

export interface ChargingSchedule {
  duration: number;
  startSchedule: string;
  chargingRateUnit: UNIT;
  chargingSchedulePeriod: ChargingSchedulePeriod;
  minChargingRate: number;
}

export interface Params {
  connectorId: number;
  duration: number;
  chargingRateUnit?: UNIT;
}

export interface Conf {
  status: GET_COMPOSITE_SCHEDULE_STATUS;
  connectorId?: number;
  scheduleStart?: string;
  chargingSchedule?: number;
}

export class GetCompositeSchedule extends BaseCommand {
  constructor(values: any) {
    super(requestSchema, responseSchema, values);
  }
}
