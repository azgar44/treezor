# Treezor.MandateApi

All URIs are relative to *https://sandbox.treezor.com/v1/index.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMandate**](MandateApi.md#deleteMandate) | **DELETE** /mandates/{id} | revoke a mandate
[**getMandate**](MandateApi.md#getMandate) | **GET** /mandates/{id} | get mandate
[**getMandates**](MandateApi.md#getMandates) | **GET** /mandates | search mandates
[**mandatesIdResendOtpPut**](MandateApi.md#mandatesIdResendOtpPut) | **PUT** /mandates/{id}/ResendOtp/ | send an OTP
[**mandatesIdSignPut**](MandateApi.md#mandatesIdSignPut) | **PUT** /mandates/{id}/Sign/ | sign a mandate
[**postMandates**](MandateApi.md#postMandates) | **POST** /mandates | create a mandate

<a name="deleteMandate"></a>
# **deleteMandate**
> InlineResponse20014 deleteMandate(id, origin)

revoke a mandate

Change mandate&#x27;s status to canceled.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.MandateApi();
let id = 56; // Number | Mandate's internal id.
let origin = "origin_example"; // String | The origin of the request for revocation

apiInstance.deleteMandate(id, origin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Mandate&#x27;s internal id. | 
 **origin** | **String**| The origin of the request for revocation | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMandate"></a>
# **getMandate**
> InlineResponse20014 getMandate(id)

get mandate

Get a mandate from the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.MandateApi();
let id = 789; // Number | Mandate's internal id.

apiInstance.getMandate(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Mandate&#x27;s internal id. | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMandates"></a>
# **getMandates**
> InlineResponse20014 getMandates(opts)

search mandates

Get mandates that match search criteria.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.MandateApi();
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'mandateId': 56, // Number | Mandate's Id
  'userId': 56, // Number | User's id who initiates the mandate request.
  'uniqueMandateReference': "uniqueMandateReference_example", // String | Unique Mandate Reference (UMR) of the searched mandate. It is a sequence of characters that ensures the mandate traceability. UMR coupled with SCI allows to uniquely identify a creditor and a contract for any mandate. It is provided at the mandate creation.
  'mandateStatus': "mandateStatus_example", // String | Mandate's status. Possible values: * CANCELED * PENDING * VALIDATED 
  'filter': "filter_example" // String | You can filter the API response by using filter(s). Filters should be separated by a \";\". Example for 3 filters : FILTER1;FILTER2;FILTER3. A single filter has the following syntax : \"fieldName criterion expression\". Where :  - fieldName : the name of a filterable field of this object.   - expression : the values to be included or excluded (see the table below for more information)   - criterion : a filter criterion.  Here are the possible values for criterion :   | Criteria |         Description    |                   Type                   | Expression Example |  |----------|------------------------|------------------------------------------|--------------------|  |     >    |      greater than      |            alphanumeric string           |         100        |  |    >=    | greater or equal than  |            alphanumeric string           |         100        |  |     <    |        less than       |            alphanumeric string           |         100        |  |    <=    |   less or equal than   |            alphanumeric string           |         100        |  |    !=    |      not equal to      |            alphanumeric string           |         100        |  |   like   |          like          |            alphanumeric string           |         100        |  |    in    |           in           | alphanumeric strings separated by commas |      100,30,25     |  |    ==    |         equals         |            alphanumeric string           |         100        | 
};
apiInstance.getMandates(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **mandateId** | **Number**| Mandate&#x27;s Id | [optional] 
 **userId** | **Number**| User&#x27;s id who initiates the mandate request. | [optional] 
 **uniqueMandateReference** | **String**| Unique Mandate Reference (UMR) of the searched mandate. It is a sequence of characters that ensures the mandate traceability. UMR coupled with SCI allows to uniquely identify a creditor and a contract for any mandate. It is provided at the mandate creation. | [optional] 
 **mandateStatus** | **String**| Mandate&#x27;s status. Possible values: * CANCELED * PENDING * VALIDATED  | [optional] 
 **filter** | **String**| You can filter the API response by using filter(s). Filters should be separated by a \&quot;;\&quot;. Example for 3 filters : FILTER1;FILTER2;FILTER3. A single filter has the following syntax : \&quot;fieldName criterion expression\&quot;. Where :  - fieldName : the name of a filterable field of this object.   - expression : the values to be included or excluded (see the table below for more information)   - criterion : a filter criterion.  Here are the possible values for criterion :   | Criteria |         Description    |                   Type                   | Expression Example |  |----------|------------------------|------------------------------------------|--------------------|  |     &gt;    |      greater than      |            alphanumeric string           |         100        |  |    &gt;&#x3D;    | greater or equal than  |            alphanumeric string           |         100        |  |     &lt;    |        less than       |            alphanumeric string           |         100        |  |    &lt;&#x3D;    |   less or equal than   |            alphanumeric string           |         100        |  |    !&#x3D;    |      not equal to      |            alphanumeric string           |         100        |  |   like   |          like          |            alphanumeric string           |         100        |  |    in    |           in           | alphanumeric strings separated by commas |      100,30,25     |  |    &#x3D;&#x3D;    |         equals         |            alphanumeric string           |         100        |  | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mandatesIdResendOtpPut"></a>
# **mandatesIdResendOtpPut**
> InlineResponse20014 mandatesIdResendOtpPut(id, accessToken, accessSignature, userId, opts)

send an OTP

Send an OTP to sign a specific mandate. The OTP will be sent to the user&#x27;s mobile phone OR to a specific mobile phone number in the request. 

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.MandateApi();
let id = 56; // Number | Mandate's id.
let accessToken = "accessToken_example"; // String | Access token must be defined here or in Authorization HTTP header. More info [here](https://agent.treezor.com/security-authentication). 
let accessSignature = "accessSignature_example"; // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
let userId = 56; // Number | User's id who initiates the mandate request.
let opts = { 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'debtorMobile': "debtorMobile_example" // String | Debtor's mobile phone number. Used to send the OTP for signature
};
apiInstance.mandatesIdResendOtpPut(id, accessToken, accessSignature, userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Mandate&#x27;s id. | 
 **accessToken** | **String**| Access token must be defined here or in Authorization HTTP header. More info [here](https://agent.treezor.com/security-authentication).  | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | 
 **userId** | **Number**| User&#x27;s id who initiates the mandate request. | 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **debtorMobile** | **String**| Debtor&#x27;s mobile phone number. Used to send the OTP for signature | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="mandatesIdSignPut"></a>
# **mandatesIdSignPut**
> InlineResponse20014 mandatesIdSignPut(id, accessToken, accessSignature, userId, otp, opts)

sign a mandate

Sign a mandate with the received OTP.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.MandateApi();
let id = 56; // Number | Mandate's id.
let accessToken = "accessToken_example"; // String | Access token must be defined here or in Authorization HTTP header. More info [here](https://agent.treezor.com/security-authentication). 
let accessSignature = "accessSignature_example"; // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
let userId = 56; // Number | User's is who initiates the mandate request.
let otp = "otp_example"; // String | The One-time password that the user got once mandate created.
let opts = { 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'debtorSignatureIp': "debtorSignatureIp_example" // String | IP address from which the mandate will be signed.
};
apiInstance.mandatesIdSignPut(id, accessToken, accessSignature, userId, otp, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Mandate&#x27;s id. | 
 **accessToken** | **String**| Access token must be defined here or in Authorization HTTP header. More info [here](https://agent.treezor.com/security-authentication).  | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | 
 **userId** | **Number**| User&#x27;s is who initiates the mandate request. | 
 **otp** | **String**| The One-time password that the user got once mandate created. | 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **debtorSignatureIp** | **String**| IP address from which the mandate will be signed. | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="postMandates"></a>
# **postMandates**
> InlineResponse20014 postMandates(sddType, isPaper, userId, debtorName, debtorAddress, debtorCity, debtorZipCode, debtorCountry, debtorIban, sequenceType, createdIp, opts)

create a mandate

Create a new mandate in the system. 

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.MandateApi();
let sddType = "sddType_example"; // String | Type of mandate.  | Type | Description | | ---- | ----------- | | core | Sepa Direct Debit Core | | b2b | Sepa Direct Debit Business 2 Business  | 
let isPaper = true; // Boolean | Indicate if it's a paper mandate or not
let userId = "userId_example"; // String | User's id who initiates the mandate request. The creditor.
let debtorName = "debtorName_example"; // String | Debtor's full name
let debtorAddress = "debtorAddress_example"; // String | Debtor's address.
let debtorCity = "debtorCity_example"; // String | Debtor's city.
let debtorZipCode = "debtorZipCode_example"; // String | Debtor's zip code
let debtorCountry = "debtorCountry_example"; // String | Debtor's country
let debtorIban = "debtorIban_example"; // String | Debtor's IBAN
let sequenceType = "sequenceType_example"; // String | Type of mandate.  | Type | Description | | ---- | ----------- | | one-off | One-off payment | | recurrent | Recurrent payment |  Default value: one-off. 
let createdIp = "createdIp_example"; // String | IP address of the system that created mandate.
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'debtorBic': "debtorBic_example", // String | Debtor's BIC (or SWIFT)
  'signatureDate': "signatureDate_example" // String | Signature date of the mandate. Required if is paper.
};
apiInstance.postMandates(sddType, isPaper, userId, debtorName, debtorAddress, debtorCity, debtorZipCode, debtorCountry, debtorIban, sequenceType, createdIp, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sddType** | **String**| Type of mandate.  | Type | Description | | ---- | ----------- | | core | Sepa Direct Debit Core | | b2b | Sepa Direct Debit Business 2 Business  |  | 
 **isPaper** | **Boolean**| Indicate if it&#x27;s a paper mandate or not | 
 **userId** | **String**| User&#x27;s id who initiates the mandate request. The creditor. | 
 **debtorName** | **String**| Debtor&#x27;s full name | 
 **debtorAddress** | **String**| Debtor&#x27;s address. | 
 **debtorCity** | **String**| Debtor&#x27;s city. | 
 **debtorZipCode** | **String**| Debtor&#x27;s zip code | 
 **debtorCountry** | **String**| Debtor&#x27;s country | 
 **debtorIban** | **String**| Debtor&#x27;s IBAN | 
 **sequenceType** | **String**| Type of mandate.  | Type | Description | | ---- | ----------- | | one-off | One-off payment | | recurrent | Recurrent payment |  Default value: one-off.  | 
 **createdIp** | **String**| IP address of the system that created mandate. | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **debtorBic** | **String**| Debtor&#x27;s BIC (or SWIFT) | [optional] 
 **signatureDate** | **String**| Signature date of the mandate. Required if is paper. | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

