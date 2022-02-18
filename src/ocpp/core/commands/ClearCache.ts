import BaseCommand from "./BaseCommand";

import requestSchema from "../../ocpp-1.6-schemas/ClearCache.json";
import responseSchema from "../../ocpp-1.6-schemas/ClearCacheResponse.json";
import { CLEAR_CACHE_STATUS } from "../../../constants/enums";

export interface Conf {
  status: CLEAR_CACHE_STATUS;
}

export class ClearCache extends BaseCommand {
  constructor(values: any) {
    super(requestSchema, responseSchema, values);
  }
}
