import { applyPropertiesValidators } from "../helpers.js";

const RESPONSE_SCHEMA_SYMBOL = Symbol("responseSchema");

export default class BaseCommand {
  // TODO fix definitions if possible, very dynamic class
  constructor(requestSchema: {}, responseSchema: {}, values: {}) {
    // @ts-ignore
    this[RESPONSE_SCHEMA_SYMBOL] = responseSchema;

    applyPropertiesValidators(this, requestSchema, values);
  }

  getCommandName() {
    return this.constructor.name;
  }

  createResponse(payload: any) {
    // @ts-ignore
    const response = new (function () {})();

    // @ts-ignore
    applyPropertiesValidators(response, this[RESPONSE_SCHEMA_SYMBOL], payload);

    return response;
  }
}
