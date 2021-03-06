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

/**
 * The InlineResponse201Users model module.
 * @module model/InlineResponse201Users
 * @version 0.1.1
 */
export class InlineResponse201Users {
  /**
   * Constructs a new <code>InlineResponse201Users</code>.
   * @alias module:model/InlineResponse201Users
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse201Users</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse201Users} obj Optional instance to populate.
   * @return {module:model/InlineResponse201Users} The populated <code>InlineResponse201Users</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse201Users();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('identification-id'))
        obj.identificationId = ApiClient.convertToType(data['identification-id'], 'String');
      if (data.hasOwnProperty('identification-url'))
        obj.identificationUrl = ApiClient.convertToType(data['identification-url'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} description
 */
InlineResponse201Users.prototype.description = undefined;

/**
 * @member {String} identificationId
 */
InlineResponse201Users.prototype.identificationId = undefined;

/**
 * @member {String} identificationUrl
 */
InlineResponse201Users.prototype.identificationUrl = undefined;

