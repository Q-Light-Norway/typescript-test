import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/ReserveNow.json";
import responseSchema from "../../ocpp-1.6-schemas/ReserveNowResponse.json";
import { RESERVATION_STATUS } from "../../../constants/enums";

export interface Params {
  connectorId: number;
  expiryDate: string;
  idTag: string;
  parentIdTag?: string;
  reservationId: number;
}

export interface Conf {
  status: RESERVATION_STATUS;
}

export class ReserveNow extends BaseCommand {
  constructor(values: any) {
    super(requestSchema, responseSchema, values);
  }
}
