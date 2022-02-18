import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/ChangeAvailability.json";
import responseSchema from "../../ocpp-1.6-schemas/ChangeAvailabilityResponse.json";
import { AVAILABILITY_STATUS, AVAILABILITY_TYPE } from "../../../constants/enums";

export interface Params {
  connectorId: number;
  type: AVAILABILITY_TYPE;
}

export interface Conf {
  status: AVAILABILITY_STATUS;
}

export class ChangeAvailability extends BaseCommand {
  constructor(values: any) {
    super(requestSchema, responseSchema, values);
  }
}
