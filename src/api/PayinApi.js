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
import {ApiClient} from "../ApiClient";
import {InlineResponse20017} from '../model/InlineResponse20017';
import {InlineResponseDefault} from '../model/InlineResponseDefault';

/**
* Payin service.
* @module api/PayinApi
* @version 0.1.1
*/
export class PayinApi {

    /**
    * Constructs a new PayinApi. 
    * @alias module:api/PayinApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deletePayin operation.
     * @callback moduleapi/PayinApi~deletePayinCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20017{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete a pay in
     * Deactivate a payin in the system.
     * @param {Number} id Payin&#x27;s id.
     * @param {module:api/PayinApi~deletePayinCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deletePayin(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletePayin");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20017;

      return this.apiClient.callApi(
        '/payins/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getPayin operation.
     * @callback moduleapi/PayinApi~getPayinCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20017{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get a pay in
     * Get a payin from the system by its id.
     * @param {Number} id Payin&#x27;s id.
     * @param {module:api/PayinApi~getPayinCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getPayin(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPayin");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20017;

      return this.apiClient.callApi(
        '/payins/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getPayins operation.
     * @callback moduleapi/PayinApi~getPayinsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20017{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * search pay ins
     * Get payins that match search criteria.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserIP Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.payinId Payin&#x27;s id.
     * @param {Number} opts.walletId Payin&#x27;s wallet id.
     * @param {String} opts.payinTag Client custom data.
     * @param {String} opts.payinStatus Payins&#x27;s status.
     * @param {Number} opts.userId User&#x27;s id who performed the operation (debited).
     * @param {String} opts.userName User&#x27;s name who performed the operation (debited).
     * @param {String} opts.userEmail User&#x27;s email who performed the operation (debited).
     * @param {Number} opts.beneficiaryUserId User&#x27;s id who received the operation (credited).
     * @param {String} opts.eventAlias Wallet eventAlias of the payin (credited wallet).
     * @param {Number} opts.walletTypeId Payin&#x27;s wallet type id.
     * @param {String} opts.paymentMethodId Payin&#x27;s payment method id.
     * @param {Date} opts.createdDateFrom The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
     * @param {Date} opts.createdDateTo The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
     * @param {Date} opts.updatedDateFrom The modification date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
     * @param {Date} opts.updatedDateTo The modification date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
     * @param {Number} opts.pageNumber Pagination page number. More info [here](https://agent.treezor.com/lists). 
     * @param {Number} opts.pageCount The number of items per page. More info [here](https://agent.treezor.com/lists). 
     * @param {String} opts.sortBy The transaction element you want to sort the list with. Default value : createdDate. More info [here](https://agent.treezor.com/lists). 
     * @param {String} opts.sortOrder The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists). 
     * @param {module:api/PayinApi~getPayinsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getPayins(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'accessSignature': opts['accessSignature'],'accessTag': opts['accessTag'],'accessUserId': opts['accessUserId'],'accessUserIP': opts['accessUserIP'],'payinId': opts['payinId'],'walletId': opts['walletId'],'payinTag': opts['payinTag'],'payinStatus': opts['payinStatus'],'userId': opts['userId'],'userName': opts['userName'],'userEmail': opts['userEmail'],'beneficiaryUserId': opts['beneficiaryUserId'],'eventAlias': opts['eventAlias'],'walletTypeId': opts['walletTypeId'],'paymentMethodId': opts['paymentMethodId'],'createdDateFrom': opts['createdDateFrom'],'createdDateTo': opts['createdDateTo'],'updatedDateFrom': opts['updatedDateFrom'],'updatedDateTo': opts['updatedDateTo'],'pageNumber': opts['pageNumber'],'pageCount': opts['pageCount'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20017;

      return this.apiClient.callApi(
        '/payins', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postPayin operation.
     * @callback moduleapi/PayinApi~postPayinCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20017{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a pay in
     * Create a new pay in in the system.
     * @param {Number} walletId Credited wallet&#x27;s ID
     * @param {Number} userId User&#x27;s id who makes the pay in. NB : this parameter should should not be transmitted in the case of payin of method Sepa Direct Debit Core (21)   OR Cheque (26). It will be set automatically by the system. 
     * @param {Number} paymentMethodId | Id | Payment by | | ---| --- | | 11 | Card | | 14 | Oneclick card (without payment form) | | 21 | Sepa Direct Debit Core | | 23 | Full Hosted HTML Payment Form. Please note that if you use this paymentMethodId the flieds paymentAcceptedUrl, paymentRefusedUrl, paymentWaitingUrl, paymentCanceledUrl and paymentExceptionUrl are mandatory. CSS of the payment page can be customized | | 24 | IFrame Payment Form. Please note that if you use this paymentMethodId the flieds paymentAcceptedUrl, paymentRefusedUrl, paymentWaitingUrl, paymentCanceledUrl and paymentExceptionUrl are mandatory. CSS of the payment page can be customized| | 25 | Payment made through an SDK - You cannot directly create a payin directly with this method id. The payin will be automatically created by the system. | | 26 | Cheque | 
     * @param {Number} amount Pay in amount.
     * @param {String} currency Payin currency. Format: [ISO 4217](https://fr.wikipedia.org/wiki/ISO_4217). Must be the same as the wallet&#x27;s. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.accessUserIp Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.payinTag Client custom data.
     * @param {Number} opts.oneclickcardId Oneclick card&#x27;s id. Mandatory if payment method is 14. Useless otherwise.
     * @param {String} opts.paymentAcceptedUrl Url where cardholder is redirected if payment is successful. When using paymentMethodId 23 and 24 an HTTPS URL is mandatory.
     * @param {String} opts.paymentWaitingUrl Url where cardholder is redirected to wait payment processing. When using paymentMethodId 23 and 24 an HTTPS URL is mandatory.
     * @param {String} opts.paymentRefusedUrl Url where cardholder is redirected if payment is refused. When using paymentMethodId 23 and 24 an HTTPS URL is mandatory.
     * @param {String} opts.paymentCanceledUrl Url where cardholder is redirected if payment is canceled. When using paymentMethodId 23 and 24 an HTTPS URL is mandatory.
     * @param {String} opts.paymentExceptionUrl Url where cardholder is redirected if the payment process raised an exception. When using paymentMethodId 23 and 24 an HTTPS URL is mandatory.
     * @param {Number} opts.distributorFee Distributor fee
     * @param {String} opts.messageToUser Message to send to wallet&#x27;s user. In the case of a Sepa Direct Debit Core payment method this parameter will be the reconciliation information transmitted to the Debtor (ie. Invoice number ...). In this case it cannot be more than 140 characters.
     * @param {module:model/String} opts.language Language for the third party interface.
     * @param {String} opts.createdIp User&#x27;s IP address
     * @param {String} opts.payinDate The date at which the SDD should be presented. This parameter is mandatory when performing a payin of method SDD Core. Format is YYYY-MM-DD The date should follow some requirements (Traget 2 working day) :    - Be a weekday (Monday to Friday)   - January 1st is excluded   - May 1st is excluded   - December 25 is excluded   - December 26th is excluded   - Easter day is excluded   - Easter Monday is excluded   - Good Friday is excluded 
     * @param {Number} opts.mandateId The id of the mandate. This parameter is mandatory when performing a payin with method SDD Core.
     * @param {module:api/PayinApi~postPayinCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    postPayin(walletId, userId, paymentMethodId, amount, currency, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'walletId' is set
      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling postPayin");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling postPayin");
      }
      // verify the required parameter 'paymentMethodId' is set
      if (paymentMethodId === undefined || paymentMethodId === null) {
        throw new Error("Missing the required parameter 'paymentMethodId' when calling postPayin");
      }
      // verify the required parameter 'amount' is set
      if (amount === undefined || amount === null) {
        throw new Error("Missing the required parameter 'amount' when calling postPayin");
      }
      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling postPayin");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'accessSignature': opts['accessSignature'],'accessTag': opts['accessTag'],'accessUserId': opts['accessUserId'],'accessUserIp': opts['accessUserIp'],'payinTag': opts['payinTag'],'walletId': walletId,'userId': userId,'paymentMethodId': paymentMethodId,'oneclickcardId': opts['oneclickcardId'],'paymentAcceptedUrl': opts['paymentAcceptedUrl'],'paymentWaitingUrl': opts['paymentWaitingUrl'],'paymentRefusedUrl': opts['paymentRefusedUrl'],'paymentCanceledUrl': opts['paymentCanceledUrl'],'paymentExceptionUrl': opts['paymentExceptionUrl'],'amount': amount,'distributorFee': opts['distributorFee'],'currency': currency,'messageToUser': opts['messageToUser'],'language': opts['language'],'createdIp': opts['createdIp'],'payinDate': opts['payinDate'],'mandateId': opts['mandateId']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20017;

      return this.apiClient.callApi(
        '/payins', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}