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
import {InlineResponse20019} from '../model/InlineResponse20019';
import {InlineResponseDefault} from '../model/InlineResponseDefault';

/**
* Payout service.
* @module api/PayoutApi
* @version 0.1.1
*/
export class PayoutApi {

    /**
    * Constructs a new PayoutApi. 
    * @alias module:api/PayoutApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deletePayout operation.
     * @callback moduleapi/PayoutApi~deletePayoutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20019{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * cancel a payout
     * Change pay out status to CANCELED. A VALIDATED pay out can&#x27;t be canceled.
     * @param {Number} id Payouts internal id.
     * @param {module:api/PayoutApi~deletePayoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deletePayout(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletePayout");
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
      let returnType = InlineResponse20019;

      return this.apiClient.callApi(
        '/payouts/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getPayout operation.
     * @callback moduleapi/PayoutApi~getPayoutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20019{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get a payout
     * Get a pay out from the system.
     * @param {Number} id Payouts internal id.
     * @param {module:api/PayoutApi~getPayoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getPayout(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPayout");
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
      let returnType = InlineResponse20019;

      return this.apiClient.callApi(
        '/payouts/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getPayouts operation.
     * @callback moduleapi/PayoutApi~getPayoutsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20019{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * search payout(s)
     * Get payout(s) that match search criteria. The request must contains at least one of those inputs  payoutId, bankaccountId, beneficiaryId, payoutTag
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.accessUserIp Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.payoutId Payout&#x27;s Id
     * @param {String} opts.payoutTag Custom data.
     * @param {String} opts.payoutStatus pay out status; Possible values: * CANCELED * PENDING * VALIDATED 
     * @param {Number} opts.payoutTypeId Pay out type&#x27;s id :  | ID | Description | |-----|-----| | 1 | Credit Transfer | | 2 | Direct Debit | 
     * @param {Number} opts.walletId Pay out wallet&#x27;s id.
     * @param {Number} opts.userId Pay out user&#x27;s id.
     * @param {Date} opts.payoutDate pay out execution date. Format: YYYY-MM-DD HH:MM:SS&#x27; 
     * @param {Number} opts.bankaccountId Pay out bank account id.
     * @param {Number} opts.beneficiaryId Pay out beneficiary id.
     * @param {String} opts.amount Pay out amount.
     * @param {String} opts.currency Transfert amount currency. Format: [ISO 4217](https://fr.wikipedia.org/wiki/ISO_4217). 
     * @param {Number} opts.pageNumber Pagination page number. More info [here](https://agent.treezor.com/lists). 
     * @param {Number} opts.pageCount The number of items per page. More info [here](https://agent.treezor.com/lists). 
     * @param {String} opts.sortBy The transaction element you want to sort the list with. Default value : _createdDate_. More info [here](https://agent.treezor.com/lists). 
     * @param {String} opts.sortOrder The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists). 
     * @param {Date} opts.createdDateFrom The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
     * @param {Date} opts.createdDateTo The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
     * @param {Date} opts.updatedDateFrom The modification date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
     * @param {Date} opts.updatedDateTo The modification date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
     * @param {module:api/PayoutApi~getPayoutsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getPayouts(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'accessSignature': opts['accessSignature'],'accessTag': opts['accessTag'],'accessUserId': opts['accessUserId'],'accessUserIp': opts['accessUserIp'],'payoutId': opts['payoutId'],'payoutTag': opts['payoutTag'],'payoutStatus': opts['payoutStatus'],'payoutTypeId': opts['payoutTypeId'],'walletId': opts['walletId'],'userId': opts['userId'],'payoutDate': opts['payoutDate'],'bankaccountId': opts['bankaccountId'],'beneficiaryId': opts['beneficiaryId'],'amount': opts['amount'],'currency': opts['currency'],'pageNumber': opts['pageNumber'],'pageCount': opts['pageCount'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'createdDateFrom': opts['createdDateFrom'],'createdDateTo': opts['createdDateTo'],'updatedDateFrom': opts['updatedDateFrom'],'updatedDateTo': opts['updatedDateTo']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20019;

      return this.apiClient.callApi(
        '/payouts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postPayout operation.
     * @callback moduleapi/PayoutApi~postPayoutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20019{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a pay out
     * Create a new pay out in the system.
     * @param {Number} walletId Pay out wallet id.
     * @param {Number} amount Pay out amount.
     * @param {String} currency Transfert amount currency. Format: [ISO 4217](https://fr.wikipedia.org/wiki/ISO_4217). 
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.accessUserIp Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.payoutTag Custom data.
     * @param {Number} opts.bankaccountId Pay out bank account&#x27;s id. Mandatory id beneficiaryId is not provided. If bankaccountId and beneficiaryId are both provided, the beneficiaryId will be used.
     * @param {Number} opts.beneficiaryId Pay out beneficiary&#x27;s id. Mandatory id bankaccountId is not provided. If bankaccountId and beneficiaryId are both provided, the beneficiaryId will be used.
     * @param {String} opts.label Pay out label that will be displayed in the receiver&#x27;s account (140 chars max).
     * @param {String} opts.supportingFileLink Support file link
     * @param {module:api/PayoutApi~postPayoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    postPayout(walletId, amount, currency, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'walletId' is set
      if (walletId === undefined || walletId === null) {
        throw new Error("Missing the required parameter 'walletId' when calling postPayout");
      }
      // verify the required parameter 'amount' is set
      if (amount === undefined || amount === null) {
        throw new Error("Missing the required parameter 'amount' when calling postPayout");
      }
      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling postPayout");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'accessSignature': opts['accessSignature'],'accessTag': opts['accessTag'],'accessUserId': opts['accessUserId'],'accessUserIp': opts['accessUserIp'],'payoutTag': opts['payoutTag'],'walletId': walletId,'bankaccountId': opts['bankaccountId'],'beneficiaryId': opts['beneficiaryId'],'label': opts['label'],'amount': amount,'currency': currency,'supportingFileLink': opts['supportingFileLink']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20019;

      return this.apiClient.callApi(
        '/payouts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}