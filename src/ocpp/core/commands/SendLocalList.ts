import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/SendLocalList.json";
import responseSchema from "../../ocpp-1.6-schemas/SendLocalListResponse.json";
import { AUTH_STATUS, SEND_LOCAL_LIST_STATUS, UPDATE_TYPE } from "../../../constants/enums";

export interface IdTagInfo {
  expiryDate: string;
  parentIdTag: string;
  status: AUTH_STATUS;
}

export interface AuthorizationData {
  idTag: string;
  idTagInfo?: IdTagInfo;
}

export interface Params {
  listVersion: number;
  localAuthorizationList?: AuthorizationData[];
  updateType: UPDATE_TYPE;
}

export interface Conf {
  status: SEND_LOCAL_LIST_STATUS;
}

export class SendLocalList extends BaseCommand {
  constructor(values: any) {
    super(requestSchema, responseSchema, values);
  }
}
