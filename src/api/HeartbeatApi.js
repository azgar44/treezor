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
import {InlineResponseDefault} from '../model/InlineResponseDefault';

/**
* Heartbeat service.
* @module api/HeartbeatApi
* @version 0.1.1
*/
export class HeartbeatApi {

    /**
    * Constructs a new HeartbeatApi. 
    * @alias module:api/HeartbeatApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getHeartbeat operation.
     * @callback moduleapi/HeartbeatApi~getHeartbeatCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the status of the API
     * Get Heartbeat of Treezor API
     * @param {Object} opts Optional parameters
     * @param {String} opts.accessSignature Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
     * @param {String} opts.accessTag Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
     * @param {Number} opts.accessUserId Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {String} opts.accessUserIp Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics). 
     * @param {module:api/HeartbeatApi~getHeartbeatCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getHeartbeat(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'accessSignature': opts['accessSignature'],'accessTag': opts['accessTag'],'accessUserId': opts['accessUserId'],'accessUserIp': opts['accessUserIp']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/heartbeats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}