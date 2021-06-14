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
 * The BusinesssearchsBusinessinformations model module.
 * @module model/BusinesssearchsBusinessinformations
 * @version 0.1.1
 */
export class BusinesssearchsBusinessinformations {
  /**
   * Constructs a new <code>BusinesssearchsBusinessinformations</code>.
   * @alias module:model/BusinesssearchsBusinessinformations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BusinesssearchsBusinessinformations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BusinesssearchsBusinessinformations} obj Optional instance to populate.
   * @return {module:model/BusinesssearchsBusinessinformations} The populated <code>BusinesssearchsBusinessinformations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BusinesssearchsBusinessinformations();
      if (data.hasOwnProperty('legalName'))
        obj.legalName = ApiClient.convertToType(data['legalName'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('legalTvaNumber'))
        obj.legalTvaNumber = ApiClient.convertToType(data['legalTvaNumber'], 'String');
      if (data.hasOwnProperty('legalRegistrationNumber'))
        obj.legalRegistrationNumber = ApiClient.convertToType(data['legalRegistrationNumber'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('officeType'))
        obj.officeType = ApiClient.convertToType(data['officeType'], 'Number');
      if (data.hasOwnProperty('safeNumber'))
        obj.safeNumber = ApiClient.convertToType(data['safeNumber'], 'String');
      if (data.hasOwnProperty('activityType'))
        obj.activityType = ApiClient.convertToType(data['activityType'], 'String');
      if (data.hasOwnProperty('externalId'))
        obj.externalId = ApiClient.convertToType(data['externalId'], 'String');
      if (data.hasOwnProperty('address1'))
        obj.address1 = ApiClient.convertToType(data['address1'], 'String');
      if (data.hasOwnProperty('postcode'))
        obj.postcode = ApiClient.convertToType(data['postcode'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('tradename'))
        obj.tradename = ApiClient.convertToType(data['tradename'], 'String');
    }
    return obj;
  }
}

/**
 * Business commercial name.
 * @member {String} legalName
 */
BusinesssearchsBusinessinformations.prototype.legalName = undefined;

/**
 * Business phone number.
 * @member {String} phone
 */
BusinesssearchsBusinessinformations.prototype.phone = undefined;

/**
 * Business VAT number.
 * @member {String} legalTvaNumber
 */
BusinesssearchsBusinessinformations.prototype.legalTvaNumber = undefined;

/**
 * Business registration number.
 * @member {String} legalRegistrationNumber
 */
BusinesssearchsBusinessinformations.prototype.legalRegistrationNumber = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
BusinesssearchsBusinessinformations.StatusEnum = {
  /**
   * value: "D"
   * @const
   */
  D: "D",

  /**
   * value: "N"
   * @const
   */
  N: "N",

  /**
   * value: "I"
   * @const
   */
  I: "I",

  /**
   * value: "A"
   * @const
   */
  A: "A",

  /**
   * value: "C"
   * @const
   */
  C: "C",

  /**
   * value: "T"
   * @const
   */
  T: "T",

  /**
   * value: "S"
   * @const
   */
  S: "S",

  /**
   * value: "L"
   * @const
   */
  L: "L",

  /**
   * value: "O"
   * @const
   */
  O: "O"
};
/**
 * | Code | Description | | ---- | ----------- | |  D   | Deleted     | |  N   | Company non diffusible (Insee) | |  I   | Inactive (Insee) | |  A   | Economically active | |  C   | Closed | |  T   | Transfered | |  S   | Economically stopped (Insee) | |  L   | Liquidation | |  O   | Dormant company | 
 * @member {module:model/BusinesssearchsBusinessinformations.StatusEnum} status
 */
BusinesssearchsBusinessinformations.prototype.status = undefined;

/**
 * | Code | Description | | ---- | ----        | |  0   | Secondary establishment | |  1   | Headquarter | 
 * @member {Number} officeType
 */
BusinesssearchsBusinessinformations.prototype.officeType = undefined;

/**
 * Business SAFE number.
 * @member {String} safeNumber
 */
BusinesssearchsBusinessinformations.prototype.safeNumber = undefined;

/**
 * Business sector. Code NAF in France.
 * @member {String} activityType
 */
BusinesssearchsBusinessinformations.prototype.activityType = undefined;

/**
 * Business external id.
 * @member {String} externalId
 */
BusinesssearchsBusinessinformations.prototype.externalId = undefined;

/**
 * Business' street.
 * @member {String} address1
 */
BusinesssearchsBusinessinformations.prototype.address1 = undefined;

/**
 * Business' postal code.
 * @member {String} postcode
 */
BusinesssearchsBusinessinformations.prototype.postcode = undefined;

/**
 * Business' city.
 * @member {String} city
 */
BusinesssearchsBusinessinformations.prototype.city = undefined;

/**
 * Business' province.
 * @member {String} state
 */
BusinesssearchsBusinessinformations.prototype.state = undefined;

/**
 * Business' country.
 * @member {String} country
 */
BusinesssearchsBusinessinformations.prototype.country = undefined;

/**
 * Business trade name
 * @member {String} tradename
 */
BusinesssearchsBusinessinformations.prototype.tradename = undefined;
