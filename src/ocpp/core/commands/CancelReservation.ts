import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/CancelReservation.json";
import responseSchema from "../../ocpp-1.6-schemas/CancelReservationResponse.json";
import { CANCEL_RESERVATION_STATUS } from "../../../constants/enums";

export interface Params {
  reservationId: number;
}

export interface Conf {
  status: CANCEL_RESERVATION_STATUS;
}

export class CancelReservation extends BaseCommand {
  constructor(values: any) {
    super(requestSchema, responseSchema, values);
  }
}
