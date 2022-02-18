import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/ClearChargingProfile.json";
import responseSchema from "../../ocpp-1.6-schemas/ClearChargingProfileResponse.json";
import { CHARGING_PROFILE_PURPOSE, CLEAR_CHARGING_PROFILE_STATUS } from "../../../constants/enums";

export interface Params {
  id?: number;
  connectorId?: number;
  chargingProfilePurpose?: CHARGING_PROFILE_PURPOSE;
  stackLevel?: number;
}

export interface Conf {
  status: CLEAR_CHARGING_PROFILE_STATUS;
}

export class ClearChargingProfile extends BaseCommand {
  constructor(values: any) {
    super(requestSchema, responseSchema, values);
  }
}
