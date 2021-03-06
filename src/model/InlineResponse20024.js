/*
 * Treezor
 * Treezor API.  more info [here](https://www.treezor.com). 
 *
 * OpenAPI spec version: 0.1.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.26
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {InlineResponse20024Transfers} from './InlineResponse20024Transfers';

/**
 * The InlineResponse20024 model module.
 * @module model/InlineResponse20024
 * @version 0.1.1
 */
export class InlineResponse20024 {
  /**
   * Constructs a new <code>InlineResponse20024</code>.
   * @alias module:model/InlineResponse20024
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20024</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20024} obj Optional instance to populate.
   * @return {module:model/InlineResponse20024} The populated <code>InlineResponse20024</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20024();
      if (data.hasOwnProperty('transfers'))
        obj.transfers = ApiClient.convertToType(data['transfers'], [InlineResponse20024Transfers]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/InlineResponse20024Transfers>} transfers
 */
InlineResponse20024.prototype.transfers = undefined;

