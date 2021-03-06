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
 * The InlineResponse20022TaxResidences model module.
 * @module model/InlineResponse20022TaxResidences
 * @version 0.1.1
 */
export class InlineResponse20022TaxResidences {
  /**
   * Constructs a new <code>InlineResponse20022TaxResidences</code>.
   * @alias module:model/InlineResponse20022TaxResidences
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20022TaxResidences</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20022TaxResidences} obj Optional instance to populate.
   * @return {module:model/InlineResponse20022TaxResidences} The populated <code>InlineResponse20022TaxResidences</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20022TaxResidences();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'Number');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('taxPayerId'))
        obj.taxPayerId = ApiClient.convertToType(data['taxPayerId'], 'String');
      if (data.hasOwnProperty('liabilityWaiver'))
        obj.liabilityWaiver = ApiClient.convertToType(data['liabilityWaiver'], 'Boolean');
      if (data.hasOwnProperty('createdDate'))
        obj.createdDate = ApiClient.convertToType(data['createdDate'], 'String');
      if (data.hasOwnProperty('lastUpdate'))
        obj.lastUpdate = ApiClient.convertToType(data['lastUpdate'], 'String');
      if (data.hasOwnProperty('deletedDate'))
        obj.deletedDate = ApiClient.convertToType(data['deletedDate'], 'String');
    }
    return obj;
  }
}

/**
 * TaxResidence Id
 * @member {Number} id
 */
InlineResponse20022TaxResidences.prototype.id = undefined;

/**
 * The user id
 * @member {Number} userId
 */
InlineResponse20022TaxResidences.prototype.userId = undefined;

/**
 * The residence country
 * @member {String} country
 */
InlineResponse20022TaxResidences.prototype.country = undefined;

/**
 * the taxPayer id
 * @member {String} taxPayerId
 */
InlineResponse20022TaxResidences.prototype.taxPayerId = undefined;

/**
 * Tax declaration
 * @member {Boolean} liabilityWaiver
 */
InlineResponse20022TaxResidences.prototype.liabilityWaiver = undefined;

/**
 * Date of creation
 * @member {String} createdDate
 */
InlineResponse20022TaxResidences.prototype.createdDate = undefined;

/**
 * Date of the TaxResidence has been updated
 * @member {String} lastUpdate
 */
InlineResponse20022TaxResidences.prototype.lastUpdate = undefined;

/**
 * Date of the TaxResidence has been deleted
 * @member {String} deletedDate
 */
InlineResponse20022TaxResidences.prototype.deletedDate = undefined;

