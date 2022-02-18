import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/Authorize.json";
import responseSchema from "../../ocpp-1.6-schemas/AuthorizeResponse.json";
import { AUTH_STATUS } from "../../../constants/enums";

export interface IdTagInfo {
  expiryDate: Date;
  parentIdTag: string;
  status: AUTH_STATUS;
}

export interface Params {
  connectorId: number;
  idTag: string;
}

export interface Request {
  idTag: string;
}

export interface Conf {
  idTagInfo: IdTagInfo;
}

export class Authorize extends BaseCommand {
  constructor(values: Request) {
    super(requestSchema, responseSchema, values);
  }
}
