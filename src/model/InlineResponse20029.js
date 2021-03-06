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
import {InlineResponse20029Wallets} from './InlineResponse20029Wallets';

/**
 * The InlineResponse20029 model module.
 * @module model/InlineResponse20029
 * @version 0.1.1
 */
export class InlineResponse20029 {
  /**
   * Constructs a new <code>InlineResponse20029</code>.
   * @alias module:model/InlineResponse20029
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20029</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20029} obj Optional instance to populate.
   * @return {module:model/InlineResponse20029} The populated <code>InlineResponse20029</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20029();
      if (data.hasOwnProperty('wallets'))
        obj.wallets = ApiClient.convertToType(data['wallets'], [InlineResponse20029Wallets]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/InlineResponse20029Wallets>} wallets
 */
InlineResponse20029.prototype.wallets = undefined;

