import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/SetChargingProfile.json";
import responseSchema from "../../ocpp-1.6-schemas/SetChargingProfileResponse.json";
import {
  CHARGING_PROFILE_KIND,
  CHARGING_PROFILE_PURPOSE,
  CHARGING_PROFILE_STATUS,
  RECURRENCY_KIND,
} from "../../../constants/enums";
import { ChargingSchedule } from "./GetCompositeSchedule";

export interface ChargingProfile {
  chargingProfileId: number;
  transactionId?: number;
  stackLevel: number;
  chargingProfilePurpose: CHARGING_PROFILE_PURPOSE;
  chargingProfileKind: CHARGING_PROFILE_KIND;
  recurrencyKind?: RECURRENCY_KIND;
  validFrom?: string;
  validTo?: string;
  chargingSchedule: ChargingSchedule;
}

export interface Params {
  connectorId: number;
  csChargingProfiles: ChargingProfile;
}

export interface Conf {
  status: CHARGING_PROFILE_STATUS;
}

export class SetChargingProfile extends BaseCommand {
  constructor(values: any) {
    super(requestSchema, responseSchema, values);
  }
}
