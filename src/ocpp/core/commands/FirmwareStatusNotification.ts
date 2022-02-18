import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/FirmwareStatusNotification.json";
import responseSchema from "../../ocpp-1.6-schemas/FirmwareStatusNotificationResponse.json";
import { FIRMWARE_STATUS } from "../../../constants/enums";

export interface Req {
  status: FIRMWARE_STATUS;
}

export class FirmwareStatusNotification extends BaseCommand {
  constructor(values: Req) {
    super(requestSchema, responseSchema, values);
  }
}
