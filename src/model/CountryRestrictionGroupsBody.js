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
 * The CountryRestrictionGroupsBody model module.
 * @module model/CountryRestrictionGroupsBody
 * @version 0.1.1
 */
export class CountryRestrictionGroupsBody {
  /**
   * Constructs a new <code>CountryRestrictionGroupsBody</code>.
   * @alias module:model/CountryRestrictionGroupsBody
   * @class
   * @param name {String} Name of the country restriction group
   * @param countries {Array.<Number>} Array of countries
   */
  constructor(name, countries) {
    this.name = name;
    this.countries = countries;
  }

  /**
   * Constructs a <code>CountryRestrictionGroupsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CountryRestrictionGroupsBody} obj Optional instance to populate.
   * @return {module:model/CountryRestrictionGroupsBody} The populated <code>CountryRestrictionGroupsBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CountryRestrictionGroupsBody();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('isWhitelist'))
        obj.isWhitelist = ApiClient.convertToType(data['isWhitelist'], 'Boolean');
      if (data.hasOwnProperty('countries'))
        obj.countries = ApiClient.convertToType(data['countries'], ['Number']);
      if (data.hasOwnProperty('startDate'))
        obj.startDate = ApiClient.convertToType(data['startDate'], 'String');
    }
    return obj;
  }
}

/**
 * Name of the country restriction group
 * @member {String} name
 */
CountryRestrictionGroupsBody.prototype.name = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CountryRestrictionGroupsBody.StatusEnum = {
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
 * Status of the country group
 * @member {module:model/CountryRestrictionGroupsBody.StatusEnum} status
 */
CountryRestrictionGroupsBody.prototype.status = undefined;

/**
 * determines whether it will be a black or a white list
 * @member {Boolean} isWhitelist
 * @default true
 */
CountryRestrictionGroupsBody.prototype.isWhitelist = true;

/**
 * Array of countries
 * @member {Array.<Number>} countries
 */
CountryRestrictionGroupsBody.prototype.countries = undefined;

/**
 * The date at which the country restriction group will be take into account. Format YYYY-MM-DD HH:MM:SS
 * @member {String} startDate
 */
CountryRestrictionGroupsBody.prototype.startDate = undefined;

