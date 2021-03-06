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
 * The InlineResponse20011CountryRestrictionGroups model module.
 * @module model/InlineResponse20011CountryRestrictionGroups
 * @version 0.1.1
 */
export class InlineResponse20011CountryRestrictionGroups {
  /**
   * Constructs a new <code>InlineResponse20011CountryRestrictionGroups</code>.
   * @alias module:model/InlineResponse20011CountryRestrictionGroups
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20011CountryRestrictionGroups</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20011CountryRestrictionGroups} obj Optional instance to populate.
   * @return {module:model/InlineResponse20011CountryRestrictionGroups} The populated <code>InlineResponse20011CountryRestrictionGroups</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20011CountryRestrictionGroups();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('isWhitelist'))
        obj.isWhitelist = ApiClient.convertToType(data['isWhitelist'], 'Boolean');
      if (data.hasOwnProperty('countries'))
        obj.countries = ApiClient.convertToType(data['countries'], ['String']);
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('startDate'))
        obj.startDate = ApiClient.convertToType(data['startDate'], 'String');
      if (data.hasOwnProperty('createdDate'))
        obj.createdDate = ApiClient.convertToType(data['createdDate'], 'String');
    }
    return obj;
  }
}

/**
 * Country Group's id
 * @member {Number} id
 */
InlineResponse20011CountryRestrictionGroups.prototype.id = undefined;

/**
 * Country Group's name
 * @member {String} name
 */
InlineResponse20011CountryRestrictionGroups.prototype.name = undefined;

/**
 * determines whether it will be a black or a white list
 * @member {Boolean} isWhitelist
 */
InlineResponse20011CountryRestrictionGroups.prototype.isWhitelist = undefined;

/**
 * Array of countries
 * @member {Array.<String>} countries
 */
InlineResponse20011CountryRestrictionGroups.prototype.countries = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse20011CountryRestrictionGroups.StatusEnum = {
  /**
   * value: "PENDING"
   * @const
   */
  PENDING: "PENDING",

  /**
   * value: "CANCELED"
   * @const
   */
  CANCELED: "CANCELED",

  /**
   * value: "VALIDATED"
   * @const
   */
  VALIDATED: "VALIDATED"
};
/**
 * status of the country group
 * @member {module:model/InlineResponse20011CountryRestrictionGroups.StatusEnum} status
 */
InlineResponse20011CountryRestrictionGroups.prototype.status = undefined;

/**
 * Date YYYY-MM-DD HH:MM:SS
 * @member {String} startDate
 */
InlineResponse20011CountryRestrictionGroups.prototype.startDate = undefined;

/**
 * Date YYYY-MM-DD HH:MM:SS
 * @member {String} createdDate
 */
InlineResponse20011CountryRestrictionGroups.prototype.createdDate = undefined;

