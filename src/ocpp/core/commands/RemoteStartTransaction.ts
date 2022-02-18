import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/RemoteStartTransaction.json";
import responseSchema from "../../ocpp-1.6-schemas/RemoteStartTransactionResponse.json";
import { REMOTE_START_STOP_STATUS } from "../../../constants/enums";
import { ChargingProfile } from "./SetChargingProfile";

export interface Params {
  connectorId?: number;
  idTag: string;
  chargingProfile?: ChargingProfile;
}

export interface Conf {
  status: REMOTE_START_STOP_STATUS;
}

export class RemoteStartTransaction extends BaseCommand {
  constructor(values: any) {
    super(requestSchema, responseSchema, values);
  }
}
