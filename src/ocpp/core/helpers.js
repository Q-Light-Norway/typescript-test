import Joi from "joi";
import debugFn from "debug";
import Enjoi from "enjoi";
import { DEBUG_LIBNAME } from "./constants.js";
const MODEL_VALUES_SYMBOL = Symbol("modelValues");

const debug = debugFn(DEBUG_LIBNAME);

export function applyPropertiesValidators(object, schema, values = {}) {
  debug("Object: ");
  debug(object);
  debug("Schema: ");
  debug(schema);
  debug("Values: ");
  debug(values);
  const joiSchema = new Enjoi(schema);

  object[MODEL_VALUES_SYMBOL] = {};

  const properties = {};
  for (let key in schema.properties) {
    if (!schema.properties.hasOwnProperty(key)) {
      return;
    }
    const validator = Joi.reach(joiSchema, key);

    validate(key, values[key], validator);
    object[MODEL_VALUES_SYMBOL][key] = values[key];

    properties[key] = {
      get: () => object[MODEL_VALUES_SYMBOL][key],
      set: (val) => {
        validate(key, val, validator);

        val === undefined
          ? delete object[MODEL_VALUES_SYMBOL][key]
          : (object[MODEL_VALUES_SYMBOL][key] = val);
      },
      enumerable: true,
      configurable: false,
    };
  }

  Object.defineProperties(object, properties);

  // ocpp-client {
  //   ocpp-client   connectorId: 1,
  //   ocpp-client   meterValue: [ { timestamp: '2021-12-02T14:15:13.832Z', sampledValue: [Array] } ],
  //   ocpp-client   transactionId: 3667820
  //   ocpp-client } +1ms

  function validate(fieldName, value, schema) {
    const { error } = Joi.validate(value, schema);
    if (error !== null) {
      debug(error);
      debug("fieldName: ");
      debug(fieldName);
      debug("value: ");
      debug(value.meterValue.sampledValue);
      debug("schema: ");
      debug(schema);
      throw new Error(`Invalid value "${value}" for field ${fieldName}`);
    }
  }
}

export function getObjectValues(object) {
  const values = { ...(object[MODEL_VALUES_SYMBOL] || {}) };

  for (let key in values) {
    if (!values.hasOwnProperty(key)) {
      return;
    }
    if (values[key] === undefined) {
      delete values[key];
    }
  }
  return object[MODEL_VALUES_SYMBOL];
}
