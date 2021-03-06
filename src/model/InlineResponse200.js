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
import {InlineResponse200AcquirerMerchantIdGroups} from './InlineResponse200AcquirerMerchantIdGroups';

/**
 * The InlineResponse200 model module.
 * @module model/InlineResponse200
 * @version 0.1.1
 */
export class InlineResponse200 {
  /**
   * Constructs a new <code>InlineResponse200</code>.
   * @alias module:model/InlineResponse200
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200} obj Optional instance to populate.
   * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse200();
      if (data.hasOwnProperty('acquirerMerchantIdGroups'))
        obj.acquirerMerchantIdGroups = ApiClient.convertToType(data['acquirerMerchantIdGroups'], [InlineResponse200AcquirerMerchantIdGroups]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/InlineResponse200AcquirerMerchantIdGroups>} acquirerMerchantIdGroups
 */
InlineResponse200.prototype.acquirerMerchantIdGroups = undefined;

