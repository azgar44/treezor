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
 * The CardReservesCheckBody model module.
 * @module model/CardReservesCheckBody
 * @version 0.1.1
 */
export class CardReservesCheckBody {
  /**
   * Constructs a new <code>CardReservesCheckBody</code>.
   * @alias module:model/CardReservesCheckBody
   * @class
   * @param cardId {Number} ID of the card
   * @param amount {Number} Amout you want to check
   */
  constructor(cardId, amount) {
    this.cardId = cardId;
    this.amount = amount;
  }

  /**
   * Constructs a <code>CardReservesCheckBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CardReservesCheckBody} obj Optional instance to populate.
   * @return {module:model/CardReservesCheckBody} The populated <code>CardReservesCheckBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CardReservesCheckBody();
      if (data.hasOwnProperty('cardId'))
        obj.cardId = ApiClient.convertToType(data['cardId'], 'Number');
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
    }
    return obj;
  }
}

/**
 * ID of the card
 * @member {Number} cardId
 */
CardReservesCheckBody.prototype.cardId = undefined;

/**
 * Amout you want to check
 * @member {Number} amount
 */
CardReservesCheckBody.prototype.amount = undefined;
