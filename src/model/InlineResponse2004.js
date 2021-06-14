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
import {BusinesssearchsBusinessinformations} from './BusinesssearchsBusinessinformations';

/**
 * The InlineResponse2004 model module.
 * @module model/InlineResponse2004
 * @version 0.1.1
 */
export class InlineResponse2004 {
  /**
   * Constructs a new <code>InlineResponse2004</code>.
   * @alias module:model/InlineResponse2004
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2004} obj Optional instance to populate.
   * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2004();
      if (data.hasOwnProperty('businessinformations'))
        obj.businessinformations = ApiClient.convertToType(data['businessinformations'], [BusinesssearchsBusinessinformations]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/BusinesssearchsBusinessinformations>} businessinformations
 */
InlineResponse2004.prototype.businessinformations = undefined;
