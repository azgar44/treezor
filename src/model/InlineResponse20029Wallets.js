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
 * The InlineResponse20029Wallets model module.
 * @module model/InlineResponse20029Wallets
 * @version 0.1.1
 */
export class InlineResponse20029Wallets {
  /**
   * Constructs a new <code>InlineResponse20029Wallets</code>.
   * @alias module:model/InlineResponse20029Wallets
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20029Wallets</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20029Wallets} obj Optional instance to populate.
   * @return {module:model/InlineResponse20029Wallets} The populated <code>InlineResponse20029Wallets</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20029Wallets();
      if (data.hasOwnProperty('walletId'))
        obj.walletId = ApiClient.convertToType(data['walletId'], 'Number');
      if (data.hasOwnProperty('walletTypeId'))
        obj.walletTypeId = ApiClient.convertToType(data['walletTypeId'], 'Number');
      if (data.hasOwnProperty('walletStatus'))
        obj.walletStatus = ApiClient.convertToType(data['walletStatus'], 'String');
      if (data.hasOwnProperty('codeStatus'))
        obj.codeStatus = ApiClient.convertToType(data['codeStatus'], 'Number');
      if (data.hasOwnProperty('informationStatus'))
        obj.informationStatus = ApiClient.convertToType(data['informationStatus'], 'String');
      if (data.hasOwnProperty('walletTag'))
        obj.walletTag = ApiClient.convertToType(data['walletTag'], 'String');
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'Number');
      if (data.hasOwnProperty('userLastname'))
        obj.userLastname = ApiClient.convertToType(data['userLastname'], 'String');
      if (data.hasOwnProperty('userFirstname'))
        obj.userFirstname = ApiClient.convertToType(data['userFirstname'], 'String');
      if (data.hasOwnProperty('jointUserId'))
        obj.jointUserId = ApiClient.convertToType(data['jointUserId'], 'Number');
      if (data.hasOwnProperty('tariffId'))
        obj.tariffId = ApiClient.convertToType(data['tariffId'], 'Number');
      if (data.hasOwnProperty('eventName'))
        obj.eventName = ApiClient.convertToType(data['eventName'], 'String');
      if (data.hasOwnProperty('eventAlias'))
        obj.eventAlias = ApiClient.convertToType(data['eventAlias'], 'String');
      if (data.hasOwnProperty('eventDate'))
        obj.eventDate = ApiClient.convertToType(data['eventDate'], 'String');
      if (data.hasOwnProperty('eventMessage'))
        obj.eventMessage = ApiClient.convertToType(data['eventMessage'], 'String');
      if (data.hasOwnProperty('eventPayinStartDate'))
        obj.eventPayinStartDate = ApiClient.convertToType(data['eventPayinStartDate'], 'String');
      if (data.hasOwnProperty('eventPayinEndDate'))
        obj.eventPayinEndDate = ApiClient.convertToType(data['eventPayinEndDate'], 'String');
      if (data.hasOwnProperty('contractSigned'))
        obj.contractSigned = ApiClient.convertToType(data['contractSigned'], 'Number');
      if (data.hasOwnProperty('bic'))
        obj.bic = ApiClient.convertToType(data['bic'], 'String');
      if (data.hasOwnProperty('iban'))
        obj.iban = ApiClient.convertToType(data['iban'], 'String');
      if (data.hasOwnProperty('urlImage'))
        obj.urlImage = ApiClient.convertToType(data['urlImage'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('createdDate'))
        obj.createdDate = ApiClient.convertToType(data['createdDate'], 'String');
      if (data.hasOwnProperty('modifiedDate'))
        obj.modifiedDate = ApiClient.convertToType(data['modifiedDate'], 'String');
      if (data.hasOwnProperty('payinCount'))
        obj.payinCount = ApiClient.convertToType(data['payinCount'], 'Number');
      if (data.hasOwnProperty('payoutCount'))
        obj.payoutCount = ApiClient.convertToType(data['payoutCount'], 'Number');
      if (data.hasOwnProperty('transferCount'))
        obj.transferCount = ApiClient.convertToType(data['transferCount'], 'Number');
      if (data.hasOwnProperty('solde'))
        obj.solde = ApiClient.convertToType(data['solde'], 'Number');
      if (data.hasOwnProperty('authorizedBalance'))
        obj.authorizedBalance = ApiClient.convertToType(data['authorizedBalance'], 'Number');
      if (data.hasOwnProperty('totalRows'))
        obj.totalRows = ApiClient.convertToType(data['totalRows'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} walletId
 */
InlineResponse20029Wallets.prototype.walletId = undefined;

/**
 * | Id | Description | |----|----| | 9 | Electronic Money Wallet | | 10 | Payment Account Wallet | | 13 | Mirror Wallet | | 14 | Electronic Money Card (Internal only) | 
 * @member {Number} walletTypeId
 */
InlineResponse20029Wallets.prototype.walletTypeId = undefined;

/**
 * Allowed values for the <code>walletStatus</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse20029Wallets.WalletStatusEnum = {
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
 * @member {module:model/InlineResponse20029Wallets.WalletStatusEnum} walletStatus
 */
InlineResponse20029Wallets.prototype.walletStatus = undefined;

/**
 * @member {Number} codeStatus
 */
InlineResponse20029Wallets.prototype.codeStatus = undefined;

/**
 * @member {String} informationStatus
 */
InlineResponse20029Wallets.prototype.informationStatus = undefined;

/**
 * @member {String} walletTag
 */
InlineResponse20029Wallets.prototype.walletTag = undefined;

/**
 * @member {Number} userId
 */
InlineResponse20029Wallets.prototype.userId = undefined;

/**
 * @member {String} userLastname
 */
InlineResponse20029Wallets.prototype.userLastname = undefined;

/**
 * @member {String} userFirstname
 */
InlineResponse20029Wallets.prototype.userFirstname = undefined;

/**
 * @member {Number} jointUserId
 */
InlineResponse20029Wallets.prototype.jointUserId = undefined;

/**
 * @member {Number} tariffId
 */
InlineResponse20029Wallets.prototype.tariffId = undefined;

/**
 * @member {String} eventName
 */
InlineResponse20029Wallets.prototype.eventName = undefined;

/**
 * @member {String} eventAlias
 */
InlineResponse20029Wallets.prototype.eventAlias = undefined;

/**
 * Date YYYY-MM-DD
 * @member {String} eventDate
 */
InlineResponse20029Wallets.prototype.eventDate = undefined;

/**
 * @member {String} eventMessage
 */
InlineResponse20029Wallets.prototype.eventMessage = undefined;

/**
 * Date YYYY-MM-DD
 * @member {String} eventPayinStartDate
 */
InlineResponse20029Wallets.prototype.eventPayinStartDate = undefined;

/**
 * Date YYYY-MM-DD
 * @member {String} eventPayinEndDate
 */
InlineResponse20029Wallets.prototype.eventPayinEndDate = undefined;

/**
 * @member {Number} contractSigned
 */
InlineResponse20029Wallets.prototype.contractSigned = undefined;

/**
 * @member {String} bic
 */
InlineResponse20029Wallets.prototype.bic = undefined;

/**
 * @member {String} iban
 */
InlineResponse20029Wallets.prototype.iban = undefined;

/**
 * @member {String} urlImage
 */
InlineResponse20029Wallets.prototype.urlImage = undefined;

/**
 * @member {String} currency
 */
InlineResponse20029Wallets.prototype.currency = undefined;

/**
 * Date YYYY-MM-DD HH:MM:SS
 * @member {String} createdDate
 */
InlineResponse20029Wallets.prototype.createdDate = undefined;

/**
 * Date YYYY-MM-DD HH:MM:SS
 * @member {String} modifiedDate
 */
InlineResponse20029Wallets.prototype.modifiedDate = undefined;

/**
 * @member {Number} payinCount
 */
InlineResponse20029Wallets.prototype.payinCount = undefined;

/**
 * @member {Number} payoutCount
 */
InlineResponse20029Wallets.prototype.payoutCount = undefined;

/**
 * @member {Number} transferCount
 */
InlineResponse20029Wallets.prototype.transferCount = undefined;

/**
 * @member {Number} solde
 */
InlineResponse20029Wallets.prototype.solde = undefined;

/**
 * @member {Number} authorizedBalance
 */
InlineResponse20029Wallets.prototype.authorizedBalance = undefined;

/**
 * @member {Number} totalRows
 */
InlineResponse20029Wallets.prototype.totalRows = undefined;
