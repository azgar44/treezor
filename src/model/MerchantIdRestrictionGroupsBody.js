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
 * The MerchantIdRestrictionGroupsBody model module.
 * @module model/MerchantIdRestrictionGroupsBody
 * @version 0.1.1
 */
export class MerchantIdRestrictionGroupsBody {
  /**
   * Constructs a new <code>MerchantIdRestrictionGroupsBody</code>.
   * @alias module:model/MerchantIdRestrictionGroupsBody
   * @class
   * @param name {String} Name of the Merchant ID group
   * @param merchants {Array.<String>} Array of Merchant ID
   */
  constructor(name, merchants) {
    this.name = name;
    this.merchants = merchants;
  }

  /**
   * Constructs a <code>MerchantIdRestrictionGroupsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MerchantIdRestrictionGroupsBody} obj Optional instance to populate.
   * @return {module:model/MerchantIdRestrictionGroupsBody} The populated <code>MerchantIdRestrictionGroupsBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MerchantIdRestrictionGroupsBody();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('isWhitelist'))
        obj.isWhitelist = ApiClient.convertToType(data['isWhitelist'], 'Boolean');
      if (data.hasOwnProperty('merchants'))
        obj.merchants = ApiClient.convertToType(data['merchants'], ['String']);
      if (data.hasOwnProperty('startDate'))
        obj.startDate = ApiClient.convertToType(data['startDate'], 'String');
    }
    return obj;
  }
}

/**
 * Name of the Merchant ID group
 * @member {String} name
 */
MerchantIdRestrictionGroupsBody.prototype.name = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
MerchantIdRestrictionGroupsBody.StatusEnum = {
  /**
   * value: "VALIDATED"
   * @const
   */
  VALIDATED: "VALIDATED",

  /**
   * value: "PENDING"
   * @const
   */
  PENDING: "PENDING",

  /**
   * value: "CANCELED"
   * @const
   */
  CANCELED: "CANCELED"
};
/**
 * Status of the Merchant ID group
 * @member {module:model/MerchantIdRestrictionGroupsBody.StatusEnum} status
 */
MerchantIdRestrictionGroupsBody.prototype.status = undefined;

/**
 * determines whether it will be a black or a white list
 * @member {Boolean} isWhitelist
 * @default true
 */
MerchantIdRestrictionGroupsBody.prototype.isWhitelist = true;

/**
 * Array of Merchant ID
 * @member {Array.<String>} merchants
 */
MerchantIdRestrictionGroupsBody.prototype.merchants = undefined;

/**
 * The date at which the Merchant ID restriction group will be take into account. Format YYYY-MM-DD HH:MM:SS
 * @member {String} startDate
 */
MerchantIdRestrictionGroupsBody.prototype.startDate = undefined;
