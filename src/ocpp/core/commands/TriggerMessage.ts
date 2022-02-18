import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/TriggerMessage.json";
import responseSchema from "../../ocpp-1.6-schemas/TriggerMessageResponse.json";
import { MESSAGE_TRIGGER, TRIGGER_MESSAGE_STATUS } from "../../../constants/enums";

export interface Params {
  requestedMessage: MESSAGE_TRIGGER;
  connectorId?: number;
}

export interface Conf {
  status: TRIGGER_MESSAGE_STATUS;
}

export class TriggerMessage extends BaseCommand {
  constructor(values: any) {
    super(requestSchema, responseSchema, values);
  }
}
