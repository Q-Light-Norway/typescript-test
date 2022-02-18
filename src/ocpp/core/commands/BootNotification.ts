import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/BootNotification.json";
import responseSchema from "../../ocpp-1.6-schemas/BootNotificationResponse.json";
import { BOOT_STATUS } from "../../../constants/enums";

export interface Request {
  chargePointVendor: string;
  chargePointModel: string;
  chargePointSerialNumber?: string;
  chargeBoxSerialNumber?: string;
  firmwareVersion?: string;
  iccid?: string;
  imsi?: string;
  meterType?: string;
  meterSerialNumber?: string;
}

export interface Conf {
  currentTime: Date;
  interval: number;
  status: BOOT_STATUS;
}

export class BootNotification extends BaseCommand {
  constructor(values: Request) {
    super(requestSchema, responseSchema, values);
  }
}
