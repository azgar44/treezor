# Treezor.UserApi

All URIs are relative to *https://sandbox.treezor.com/v1/index.php*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /users/{id} | delete a user
[**getUser**](UserApi.md#getUser) | **GET** /users/{id} | get an user
[**getUsers**](UserApi.md#getUsers) | **GET** /users | search users
[**putUser**](UserApi.md#putUser) | **PUT** /users/{id} | update a user
[**putUsers**](UserApi.md#putUsers) | **POST** /users | create user
[**usersIdKyclivenessPost**](UserApi.md#usersIdKyclivenessPost) | **POST** /users/{id}/kycliveness | 
[**usersIdKyclivenessPut**](UserApi.md#usersIdKyclivenessPut) | **PUT** /users/{id}/kycliveness | 
[**usersIdKycreviewPut**](UserApi.md#usersIdKycreviewPut) | **PUT** /users/{id}/Kycreview/ | review user information

<a name="deleteUser"></a>
# **deleteUser**
> InlineResponse20027 deleteUser(id, origin, opts)

delete a user

Change user&#x27;s status to **CANCELED**.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.UserApi();
let id = 56; // Number | User's ID
let origin = "origin_example"; // String | Origin of the request.  Possible values: * OPERATOR * USER 
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.deleteUser(id, origin, opts, (error, data, response) => {
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
 **id** | **Number**| User&#x27;s ID | 
 **origin** | **String**| Origin of the request.  Possible values: * OPERATOR * USER  | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> InlineResponse20027 getUser(id, opts)

get an user

Get user&#x27;s information for given user&#x27;s id.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.UserApi();
let id = 56; // Number | User's ID
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.getUser(id, opts, (error, data, response) => {
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
 **id** | **Number**| User&#x27;s ID | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> InlineResponse20027 getUsers(opts)

search users

Get users from the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.UserApi();
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'userId': 56, // Number | User's unique ID
  'userTypeId': 56, // Number | User's type.
  'userStatus': "userStatus_example", // String | User's status.
  'userTag': "userTag_example", // String | Custom data that you can add to this item.
  'specifiedUSPerson': 56, // Number | Est consid??r?? comme ayant la nationalit?? ou la citoyennet?? am??ricaine : Tout citoyen des ??tats-Unis : une personne est pr??sum??e citoyen des Etats-Unis d??s lors qu???elle poss??de un passeport am??ricain ou qu???elle est n??e sur le territoire des Etats-Unis, m??me lorsqu???un tel lieu de naissance figure sur un passeport d???un autre pays, ou que la personne poss??de ??galement une autre nationalit?? ou a sa r??sidence dans un autre pays. Une condition n??anmoins : la personne ne doit pas avoir renonc?? ?? la citoyennet?? am??ricaine ; ??? Tout r??sident l??gal des ??tats-Unis, quelle que soit sa nationalit?? : (i) quiconque est consid??r?? comme r??sident fiscal aux Etats-Unis aux termes de la loi f??d??rale am??ricaine, (ii) quiconque demande ?? ??tre trait?? comme r??sident fiscal aux Etats-Unis, ou (iii) quiconque est consid??r?? comme r??sident fiscal aux termes de la loi de cet Etat am??ricain. ??? Toute personne titulaire d???une carte de s??jour permanent (green card) aux Etats-Unis ou r??sidant de fa??on permanente aux Etats-Unis ou y ayant pass?? une p??riode suffisamment longue au cours des trois derni??res ann??es. 
  'controllingPersonType': 56, // Number | Type of relationship
  'employeeType': 56, // Number | Type of user's role
  'email': "email_example", // String | User's email address (must be valid).
  'name': "name_example", // String | User's Name.
  'legalName': "legalName_example", // String | Business name
  'parentUserId': "parentUserId_example", // String | User id of user's parent
  'pageNumber': 56, // Number | Pagination page number. More info [here](https://agent.treezor.com/lists). 
  'pageCount': 56, // Number | The number of items per page. More info [here](https://agent.treezor.com/lists). 
  'sortBy': "sortBy_example", // String | The transaction element you want to sort the list with. Default value: createdDate. More info [here](https://agent.treezor.com/lists). 
  'sortOrder': "sortOrder_example", // String | The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists). 
  'createdDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'createdDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'updatedDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | The modification date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
  'updatedDateTo': new Date("2013-10-20T19:20:30+01:00") // Date | The modification date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists) 
};
apiInstance.getUsers(opts, (error, data, response) => {
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
 **userId** | **Number**| User&#x27;s unique ID | [optional] 
 **userTypeId** | **Number**| User&#x27;s type. | [optional] 
 **userStatus** | **String**| User&#x27;s status. | [optional] 
 **userTag** | **String**| Custom data that you can add to this item. | [optional] 
 **specifiedUSPerson** | **Number**| Est consid??r?? comme ayant la nationalit?? ou la citoyennet?? am??ricaine : Tout citoyen des ??tats-Unis : une personne est pr??sum??e citoyen des Etats-Unis d??s lors qu???elle poss??de un passeport am??ricain ou qu???elle est n??e sur le territoire des Etats-Unis, m??me lorsqu???un tel lieu de naissance figure sur un passeport d???un autre pays, ou que la personne poss??de ??galement une autre nationalit?? ou a sa r??sidence dans un autre pays. Une condition n??anmoins : la personne ne doit pas avoir renonc?? ?? la citoyennet?? am??ricaine ; ??? Tout r??sident l??gal des ??tats-Unis, quelle que soit sa nationalit?? : (i) quiconque est consid??r?? comme r??sident fiscal aux Etats-Unis aux termes de la loi f??d??rale am??ricaine, (ii) quiconque demande ?? ??tre trait?? comme r??sident fiscal aux Etats-Unis, ou (iii) quiconque est consid??r?? comme r??sident fiscal aux termes de la loi de cet Etat am??ricain. ??? Toute personne titulaire d???une carte de s??jour permanent (green card) aux Etats-Unis ou r??sidant de fa??on permanente aux Etats-Unis ou y ayant pass?? une p??riode suffisamment longue au cours des trois derni??res ann??es.  | [optional] 
 **controllingPersonType** | **Number**| Type of relationship | [optional] 
 **employeeType** | **Number**| Type of user&#x27;s role | [optional] 
 **email** | **String**| User&#x27;s email address (must be valid). | [optional] 
 **name** | **String**| User&#x27;s Name. | [optional] 
 **legalName** | **String**| Business name | [optional] 
 **parentUserId** | **String**| User id of user&#x27;s parent | [optional] 
 **pageNumber** | **Number**| Pagination page number. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **pageCount** | **Number**| The number of items per page. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortBy** | **String**| The transaction element you want to sort the list with. Default value: createdDate. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **sortOrder** | **String**| The order you want to sort the list. * **DESC** for a descending sort * **ASC** for a ascending sort.  Default value : DESC. More info [here](https://agent.treezor.com/lists).  | [optional] 
 **createdDateFrom** | **Date**| The creation date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **createdDateTo** | **Date**| The creation date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **updatedDateFrom** | **Date**| The modification date from which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 
 **updatedDateTo** | **Date**| The modification date up to which you want to filter the request result. Format YYYY-MM-DD HH:MM:SS. More info [here](https://agent.treezor.com/lists)  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putUser"></a>
# **putUser**
> InlineResponse20027 putUser(id, opts)

update a user

Update user&#x27;s information.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.UserApi();
let id = 56; // Number | User's ID
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'userTag': "userTag_example", // String | Custom data.
  'specifiedUSPerson': 56, // Number | Est consid??r?? comme ayant la nationalit?? ou la citoyennet?? am??ricaine : Tout citoyen des ??tats-Unis : une personne est pr??sum??e citoyen des Etats-Unis d??s lors qu???elle poss??de un passeport am??ricain ou qu???elle est n??e sur le territoire des Etats-Unis, m??me lorsqu???un tel lieu de naissance figure sur un passeport d???un autre pays, ou que la personne poss??de ??galement une autre nationalit?? ou a sa r??sidence dans un autre pays. Une condition n??anmoins : la personne ne doit pas avoir renonc?? ?? la citoyennet?? am??ricaine ; ??? Tout r??sident l??gal des ??tats-Unis, quelle que soit sa nationalit?? : (i) quiconque est consid??r?? comme r??sident fiscal aux Etats-Unis aux termes de la loi f??d??rale am??ricaine, (ii) quiconque demande ?? ??tre trait?? comme r??sident fiscal aux Etats-Unis, ou (iii) quiconque est consid??r?? comme r??sident fiscal aux termes de la loi de cet Etat am??ricain. ??? Toute personne titulaire d???une carte de s??jour permanent (green card) aux Etats-Unis ou r??sidant de fa??on permanente aux Etats-Unis ou y ayant pass?? une p??riode suffisamment longue au cours des trois derni??res ann??es.  | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'controllingPersonType': 56, // Number | Type of relationship  | Value | Type | | --- | --- | | 0 | None (default) | | 1 | Shareholder | | 2 | Other_relationship | | 3 | Director | 
  'employeeType': 56, // Number | Type of relationship. Possible values:  | Value | Type | | --- | --- | | 0 | None (default)| | 1 | Leader | | 2 | Employee | 
  'title': "title_example", // String | User's title. Possible values: * M * MME * MLLE 
  'firstname': "firstname_example", // String | User's first name
  'lastname': "lastname_example", // String | User's last name
  'middleNames': "middleNames_example", // String | User's middle names
  'birthday': "birthday_example", // String | User's birth date. Format YYYY-MM-DD
  'email': "email_example", // String | User's email address (must be valid).
  'address1': "address1_example", // String | User's postal address (main)
  'address2': "address2_example", // String | User's postal address (complement)
  'address3': "address3_example", // String | User's postal address (complement2)
  'postcode': "postcode_example", // String | User's postcode
  'city': "city_example", // String | User's city
  'state': "state_example", // String | User's state
  'country': "country_example", // String | User's country (Format ISO 3166-1 alpha-2)
  'phone': "phone_example", // String | User's phone number
  'mobile': "mobile_example", // String | User's mobile phone number
  'nationality': "nationality_example", // String | User's nationality
  'nationalityOther': "nationalityOther_example", // String | User's other nationality
  'placeOfBirth': "placeOfBirth_example", // String | User's place of birth
  'birthCountry': "birthCountry_example", // String | User's country of birth (Format ISO 3166-1 alpha-2)
  'occupation': "occupation_example", // String | User's occupation
  'incomeRange': "incomeRange_example", // String | Customer income range
  'legalName': "legalName_example", // String | Business name
  'legalRegistrationNumber': "legalRegistrationNumber_example", // String | Business registration number
  'legalTvaNumber': "legalTvaNumber_example", // String | Business VAT number
  'legalRegistrationDate': new Date("2013-10-20"), // Date | Business registration date
  'legalForm': "legalForm_example", // String | | Code | Category | Details (in french) | | ---- | ----- | ---- | | 1000 | Individual company | Entrepreneur Individuel a Responsabilit?? Limit??e (EIRL) | | 2110 | Indivision and others | Indivision entre personnes physiques | | 2120 | Indivision and others | Indivision avec personne morale | | 2210 | Indivision and others | Soci??t?? cr????e de fait entre personnes physiques | | 2220 | Indivision and others | Soci??t?? cr????e de fait avec personne morale | | 2310 | Indivision and others | Soci??t?? en participation entre personnes physiques | | 2320 | Indivision and others | Soci??t?? en participation avec personne morale | | 2385 | Indivision and others | Soci??t?? en participation de professions lib??rales | | 2400 | Indivision and others | Fiducie | | 2700 | Diverse | Paroisse hors zone concordataire | | 2900 | Economic Interest Grouping | Autre groupement de droit priv?? non dot?? de la personnalit?? morale | | 3110 | Foreign company | Repr??sentation ou agence commerciale d'??tat ou organisme public ??tranger  immatricul?? au RCS | | 3120 | Foreign company | Soci??t?? ??trang??re immatricul??e au RCS | | 3205 | Foreign company | Organisation internationale | | 3210 | Foreign company | Etat collectivit?? ou ??tablissement public ??tranger | | 3220 | Foreign company | Soci??t?? ??trang??re non immatricul??e au RCS | | 3290 | Foreign company | (Autre) personne morale de droit ??tranger | | 4110 | Administrations, Instituions | Etablissement public national ?? caract??re industriel ou commercial dot?? d'un comptable public | | 4120 | Administrations, Instituions | Etablissement public national ?? caract??re industriel ou commercial non dot?? d'un comptable public | | 4130 | Administrations, Instituions | Exploitant public | | 4140 | Administrations, Instituions | Etablissement public local ?? caract??re industriel ou commercial | | 4150 | Administrations, Instituions | R??gie d'une collectivit?? locale ?? caract??re industriel ou commercial | | 4160 | Administrations, Instituions | Institution Banque de France | | 5191 | De facto undivided ownership company | Soci??t?? de caution mutuelle | | 5192 | Diverse | Soci??t?? coop??rative de banque populaire | | 5193 | De facto undivided ownership company | Caisse de cr??dit maritime mutuel | | 5194 | De facto undivided ownership company | Caisse (f??d??rale) de cr??dit mutuel | | 5195 | Association fondation | Association coop??rative inscrite (droit local Alsace Moselle) | | 5196 | De facto undivided ownership company | Caisse d'??pargne et de pr??voyance ?? forme coop??rative | | 5202 | General partnership | Soci??t?? en nom collectif | | 5203 | General partnership | Soci??t?? en nom collectif coop??rative | | 5306 | Limited company | Soci??t?? en commandite simple | | 5307 | Limited company | Soci??t?? en commandite simple coop??rative | | 5308 | Limited company | Soci??t?? en commandite par actions | | 5309 | Limited company | Soci??t?? en commandite par actions coop??rative | | 5385 | Limited company | Soci??t?? d'exercice lib??ral en commandite par action | | 5410 | Limited Liability Company  | SARL nationale | | 5415 | Limited Liability Company  | SARL d'??conomie mixte | | 5422 | Limited Liability Company  | SARL immobili??re pour le commerce et l'industrie (SICOMI) | | 5426 | Limited Liability Company  | Soci??t?? immobili??re de gestion | | 5430 | Limited Liability Company  | Safer en SARL | | 5431 | Limited Liability Company  | SARL mixte d'int??r??t agricole (SIMA) | | 5432 | Limited Liability Company  | SARL d'int??r??t collectif agricole (SICA) | | 5442 | Limited Liability Company  | SARL d'attribution | | 5443 | Limited Liability Company  | SARL coop??rative de construction | | 5451 | Limited Liability Company  | SARL coop??rative de consommation | | 5453 | Limited Liability Company  | SARL coop??rative artisanale | | 5454 | Limited Liability Company  | SARL coop??rative d'int??r??t maritime | | 5455 | Limited Liability Company  | SARL coop??rative de transports | | 5458 | Limited Liability Company  | SARL coop??rative ouvri??re de production et de cr??dit (SCOP) | | 5459 | Limited Liability Company  | SARL union de soci??t??s coop??ratives | | 5460 | Limited Liability Company  | SARL coop??rative | | 5485 | Limited Liability Company  | Soci??t?? d'exercice lib??ral ?? responsabilit?? limit??e | | 5498 | Limited Liability Company  | SARL unipersonnelle | | 5499 | Limited Liability Company  | SARL | | 5505 | Limited company | SA ?? participation ouvri??re ?? conseil d'administration | | 5510 | Limited company | SA nationale ?? conseil d'administration | | 5515 | Limited company | SA d'??conomie mixte ?? conseil d'administration | | 5520 | Limited company | Soci??t?? d'investissement ?? capital variable (SICAV) ?? conseil d'administration | | 5522 | Limited company | Soci??t?? anonyme immobili??re pour le commerce et l'industrie (SICOMI)  ?? conseil d'administration | | 5525 | Limited company | Soci??t?? anonyme immobili??re d'investissement ?? conseil d'administration | | 5530 | Limited company | Safer anonyme ?? conseil d'administration | | 5531 | Limited company | Soci??t?? anonyme mixte d'int??r??t agricole (SMIA) ?? conseil d'administration | | 5532 | Limited company | Soci??t?? anonyme mixte d'int??r??t collectif agricole (SICA) ?? conseil d'administration | | 5542 | Limited company | Soci??t?? anonyme d'attribution ?? conseil d'administration | | 5543 | Limited company | Soci??t?? anonyme coop??rative de construction ?? conseil d'administration | | 5546 | Limited company | SA de HLM ?? conseil d'administration | | 5547 | Limited company | SA coop??rative de production de HLM ?? conseil d'administration | | 5548 | Limited company | SA de cr??dit immobilier ?? conseil d'administration | | 5551 | Limited company | SA coop??rative de consommation ?? conseil d'administration | | 5552 | Limited company | SA coop??rative de commer??ants d??taillants ?? conseil d'administration | | 5553 | Limited company | SA coop??rative artisanale ?? conseil d'administration | | 5554 | Limited company | SA coop??rative (d'int??r??t) maritime ?? conseil d'administration | | 5555 | Limited company | SA coop??rative de transports ?? conseil d'administration | | 5558 | Limited company | SCOP ?? conseil d'administration | | 5559 | Limited company | SA union de soci??t??s coop??ratives ?? conseil d'administration | | 5560 | Limited company | SA coop??rative ?? conseil d'administration | | 5585 | Limited company | Soci??t?? d'exercice lib??ral ?? forme anonyme ?? conseil d'administration | | 5599 | Limited company | SA ?? conseil d'administration | | 5605 | Limited company | SA ?? participation ouvri??re ?? directoire | | 5610 | Limited company | SA nationale ?? directoire | | 5615 | Limited company | SA d'??conomie mixte ?? directoire | | 5620 | Limited company | SICAV | | 5622 | Limited company | SICOMI | | 5625 | Limited company | Soci??t?? immobili??re d'investissement anonyme ?? directoire | | 5630 | Limited company | Safer anonyme ?? directoire | | 5631 | Limited company | Soci??t?? anonyme mixte d'int??r??t agricole (SMIA) | | 5632 | Limited company | SICA | | 5642 | Limited company | Soci??t?? anonyme d'attribution ?? directoire | | 5643 | Limited company | Soci??t?? anonyme coop??rative de construction ?? directoire | | 5646 | Limited company | S.A. HLM ?? directoire | | 5647 | Limited company | Soci??t?? coop??rative de production de HLM anonyme ?? directoire | | 5648 | Limited company | SA de cr??dit immobilier ?? directoire | | 5651 | Limited company | SA coop??rative de consommation ?? directoire | | 5652 | Limited company | SA coop??rative de commer??ants d??taillants ?? directoire | | 5653 | Limited company | SA coop??rative artisanale ?? directoire | | 5654 | Limited company | SA coop??rative (d'int??r??t) maritime ?? directoire | | 5655 | Limited company | SA coop??rative de transport ?? directoire | | 5658 | Limited company | SCOP | | 5659 | Limited company | SA union de soci??t??s coop??ratives ?? directoire | | 5660 | Limited company | SA coop??rative ?? directoire | | 5685 | Limited company | Soci??t?? d'exercice lib??ral ?? forme anonyme ?? directoire | | 5699 | Limited company | (Autre) SA ?? directoire | | 5710 | Limited company | SAS | | 5720 | Limited company | SASU | | 5785 | Limited company | Soci??t?? d'exercice lib??ral par action simplifi??e | | 5800 | Diverse | Soci??t?? europ??enne | | 6100 | De facto undivided ownership company | Caisse d'??pargne et de pr??voyance | | 6210 | Economic Interest Grouping | GEIE | | 6220 | Economic Interest Grouping | GIE | | 6316 | Diverse | CUMA | | 6317 | Diverse | Soci??t?? coop??rative agricole | | 6318 | Diverse | Union de soci??t??s coop??ratives agricoles | | 6411 | De facto undivided ownership company | Soci??t?? d'assurance mutuelle | | 6521 | Civils companies (without SCI) | SCPI | | 6532 | Civils companies (without SCI) | SICA | | 6533 | Civils companies (without SCI) | GAEC | | 6534 | Civils companies (without SCI) | Groupement foncier agricole | | 6535 | Civils companies (without SCI) | Groupement agricole foncier | | 6536 | Civils companies (without SCI) | Groupement forestier | | 6537 | Civils companies (without SCI) | Groupement pastoral | | 6538 | Civils companies (without SCI) | Groupement foncier rural | | 6539 | Civils companies (without SCI) | Soci??t?? civile fonci??re | | 6540 | Civils companies | SCI | | 6541 | Civils companies | SCI de construction vente | | 6542 | Civils companies (without SCI) | Soci??t?? civile d'attribution | | 6543 | Civils companies (without SCI) | Soci??t?? civile coop??rative de construction | | 6544 | Civils companies | Soci??t?? civile d'accession progressive ?? la propri??t?? | | 6551 | Civils companies (without SCI) | Soci??t?? civile coop??rative de consommation | | 6554 | Civils companies (without SCI) | Soci??t?? civile coop??rative (d'int??r??t) maritime | | 6558 | Civils companies (without SCI) | Soci??t?? civile coop??rative entre m??decins | | 6560 | Civils companies (without SCI) | SCP | | 6561 | Civils companies (without SCI) | SCP d'avocats | | 6562 | Civils companies (without SCI) | SCP d'avocats aux conseil | | 6563 | Civils companies (without SCI) | SCP d'avou??s d'appel | | 6564 | Civils companies (without SCI) | SCP d'huissiers | | 6565 | Civils companies (without SCI) | SCP de notaires | | 6566 | Civils companies (without SCI) | SCP de commissaires-priseurs | | 6567 | Civils companies (without SCI) | SCP de greffiers de tribunal de commerce | | 6568 | Civils companies (without SCI) | SCP de conseils juridiques | | 6569 | Civils companies (without SCI) | SCP de commissaires aux comptes | | 6571 | Civils companies (without SCI) | SCP de m??decins | | 6572 | Civils companies (without SCI) | SCP de dentistes | | 6573 | Civils companies (without SCI) | SCP d'infirmiers | | 6574 | Civils companies (without SCI) | SCP de masseurs kin??sith??rapeutes | | 6575 | Civils companies (without SCI) | SCP de directeurs de laboratoire d'analyse m??dicale | | 6576 | Civils companies (without SCI) | SCP de v??t??rinaires | | 6577 | Civils companies (without SCI) | SCP de g??om??tres-experts | | 6578 | Civils companies (without SCI) | SCP d'architectes | | 6585 | Civils companies (without SCI) | SCP | | 6588 | Civils companies (without SCI) | Soci??t?? civile laiti??re | | 6589 | Civils companies (without SCI) | Soci??t?? civile de moyens | | 6595 | Civils companies (without SCI) | Caisse (locale) de cr??dit mutuel | | 6596 | Civils companies (without SCI) | Caisse de cr??dit agricole mutuel | | 6597 | Civils companies (without SCI) | Soci??t?? civile d'exploitation agricole | | 6598 | Farm operator  | Exploitation agricole ?? responsabilit?? limit??e | | 6599 | Civils companies (without SCI) | Autre soci??t?? civile | | 6901 | Diverse | Autres personnes de droit priv?? inscrites au registre du commerce et des soci??t??s | | 7111 | Administrations, Instituions | Autorit?? constitutionnelle | | 7112 | Administrations, Instituions | Autorit?? administrative ind??pendante | | 7113 | Administrations, Instituions | Minist??re | | 7120 | Administrations, Instituions | Service central d'un minist??re | | 7150 | Administrations, Instituions | Service du minist??re de la D??fense | | 7160 | Administrations, Instituions | Service d??concentr?? ?? comp??tence nation . D'un minist??re (hors D??fense) | | 7171 | Administrations, Instituions | Service d??concentr?? de l'Etat ?? comp??tence (inter) r??gionale | | 7172 | Administrations, Instituions | Service d??concentr?? de l'Etat ?? comp??tence (inter) d??partementale | | 7179 | Administrations, Instituions | (Autre) Service d??concentr?? de l'Etat ?? comp??tence territoriale | | 7190 | Administrations, Instituions | Ecole nationale non dot??e de la personnalit?? morale | | 7210 | Administrations, Instituions | Commune | | 7220 | Administrations, Instituions | D??partement | | 7225 | Administrations, Instituions | Territoire d'Outre-Mer | | 7229 | Administrations, Instituions | (Autre) Collectivit?? territoriale | | 7230 | Administrations, Instituions | R??gion | | 7312 | Administrations, Instituions | Commune associ??e | | 7313 | Administrations, Instituions | Section de commune | | 7314 | Administrations, Instituions | Ensemble urbain | | 7321 | Administrations, Instituions | Association syndicale autoris??e | | 7322 | Administrations, Instituions | Association fonci??re urbaine | | 7323 | Administrations, Instituions | Association fonci??re de remembrement | | 7331 | Administrations, Instituions | Etablissement public local d'enseignement | | 7340 | Administrations, Instituions | P??le m??tropolitain | | 7341 | Administrations, Instituions | Secteur de commune | | 7342 | Administrations, Instituions | District urbain | | 7343 | Administrations, Instituions | Communaut?? urbaine | | 7344 | Administrations, Instituions | M??tropole | | 7345 | Administrations, Instituions | Syndicat intercommunal ?? vocation multiple (SIVOM) | | 7346 | Administrations, Instituions | Communaut?? de commune | | 7347 | Administrations, Instituions | Communaut?? de villes | | 7348 | Administrations, Instituions | Communaut?? d'agglom??ration | | 7349 | Administrations, Instituions | Autre ??tablissement public local de coop??ration non sp??cialis?? ou entente | | 7351 | Administrations, Instituions | Institution interd??partementale ou entente | | 7352 | Administrations, Instituions | Institution interr??gionale ou entente | | 7353 | Administrations, Instituions | Syndicat intercommunal ?? vocation unique (SIVU) | | 7354 | Administrations, Instituions | Syndicat mixte communal | | 7355 | Administrations, Instituions | Autre syndicat mixte | | 7356 | Administrations, Instituions | Commission syndicale pour la gestion des biens indivis des communes | | 7361 | Administrations, Instituions | Centre communal d'action sociale | | 7362 | Administrations, Instituions | Caisse des ??coles | | 7363 | Administrations, Instituions | Caisse de cr??dit municipal | | 7364 | Administrations, Instituions | Etablissement d'hospitalisation | | 7365 | Administrations, Instituions | Syndicat inter hospitalier | | 7366 | Administrations, Instituions | Etablissement public local social et m??dico-social | | 7371 | Administrations, Instituions | Office public d'habitation ?? loyer mod??r?? (OPHLM) | | 7372 | Administrations, Instituions | Service d??partemental d'incendie | | 7373 | Administrations, Instituions | Etablissement public local culturel | | 7378 | Administrations, Instituions | R??gie d'une collectivit?? locale ?? caract??re administratif | | 7379 | Administrations, Instituions | (Autre) Etablissement public administratif local | | 7381 | Administrations, Instituions | Organisme consulaire | | 7382 | Administrations, Instituions | Etablissement public national ayant fonction d'administration centrale | | 7383 | Administrations, Instituions | Etablissement public national ?? caract??re scientifique  culturel et professionnel | | 7384 | Administrations, Instituions | Autre ??tablissement public national d'enseignement | | 7385 | Administrations, Instituions | Autre ??tablissement public national administratif ?? comp??tence territoriale limit??e | | 7389 | Administrations, Instituions | Etablissement public national ?? caract??re administratif | | 7410 | Administrations, Instituions | Groupement d'int??r??t public (GIP) | | 7430 | Administrations, Instituions | Etablissement public des cultes d'Alsace-Lorraine | | 7450 | Administrations, Instituions | Etablissement public, cercle et foyer dans les arm??es | | 7470 | Administrations, Instituions | Groupement de coop??ration sanitaire ?? gestion publique | | 7490 | Administrations, Instituions | Autre personne morale de droit administratif | | 8110 | Administrations, Instituions | R??gime g??n??ral de la s??curit?? sociale | | 8120 | Administrations, Instituions | R??gime sp??cial de s??curit?? sociale | | 8130 | Administrations, Instituions | Institution de retraite compl??mentaire | | 8140 | Administrations, Instituions | Mutualit?? sociale agricole | | 8150 | Administrations, Instituions | R??gime maladie des non-salari??s non agricoles | | 8160 | Administrations, Instituions | R??gime vieillesse ne d??pendant pas du r??gime g??n??ral de la s??curit?? sociale | | 8170 | Administrations, Instituions | R??gime d'assurance ch??mage | | 8190 | Administrations, Instituions | Autre r??gime de pr??voyance sociale | | 8210 | De facto undivided ownership company | Mutuelle | | 8250 | De facto undivided ownership company | Assurance mutuelle agricole | | 8290 | De facto undivided ownership company | Autre organisme mutualiste | | 8310 | Association fondation | Comit?? central d'entreprise | | 8311 | Association fondation | Comit?? d'??tablissement | | 8410 | Association fondation | Syndicat de salari??s | | 8420 | Association fondation | Syndicat patronal | | 8450 | Association fondation | Ordre professionnel ou assimil?? | | 8470 | Association fondation | Centre technique industriel ou comit?? professionnel du d??veloppement ??conomique | | 8490 | Association fondation | Autre organisme professionnel | | 8510 | Administrations, Instituions | Institution de pr??voyance | | 8520 | Administrations, Instituions | Institution de retraite suppl??mentaire | | 9110 | Condominium syndicate | Syndicat de copropri??t?? | | 9150 | Association fondation | Association syndicale libre | | 9210 | Association fondation | Association non d??clar??e | | 9220 | Association fondation | Association d??clar??e | | 9221 | Association fondation | Association d??clar??e \"entreprises d'insertion par l'??conomique\" | | 9222 | Association fondation | Association interm??diaire | | 9223 | Association fondation | Groupement d'employeurs | | 9224 | Association fondation | Association d'avocats ?? responsabilit?? professionnelle individuelle | | 9230 | Association fondation | Association d??clar??e  reconnue d'utilit?? publique | | 9240 | Association fondation | Congr??gation | | 9260 | Association fondation | Association de droit local | | 9300 | Association fondation | Fondation | | 9900 | Diverse | Autre personne morale de droit priv?? | | 9970 | Diverse | Groupement de coop??ration sanitaire ?? gestion priv??e | 
  'legalShareCapital': 56, // Number | Business share capital
  'legalSector': "legalSector_example", // String | Business sector. NAF code in France
  'legalAnnualTurnOver': "legalAnnualTurnOver_example", // String | Business annual turnover (in k???)
  'legalNetIncomeRange': "legalNetIncomeRange_example", // String | Business net income range (in k???)
  'legalNumberOfEmployeeRange': "legalNumberOfEmployeeRange_example", // String | Business number of employees range
  'effectiveBeneficiary': 56, // Number | Business effective beneficiary
  'language': "language_example", // String | User's prefered language (ISO 639-1)
  'taxNumber': "taxNumber_example", // String | User's tax identification number. If the taxResidence is not set to FR, the field is mandatory.
  'taxResidence': "taxResidence_example", // String | User's tax residence country code (2 char code following ISO 3166 norm).
  'position': "position_example", // String | User's position.
  'personalAssets': "personalAssets_example", // String | User's personal assets range exprimed in K???.
  'activityOutsideEu': 56, // Number | Commercial activity outside of EU (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'economicSanctions': 56, // Number | Company, subsidiaries, entities, employees, directors, joint ventures are subject to Economic Sanctions (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'residentCountriesSanctions': 56, // Number | Company, subsidiaries, entities, employees, directors, joint ventures are subject to Economic Sanctions (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'involvedSanctions': 56, // Number | Company involved in countries or with people subject to Economic Sanctions after careful review (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'timezone': "timezone_example" // String | User's timezone (Format tz database) The time zones have unique names in the form \"Area/Location\", e.g. \"America/New_York\", \"Europe/Paris\" More info [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). 
};
apiInstance.putUser(id, opts, (error, data, response) => {
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
 **id** | **Number**| User&#x27;s ID | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **userTag** | **String**| Custom data. | [optional] 
 **specifiedUSPerson** | **Number**| Est consid??r?? comme ayant la nationalit?? ou la citoyennet?? am??ricaine : Tout citoyen des ??tats-Unis : une personne est pr??sum??e citoyen des Etats-Unis d??s lors qu???elle poss??de un passeport am??ricain ou qu???elle est n??e sur le territoire des Etats-Unis, m??me lorsqu???un tel lieu de naissance figure sur un passeport d???un autre pays, ou que la personne poss??de ??galement une autre nationalit?? ou a sa r??sidence dans un autre pays. Une condition n??anmoins : la personne ne doit pas avoir renonc?? ?? la citoyennet?? am??ricaine ; ??? Tout r??sident l??gal des ??tats-Unis, quelle que soit sa nationalit?? : (i) quiconque est consid??r?? comme r??sident fiscal aux Etats-Unis aux termes de la loi f??d??rale am??ricaine, (ii) quiconque demande ?? ??tre trait?? comme r??sident fiscal aux Etats-Unis, ou (iii) quiconque est consid??r?? comme r??sident fiscal aux termes de la loi de cet Etat am??ricain. ??? Toute personne titulaire d???une carte de s??jour permanent (green card) aux Etats-Unis ou r??sidant de fa??on permanente aux Etats-Unis ou y ayant pass?? une p??riode suffisamment longue au cours des trois derni??res ann??es.  | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **controllingPersonType** | **Number**| Type of relationship  | Value | Type | | --- | --- | | 0 | None (default) | | 1 | Shareholder | | 2 | Other_relationship | | 3 | Director |  | [optional] 
 **employeeType** | **Number**| Type of relationship. Possible values:  | Value | Type | | --- | --- | | 0 | None (default)| | 1 | Leader | | 2 | Employee |  | [optional] 
 **title** | **String**| User&#x27;s title. Possible values: * M * MME * MLLE  | [optional] 
 **firstname** | **String**| User&#x27;s first name | [optional] 
 **lastname** | **String**| User&#x27;s last name | [optional] 
 **middleNames** | **String**| User&#x27;s middle names | [optional] 
 **birthday** | **String**| User&#x27;s birth date. Format YYYY-MM-DD | [optional] 
 **email** | **String**| User&#x27;s email address (must be valid). | [optional] 
 **address1** | **String**| User&#x27;s postal address (main) | [optional] 
 **address2** | **String**| User&#x27;s postal address (complement) | [optional] 
 **address3** | **String**| User&#x27;s postal address (complement2) | [optional] 
 **postcode** | **String**| User&#x27;s postcode | [optional] 
 **city** | **String**| User&#x27;s city | [optional] 
 **state** | **String**| User&#x27;s state | [optional] 
 **country** | **String**| User&#x27;s country (Format ISO 3166-1 alpha-2) | [optional] 
 **phone** | **String**| User&#x27;s phone number | [optional] 
 **mobile** | **String**| User&#x27;s mobile phone number | [optional] 
 **nationality** | **String**| User&#x27;s nationality | [optional] 
 **nationalityOther** | **String**| User&#x27;s other nationality | [optional] 
 **placeOfBirth** | **String**| User&#x27;s place of birth | [optional] 
 **birthCountry** | **String**| User&#x27;s country of birth (Format ISO 3166-1 alpha-2) | [optional] 
 **occupation** | **String**| User&#x27;s occupation | [optional] 
 **incomeRange** | **String**| Customer income range | [optional] 
 **legalName** | **String**| Business name | [optional] 
 **legalRegistrationNumber** | **String**| Business registration number | [optional] 
 **legalTvaNumber** | **String**| Business VAT number | [optional] 
 **legalRegistrationDate** | **Date**| Business registration date | [optional] 
 **legalForm** | **String**| | Code | Category | Details (in french) | | ---- | ----- | ---- | | 1000 | Individual company | Entrepreneur Individuel a Responsabilit?? Limit??e (EIRL) | | 2110 | Indivision and others | Indivision entre personnes physiques | | 2120 | Indivision and others | Indivision avec personne morale | | 2210 | Indivision and others | Soci??t?? cr????e de fait entre personnes physiques | | 2220 | Indivision and others | Soci??t?? cr????e de fait avec personne morale | | 2310 | Indivision and others | Soci??t?? en participation entre personnes physiques | | 2320 | Indivision and others | Soci??t?? en participation avec personne morale | | 2385 | Indivision and others | Soci??t?? en participation de professions lib??rales | | 2400 | Indivision and others | Fiducie | | 2700 | Diverse | Paroisse hors zone concordataire | | 2900 | Economic Interest Grouping | Autre groupement de droit priv?? non dot?? de la personnalit?? morale | | 3110 | Foreign company | Repr??sentation ou agence commerciale d&#x27;??tat ou organisme public ??tranger  immatricul?? au RCS | | 3120 | Foreign company | Soci??t?? ??trang??re immatricul??e au RCS | | 3205 | Foreign company | Organisation internationale | | 3210 | Foreign company | Etat collectivit?? ou ??tablissement public ??tranger | | 3220 | Foreign company | Soci??t?? ??trang??re non immatricul??e au RCS | | 3290 | Foreign company | (Autre) personne morale de droit ??tranger | | 4110 | Administrations, Instituions | Etablissement public national ?? caract??re industriel ou commercial dot?? d&#x27;un comptable public | | 4120 | Administrations, Instituions | Etablissement public national ?? caract??re industriel ou commercial non dot?? d&#x27;un comptable public | | 4130 | Administrations, Instituions | Exploitant public | | 4140 | Administrations, Instituions | Etablissement public local ?? caract??re industriel ou commercial | | 4150 | Administrations, Instituions | R??gie d&#x27;une collectivit?? locale ?? caract??re industriel ou commercial | | 4160 | Administrations, Instituions | Institution Banque de France | | 5191 | De facto undivided ownership company | Soci??t?? de caution mutuelle | | 5192 | Diverse | Soci??t?? coop??rative de banque populaire | | 5193 | De facto undivided ownership company | Caisse de cr??dit maritime mutuel | | 5194 | De facto undivided ownership company | Caisse (f??d??rale) de cr??dit mutuel | | 5195 | Association fondation | Association coop??rative inscrite (droit local Alsace Moselle) | | 5196 | De facto undivided ownership company | Caisse d&#x27;??pargne et de pr??voyance ?? forme coop??rative | | 5202 | General partnership | Soci??t?? en nom collectif | | 5203 | General partnership | Soci??t?? en nom collectif coop??rative | | 5306 | Limited company | Soci??t?? en commandite simple | | 5307 | Limited company | Soci??t?? en commandite simple coop??rative | | 5308 | Limited company | Soci??t?? en commandite par actions | | 5309 | Limited company | Soci??t?? en commandite par actions coop??rative | | 5385 | Limited company | Soci??t?? d&#x27;exercice lib??ral en commandite par action | | 5410 | Limited Liability Company  | SARL nationale | | 5415 | Limited Liability Company  | SARL d&#x27;??conomie mixte | | 5422 | Limited Liability Company  | SARL immobili??re pour le commerce et l&#x27;industrie (SICOMI) | | 5426 | Limited Liability Company  | Soci??t?? immobili??re de gestion | | 5430 | Limited Liability Company  | Safer en SARL | | 5431 | Limited Liability Company  | SARL mixte d&#x27;int??r??t agricole (SIMA) | | 5432 | Limited Liability Company  | SARL d&#x27;int??r??t collectif agricole (SICA) | | 5442 | Limited Liability Company  | SARL d&#x27;attribution | | 5443 | Limited Liability Company  | SARL coop??rative de construction | | 5451 | Limited Liability Company  | SARL coop??rative de consommation | | 5453 | Limited Liability Company  | SARL coop??rative artisanale | | 5454 | Limited Liability Company  | SARL coop??rative d&#x27;int??r??t maritime | | 5455 | Limited Liability Company  | SARL coop??rative de transports | | 5458 | Limited Liability Company  | SARL coop??rative ouvri??re de production et de cr??dit (SCOP) | | 5459 | Limited Liability Company  | SARL union de soci??t??s coop??ratives | | 5460 | Limited Liability Company  | SARL coop??rative | | 5485 | Limited Liability Company  | Soci??t?? d&#x27;exercice lib??ral ?? responsabilit?? limit??e | | 5498 | Limited Liability Company  | SARL unipersonnelle | | 5499 | Limited Liability Company  | SARL | | 5505 | Limited company | SA ?? participation ouvri??re ?? conseil d&#x27;administration | | 5510 | Limited company | SA nationale ?? conseil d&#x27;administration | | 5515 | Limited company | SA d&#x27;??conomie mixte ?? conseil d&#x27;administration | | 5520 | Limited company | Soci??t?? d&#x27;investissement ?? capital variable (SICAV) ?? conseil d&#x27;administration | | 5522 | Limited company | Soci??t?? anonyme immobili??re pour le commerce et l&#x27;industrie (SICOMI)  ?? conseil d&#x27;administration | | 5525 | Limited company | Soci??t?? anonyme immobili??re d&#x27;investissement ?? conseil d&#x27;administration | | 5530 | Limited company | Safer anonyme ?? conseil d&#x27;administration | | 5531 | Limited company | Soci??t?? anonyme mixte d&#x27;int??r??t agricole (SMIA) ?? conseil d&#x27;administration | | 5532 | Limited company | Soci??t?? anonyme mixte d&#x27;int??r??t collectif agricole (SICA) ?? conseil d&#x27;administration | | 5542 | Limited company | Soci??t?? anonyme d&#x27;attribution ?? conseil d&#x27;administration | | 5543 | Limited company | Soci??t?? anonyme coop??rative de construction ?? conseil d&#x27;administration | | 5546 | Limited company | SA de HLM ?? conseil d&#x27;administration | | 5547 | Limited company | SA coop??rative de production de HLM ?? conseil d&#x27;administration | | 5548 | Limited company | SA de cr??dit immobilier ?? conseil d&#x27;administration | | 5551 | Limited company | SA coop??rative de consommation ?? conseil d&#x27;administration | | 5552 | Limited company | SA coop??rative de commer??ants d??taillants ?? conseil d&#x27;administration | | 5553 | Limited company | SA coop??rative artisanale ?? conseil d&#x27;administration | | 5554 | Limited company | SA coop??rative (d&#x27;int??r??t) maritime ?? conseil d&#x27;administration | | 5555 | Limited company | SA coop??rative de transports ?? conseil d&#x27;administration | | 5558 | Limited company | SCOP ?? conseil d&#x27;administration | | 5559 | Limited company | SA union de soci??t??s coop??ratives ?? conseil d&#x27;administration | | 5560 | Limited company | SA coop??rative ?? conseil d&#x27;administration | | 5585 | Limited company | Soci??t?? d&#x27;exercice lib??ral ?? forme anonyme ?? conseil d&#x27;administration | | 5599 | Limited company | SA ?? conseil d&#x27;administration | | 5605 | Limited company | SA ?? participation ouvri??re ?? directoire | | 5610 | Limited company | SA nationale ?? directoire | | 5615 | Limited company | SA d&#x27;??conomie mixte ?? directoire | | 5620 | Limited company | SICAV | | 5622 | Limited company | SICOMI | | 5625 | Limited company | Soci??t?? immobili??re d&#x27;investissement anonyme ?? directoire | | 5630 | Limited company | Safer anonyme ?? directoire | | 5631 | Limited company | Soci??t?? anonyme mixte d&#x27;int??r??t agricole (SMIA) | | 5632 | Limited company | SICA | | 5642 | Limited company | Soci??t?? anonyme d&#x27;attribution ?? directoire | | 5643 | Limited company | Soci??t?? anonyme coop??rative de construction ?? directoire | | 5646 | Limited company | S.A. HLM ?? directoire | | 5647 | Limited company | Soci??t?? coop??rative de production de HLM anonyme ?? directoire | | 5648 | Limited company | SA de cr??dit immobilier ?? directoire | | 5651 | Limited company | SA coop??rative de consommation ?? directoire | | 5652 | Limited company | SA coop??rative de commer??ants d??taillants ?? directoire | | 5653 | Limited company | SA coop??rative artisanale ?? directoire | | 5654 | Limited company | SA coop??rative (d&#x27;int??r??t) maritime ?? directoire | | 5655 | Limited company | SA coop??rative de transport ?? directoire | | 5658 | Limited company | SCOP | | 5659 | Limited company | SA union de soci??t??s coop??ratives ?? directoire | | 5660 | Limited company | SA coop??rative ?? directoire | | 5685 | Limited company | Soci??t?? d&#x27;exercice lib??ral ?? forme anonyme ?? directoire | | 5699 | Limited company | (Autre) SA ?? directoire | | 5710 | Limited company | SAS | | 5720 | Limited company | SASU | | 5785 | Limited company | Soci??t?? d&#x27;exercice lib??ral par action simplifi??e | | 5800 | Diverse | Soci??t?? europ??enne | | 6100 | De facto undivided ownership company | Caisse d&#x27;??pargne et de pr??voyance | | 6210 | Economic Interest Grouping | GEIE | | 6220 | Economic Interest Grouping | GIE | | 6316 | Diverse | CUMA | | 6317 | Diverse | Soci??t?? coop??rative agricole | | 6318 | Diverse | Union de soci??t??s coop??ratives agricoles | | 6411 | De facto undivided ownership company | Soci??t?? d&#x27;assurance mutuelle | | 6521 | Civils companies (without SCI) | SCPI | | 6532 | Civils companies (without SCI) | SICA | | 6533 | Civils companies (without SCI) | GAEC | | 6534 | Civils companies (without SCI) | Groupement foncier agricole | | 6535 | Civils companies (without SCI) | Groupement agricole foncier | | 6536 | Civils companies (without SCI) | Groupement forestier | | 6537 | Civils companies (without SCI) | Groupement pastoral | | 6538 | Civils companies (without SCI) | Groupement foncier rural | | 6539 | Civils companies (without SCI) | Soci??t?? civile fonci??re | | 6540 | Civils companies | SCI | | 6541 | Civils companies | SCI de construction vente | | 6542 | Civils companies (without SCI) | Soci??t?? civile d&#x27;attribution | | 6543 | Civils companies (without SCI) | Soci??t?? civile coop??rative de construction | | 6544 | Civils companies | Soci??t?? civile d&#x27;accession progressive ?? la propri??t?? | | 6551 | Civils companies (without SCI) | Soci??t?? civile coop??rative de consommation | | 6554 | Civils companies (without SCI) | Soci??t?? civile coop??rative (d&#x27;int??r??t) maritime | | 6558 | Civils companies (without SCI) | Soci??t?? civile coop??rative entre m??decins | | 6560 | Civils companies (without SCI) | SCP | | 6561 | Civils companies (without SCI) | SCP d&#x27;avocats | | 6562 | Civils companies (without SCI) | SCP d&#x27;avocats aux conseil | | 6563 | Civils companies (without SCI) | SCP d&#x27;avou??s d&#x27;appel | | 6564 | Civils companies (without SCI) | SCP d&#x27;huissiers | | 6565 | Civils companies (without SCI) | SCP de notaires | | 6566 | Civils companies (without SCI) | SCP de commissaires-priseurs | | 6567 | Civils companies (without SCI) | SCP de greffiers de tribunal de commerce | | 6568 | Civils companies (without SCI) | SCP de conseils juridiques | | 6569 | Civils companies (without SCI) | SCP de commissaires aux comptes | | 6571 | Civils companies (without SCI) | SCP de m??decins | | 6572 | Civils companies (without SCI) | SCP de dentistes | | 6573 | Civils companies (without SCI) | SCP d&#x27;infirmiers | | 6574 | Civils companies (without SCI) | SCP de masseurs kin??sith??rapeutes | | 6575 | Civils companies (without SCI) | SCP de directeurs de laboratoire d&#x27;analyse m??dicale | | 6576 | Civils companies (without SCI) | SCP de v??t??rinaires | | 6577 | Civils companies (without SCI) | SCP de g??om??tres-experts | | 6578 | Civils companies (without SCI) | SCP d&#x27;architectes | | 6585 | Civils companies (without SCI) | SCP | | 6588 | Civils companies (without SCI) | Soci??t?? civile laiti??re | | 6589 | Civils companies (without SCI) | Soci??t?? civile de moyens | | 6595 | Civils companies (without SCI) | Caisse (locale) de cr??dit mutuel | | 6596 | Civils companies (without SCI) | Caisse de cr??dit agricole mutuel | | 6597 | Civils companies (without SCI) | Soci??t?? civile d&#x27;exploitation agricole | | 6598 | Farm operator  | Exploitation agricole ?? responsabilit?? limit??e | | 6599 | Civils companies (without SCI) | Autre soci??t?? civile | | 6901 | Diverse | Autres personnes de droit priv?? inscrites au registre du commerce et des soci??t??s | | 7111 | Administrations, Instituions | Autorit?? constitutionnelle | | 7112 | Administrations, Instituions | Autorit?? administrative ind??pendante | | 7113 | Administrations, Instituions | Minist??re | | 7120 | Administrations, Instituions | Service central d&#x27;un minist??re | | 7150 | Administrations, Instituions | Service du minist??re de la D??fense | | 7160 | Administrations, Instituions | Service d??concentr?? ?? comp??tence nation . D&#x27;un minist??re (hors D??fense) | | 7171 | Administrations, Instituions | Service d??concentr?? de l&#x27;Etat ?? comp??tence (inter) r??gionale | | 7172 | Administrations, Instituions | Service d??concentr?? de l&#x27;Etat ?? comp??tence (inter) d??partementale | | 7179 | Administrations, Instituions | (Autre) Service d??concentr?? de l&#x27;Etat ?? comp??tence territoriale | | 7190 | Administrations, Instituions | Ecole nationale non dot??e de la personnalit?? morale | | 7210 | Administrations, Instituions | Commune | | 7220 | Administrations, Instituions | D??partement | | 7225 | Administrations, Instituions | Territoire d&#x27;Outre-Mer | | 7229 | Administrations, Instituions | (Autre) Collectivit?? territoriale | | 7230 | Administrations, Instituions | R??gion | | 7312 | Administrations, Instituions | Commune associ??e | | 7313 | Administrations, Instituions | Section de commune | | 7314 | Administrations, Instituions | Ensemble urbain | | 7321 | Administrations, Instituions | Association syndicale autoris??e | | 7322 | Administrations, Instituions | Association fonci??re urbaine | | 7323 | Administrations, Instituions | Association fonci??re de remembrement | | 7331 | Administrations, Instituions | Etablissement public local d&#x27;enseignement | | 7340 | Administrations, Instituions | P??le m??tropolitain | | 7341 | Administrations, Instituions | Secteur de commune | | 7342 | Administrations, Instituions | District urbain | | 7343 | Administrations, Instituions | Communaut?? urbaine | | 7344 | Administrations, Instituions | M??tropole | | 7345 | Administrations, Instituions | Syndicat intercommunal ?? vocation multiple (SIVOM) | | 7346 | Administrations, Instituions | Communaut?? de commune | | 7347 | Administrations, Instituions | Communaut?? de villes | | 7348 | Administrations, Instituions | Communaut?? d&#x27;agglom??ration | | 7349 | Administrations, Instituions | Autre ??tablissement public local de coop??ration non sp??cialis?? ou entente | | 7351 | Administrations, Instituions | Institution interd??partementale ou entente | | 7352 | Administrations, Instituions | Institution interr??gionale ou entente | | 7353 | Administrations, Instituions | Syndicat intercommunal ?? vocation unique (SIVU) | | 7354 | Administrations, Instituions | Syndicat mixte communal | | 7355 | Administrations, Instituions | Autre syndicat mixte | | 7356 | Administrations, Instituions | Commission syndicale pour la gestion des biens indivis des communes | | 7361 | Administrations, Instituions | Centre communal d&#x27;action sociale | | 7362 | Administrations, Instituions | Caisse des ??coles | | 7363 | Administrations, Instituions | Caisse de cr??dit municipal | | 7364 | Administrations, Instituions | Etablissement d&#x27;hospitalisation | | 7365 | Administrations, Instituions | Syndicat inter hospitalier | | 7366 | Administrations, Instituions | Etablissement public local social et m??dico-social | | 7371 | Administrations, Instituions | Office public d&#x27;habitation ?? loyer mod??r?? (OPHLM) | | 7372 | Administrations, Instituions | Service d??partemental d&#x27;incendie | | 7373 | Administrations, Instituions | Etablissement public local culturel | | 7378 | Administrations, Instituions | R??gie d&#x27;une collectivit?? locale ?? caract??re administratif | | 7379 | Administrations, Instituions | (Autre) Etablissement public administratif local | | 7381 | Administrations, Instituions | Organisme consulaire | | 7382 | Administrations, Instituions | Etablissement public national ayant fonction d&#x27;administration centrale | | 7383 | Administrations, Instituions | Etablissement public national ?? caract??re scientifique  culturel et professionnel | | 7384 | Administrations, Instituions | Autre ??tablissement public national d&#x27;enseignement | | 7385 | Administrations, Instituions | Autre ??tablissement public national administratif ?? comp??tence territoriale limit??e | | 7389 | Administrations, Instituions | Etablissement public national ?? caract??re administratif | | 7410 | Administrations, Instituions | Groupement d&#x27;int??r??t public (GIP) | | 7430 | Administrations, Instituions | Etablissement public des cultes d&#x27;Alsace-Lorraine | | 7450 | Administrations, Instituions | Etablissement public, cercle et foyer dans les arm??es | | 7470 | Administrations, Instituions | Groupement de coop??ration sanitaire ?? gestion publique | | 7490 | Administrations, Instituions | Autre personne morale de droit administratif | | 8110 | Administrations, Instituions | R??gime g??n??ral de la s??curit?? sociale | | 8120 | Administrations, Instituions | R??gime sp??cial de s??curit?? sociale | | 8130 | Administrations, Instituions | Institution de retraite compl??mentaire | | 8140 | Administrations, Instituions | Mutualit?? sociale agricole | | 8150 | Administrations, Instituions | R??gime maladie des non-salari??s non agricoles | | 8160 | Administrations, Instituions | R??gime vieillesse ne d??pendant pas du r??gime g??n??ral de la s??curit?? sociale | | 8170 | Administrations, Instituions | R??gime d&#x27;assurance ch??mage | | 8190 | Administrations, Instituions | Autre r??gime de pr??voyance sociale | | 8210 | De facto undivided ownership company | Mutuelle | | 8250 | De facto undivided ownership company | Assurance mutuelle agricole | | 8290 | De facto undivided ownership company | Autre organisme mutualiste | | 8310 | Association fondation | Comit?? central d&#x27;entreprise | | 8311 | Association fondation | Comit?? d&#x27;??tablissement | | 8410 | Association fondation | Syndicat de salari??s | | 8420 | Association fondation | Syndicat patronal | | 8450 | Association fondation | Ordre professionnel ou assimil?? | | 8470 | Association fondation | Centre technique industriel ou comit?? professionnel du d??veloppement ??conomique | | 8490 | Association fondation | Autre organisme professionnel | | 8510 | Administrations, Instituions | Institution de pr??voyance | | 8520 | Administrations, Instituions | Institution de retraite suppl??mentaire | | 9110 | Condominium syndicate | Syndicat de copropri??t?? | | 9150 | Association fondation | Association syndicale libre | | 9210 | Association fondation | Association non d??clar??e | | 9220 | Association fondation | Association d??clar??e | | 9221 | Association fondation | Association d??clar??e \&quot;entreprises d&#x27;insertion par l&#x27;??conomique\&quot; | | 9222 | Association fondation | Association interm??diaire | | 9223 | Association fondation | Groupement d&#x27;employeurs | | 9224 | Association fondation | Association d&#x27;avocats ?? responsabilit?? professionnelle individuelle | | 9230 | Association fondation | Association d??clar??e  reconnue d&#x27;utilit?? publique | | 9240 | Association fondation | Congr??gation | | 9260 | Association fondation | Association de droit local | | 9300 | Association fondation | Fondation | | 9900 | Diverse | Autre personne morale de droit priv?? | | 9970 | Diverse | Groupement de coop??ration sanitaire ?? gestion priv??e |  | [optional] 
 **legalShareCapital** | **Number**| Business share capital | [optional] 
 **legalSector** | **String**| Business sector. NAF code in France | [optional] 
 **legalAnnualTurnOver** | **String**| Business annual turnover (in k???) | [optional] 
 **legalNetIncomeRange** | **String**| Business net income range (in k???) | [optional] 
 **legalNumberOfEmployeeRange** | **String**| Business number of employees range | [optional] 
 **effectiveBeneficiary** | **Number**| Business effective beneficiary | [optional] 
 **language** | **String**| User&#x27;s prefered language (ISO 639-1) | [optional] 
 **taxNumber** | **String**| User&#x27;s tax identification number. If the taxResidence is not set to FR, the field is mandatory. | [optional] 
 **taxResidence** | **String**| User&#x27;s tax residence country code (2 char code following ISO 3166 norm). | [optional] 
 **position** | **String**| User&#x27;s position. | [optional] 
 **personalAssets** | **String**| User&#x27;s personal assets range exprimed in K???. | [optional] 
 **activityOutsideEu** | **Number**| Commercial activity outside of EU (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **economicSanctions** | **Number**| Company, subsidiaries, entities, employees, directors, joint ventures are subject to Economic Sanctions (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **residentCountriesSanctions** | **Number**| Company, subsidiaries, entities, employees, directors, joint ventures are subject to Economic Sanctions (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **involvedSanctions** | **Number**| Company involved in countries or with people subject to Economic Sanctions after careful review (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **timezone** | **String**| User&#x27;s timezone (Format tz database) The time zones have unique names in the form \&quot;Area/Location\&quot;, e.g. \&quot;America/New_York\&quot;, \&quot;Europe/Paris\&quot; More info [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putUsers"></a>
# **putUsers**
> InlineResponse20027 putUsers(specifiedUSPerson, email, opts)

create user

Create a new user in the system.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.UserApi();
let specifiedUSPerson = 56; // Number | Est consid??r?? comme ayant la nationalit?? ou la citoyennet?? am??ricaine : Tout citoyen des ??tats-Unis : une personne est pr??sum??e citoyen des Etats-Unis d??s lors qu???elle poss??de un passeport am??ricain ou qu???elle est n??e sur le territoire des Etats-Unis, m??me lorsqu???un tel lieu de naissance figure sur un passeport d???un autre pays, ou que la personne poss??de ??galement une autre nationalit?? ou a sa r??sidence dans un autre pays. Une condition n??anmoins : la personne ne doit pas avoir renonc?? ?? la citoyennet?? am??ricaine ; ??? Tout r??sident l??gal des ??tats-Unis, quelle que soit sa nationalit?? : (i) quiconque est consid??r?? comme r??sident fiscal aux Etats-Unis aux termes de la loi f??d??rale am??ricaine, (ii) quiconque demande ?? ??tre trait?? comme r??sident fiscal aux Etats-Unis, ou (iii) quiconque est consid??r?? comme r??sident fiscal aux termes de la loi de cet Etat am??ricain. ??? Toute personne titulaire d???une carte de s??jour permanent (green card) aux Etats-Unis ou r??sidant de fa??on permanente aux Etats-Unis ou y ayant pass?? une p??riode suffisamment longue au cours des trois derni??res ann??es :  | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
let email = "email_example"; // String | User's email address (must be valid).
let opts = { 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example", // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'userTypeId': 56, // Number | User's type. Possible values:  | Value | Type | | --- | --- | | 1 | Natural person (default)| | 2 | Business entity | | 3 | Non - governmental organization | | 4 | Governmental organization | 
  'userTag': "userTag_example", // String | Custom data.
  'parentUserId': 56, // Number | User id of user's parent if any.
  'parentType': "parentType_example", // String | Type of bound between parent and current user : * shareholder * employee * leader 
  'controllingPersonType': 56, // Number | Type of relationship :  | Value | Type | | --- | --- | | 0 | None (default) | | 1 | Shareholder | | 2 | Other_relationship | | 3 | Director | 
  'employeeType': 56, // Number | Type of user's role :  | Value | Type | | --- | --- | | 0 | None (default)| | 1 | Leader | | 2 | Employee | 
  'entityType': 56, // Number | Type of user's entity type :    | Value | Type |   | --- | --- |   | 1 | Reporting Financial Institution |   | 2 | Non-Reporting Financial Institution |   | 3 | Active Non-Financial Entity - Governmental entities, Int. organizations |   | 4 | Active Non-Financial Entity - Other |   | 5 | Passive Non-Financial Entity - Investment entity that is not Participating Jurisdiction FI | 
  'title': "title_example", // String | User's title. Possible values: * M * MME * MLLE 
  'firstname': "firstname_example", // String | User's first name
  'lastname': "lastname_example", // String | User's last name
  'middleNames': "middleNames_example", // String | User's middle names
  'birthday': "birthday_example", // String | User's birth date. Format YYYY-MM-DD
  'address1': "address1_example", // String | User's postal address (main). Can not contain carriage return.
  'address2': "address2_example", // String | User's postal address (complement). Can not contain carriage return.
  'address3': "address3_example", // String | User's postal address (complement2). Can not contain carriage return.
  'postcode': "postcode_example", // String | User's postcode
  'city': "city_example", // String | User's city
  'state': "state_example", // String | User's state
  'country': "country_example", // String | User's country (Format ISO 3166-1 alpha-2)
  'phone': "phone_example", // String | User's phone number (Format E.164). If you use Url please replace + with %2B.
  'mobile': "mobile_example", // String | User's mobile phone number (Format E.164). If you use Url please replace + with %2B.
  'nationality': "nationality_example", // String | User's nationality
  'nationalityOther': "nationalityOther_example", // String | User's other nationality
  'placeOfBirth': "placeOfBirth_example", // String | User's place of birth
  'birthCountry': "birthCountry_example", // String | User's country of birth (Format ISO 3166-1 alpha-2)
  'occupation': "occupation_example", // String | User's occupation
  'incomeRange': "incomeRange_example", // String | Customer income range
  'legalName': "legalName_example", // String | Business name
  'legalRegistrationNumber': "legalRegistrationNumber_example", // String | Business registration number
  'legalTvaNumber': "legalTvaNumber_example", // String | Business VAT number
  'legalRegistrationDate': new Date("2013-10-20"), // Date | Business registration date
  'legalForm': "legalForm_example", // String | | Code | Category | Details (in french) | | ---- | ----- | ---- | | 1000 | Individual company | Entrepreneur Individuel a Responsabilit?? Limit??e (EIRL) | | 2110 | Indivision and others | Indivision entre personnes physiques | | 2120 | Indivision and others | Indivision avec personne morale | | 2210 | Indivision and others | Soci??t?? cr????e de fait entre personnes physiques | | 2220 | Indivision and others | Soci??t?? cr????e de fait avec personne morale | | 2310 | Indivision and others | Soci??t?? en participation entre personnes physiques | | 2320 | Indivision and others | Soci??t?? en participation avec personne morale | | 2385 | Indivision and others | Soci??t?? en participation de professions lib??rales | | 2400 | Indivision and others | Fiducie | | 2700 | Diverse | Paroisse hors zone concordataire | | 2900 | Economic Interest Grouping | Autre groupement de droit priv?? non dot?? de la personnalit?? morale | | 3110 | Foreign company | Repr??sentation ou agence commerciale d'??tat ou organisme public ??tranger  immatricul?? au RCS | | 3120 | Foreign company | Soci??t?? ??trang??re immatricul??e au RCS | | 3205 | Foreign company | Organisation internationale | | 3210 | Foreign company | Etat collectivit?? ou ??tablissement public ??tranger | | 3220 | Foreign company | Soci??t?? ??trang??re non immatricul??e au RCS | | 3290 | Foreign company | (Autre) personne morale de droit ??tranger | | 4110 | Administrations, Instituions | Etablissement public national ?? caract??re industriel ou commercial dot?? d'un comptable public | | 4120 | Administrations, Instituions | Etablissement public national ?? caract??re industriel ou commercial non dot?? d'un comptable public | | 4130 | Administrations, Instituions | Exploitant public | | 4140 | Administrations, Instituions | Etablissement public local ?? caract??re industriel ou commercial | | 4150 | Administrations, Instituions | R??gie d'une collectivit?? locale ?? caract??re industriel ou commercial | | 4160 | Administrations, Instituions | Institution Banque de France | | 5191 | De facto undivided ownership company | Soci??t?? de caution mutuelle | | 5192 | Diverse | Soci??t?? coop??rative de banque populaire | | 5193 | De facto undivided ownership company | Caisse de cr??dit maritime mutuel | | 5194 | De facto undivided ownership company | Caisse (f??d??rale) de cr??dit mutuel | | 5195 | Association fondation | Association coop??rative inscrite (droit local Alsace Moselle) | | 5196 | De facto undivided ownership company | Caisse d'??pargne et de pr??voyance ?? forme coop??rative | | 5202 | General partnership | Soci??t?? en nom collectif | | 5203 | General partnership | Soci??t?? en nom collectif coop??rative | | 5306 | Limited company | Soci??t?? en commandite simple | | 5307 | Limited company | Soci??t?? en commandite simple coop??rative | | 5308 | Limited company | Soci??t?? en commandite par actions | | 5309 | Limited company | Soci??t?? en commandite par actions coop??rative | | 5385 | Limited company | Soci??t?? d'exercice lib??ral en commandite par action | | 5410 | Limited Liability Company  | SARL nationale | | 5415 | Limited Liability Company  | SARL d'??conomie mixte | | 5422 | Limited Liability Company  | SARL immobili??re pour le commerce et l'industrie (SICOMI) | | 5426 | Limited Liability Company  | Soci??t?? immobili??re de gestion | | 5430 | Limited Liability Company  | Safer en SARL | | 5431 | Limited Liability Company  | SARL mixte d'int??r??t agricole (SIMA) | | 5432 | Limited Liability Company  | SARL d'int??r??t collectif agricole (SICA) | | 5442 | Limited Liability Company  | SARL d'attribution | | 5443 | Limited Liability Company  | SARL coop??rative de construction | | 5451 | Limited Liability Company  | SARL coop??rative de consommation | | 5453 | Limited Liability Company  | SARL coop??rative artisanale | | 5454 | Limited Liability Company  | SARL coop??rative d'int??r??t maritime | | 5455 | Limited Liability Company  | SARL coop??rative de transports | | 5458 | Limited Liability Company  | SARL coop??rative ouvri??re de production et de cr??dit (SCOP) | | 5459 | Limited Liability Company  | SARL union de soci??t??s coop??ratives | | 5460 | Limited Liability Company  | SARL coop??rative | | 5485 | Limited Liability Company  | Soci??t?? d'exercice lib??ral ?? responsabilit?? limit??e | | 5498 | Limited Liability Company  | SARL unipersonnelle | | 5499 | Limited Liability Company  | SARL | | 5505 | Limited company | SA ?? participation ouvri??re ?? conseil d'administration | | 5510 | Limited company | SA nationale ?? conseil d'administration | | 5515 | Limited company | SA d'??conomie mixte ?? conseil d'administration | | 5520 | Limited company | Soci??t?? d'investissement ?? capital variable (SICAV) ?? conseil d'administration | | 5522 | Limited company | Soci??t?? anonyme immobili??re pour le commerce et l'industrie (SICOMI)  ?? conseil d'administration | | 5525 | Limited company | Soci??t?? anonyme immobili??re d'investissement ?? conseil d'administration | | 5530 | Limited company | Safer anonyme ?? conseil d'administration | | 5531 | Limited company | Soci??t?? anonyme mixte d'int??r??t agricole (SMIA) ?? conseil d'administration | | 5532 | Limited company | Soci??t?? anonyme mixte d'int??r??t collectif agricole (SICA) ?? conseil d'administration | | 5542 | Limited company | Soci??t?? anonyme d'attribution ?? conseil d'administration | | 5543 | Limited company | Soci??t?? anonyme coop??rative de construction ?? conseil d'administration | | 5546 | Limited company | SA de HLM ?? conseil d'administration | | 5547 | Limited company | SA coop??rative de production de HLM ?? conseil d'administration | | 5548 | Limited company | SA de cr??dit immobilier ?? conseil d'administration | | 5551 | Limited company | SA coop??rative de consommation ?? conseil d'administration | | 5552 | Limited company | SA coop??rative de commer??ants d??taillants ?? conseil d'administration | | 5553 | Limited company | SA coop??rative artisanale ?? conseil d'administration | | 5554 | Limited company | SA coop??rative (d'int??r??t) maritime ?? conseil d'administration | | 5555 | Limited company | SA coop??rative de transports ?? conseil d'administration | | 5558 | Limited company | SCOP ?? conseil d'administration | | 5559 | Limited company | SA union de soci??t??s coop??ratives ?? conseil d'administration | | 5560 | Limited company | SA coop??rative ?? conseil d'administration | | 5585 | Limited company | Soci??t?? d'exercice lib??ral ?? forme anonyme ?? conseil d'administration | | 5599 | Limited company | SA ?? conseil d'administration | | 5605 | Limited company | SA ?? participation ouvri??re ?? directoire | | 5610 | Limited company | SA nationale ?? directoire | | 5615 | Limited company | SA d'??conomie mixte ?? directoire | | 5620 | Limited company | SICAV | | 5622 | Limited company | SICOMI | | 5625 | Limited company | Soci??t?? immobili??re d'investissement anonyme ?? directoire | | 5630 | Limited company | Safer anonyme ?? directoire | | 5631 | Limited company | Soci??t?? anonyme mixte d'int??r??t agricole (SMIA) | | 5632 | Limited company | SICA | | 5642 | Limited company | Soci??t?? anonyme d'attribution ?? directoire | | 5643 | Limited company | Soci??t?? anonyme coop??rative de construction ?? directoire | | 5646 | Limited company | S.A. HLM ?? directoire | | 5647 | Limited company | Soci??t?? coop??rative de production de HLM anonyme ?? directoire | | 5648 | Limited company | SA de cr??dit immobilier ?? directoire | | 5651 | Limited company | SA coop??rative de consommation ?? directoire | | 5652 | Limited company | SA coop??rative de commer??ants d??taillants ?? directoire | | 5653 | Limited company | SA coop??rative artisanale ?? directoire | | 5654 | Limited company | SA coop??rative (d'int??r??t) maritime ?? directoire | | 5655 | Limited company | SA coop??rative de transport ?? directoire | | 5658 | Limited company | SCOP | | 5659 | Limited company | SA union de soci??t??s coop??ratives ?? directoire | | 5660 | Limited company | SA coop??rative ?? directoire | | 5685 | Limited company | Soci??t?? d'exercice lib??ral ?? forme anonyme ?? directoire | | 5699 | Limited company | (Autre) SA ?? directoire | | 5710 | Limited company | SAS | | 5720 | Limited company | SASU | | 5785 | Limited company | Soci??t?? d'exercice lib??ral par action simplifi??e | | 5800 | Diverse | Soci??t?? europ??enne | | 6100 | De facto undivided ownership company | Caisse d'??pargne et de pr??voyance | | 6210 | Economic Interest Grouping | GEIE | | 6220 | Economic Interest Grouping | GIE | | 6316 | Diverse | CUMA | | 6317 | Diverse | Soci??t?? coop??rative agricole | | 6318 | Diverse | Union de soci??t??s coop??ratives agricoles | | 6411 | De facto undivided ownership company | Soci??t?? d'assurance mutuelle | | 6521 | Civils companies (without SCI) | SCPI | | 6532 | Civils companies (without SCI) | SICA | | 6533 | Civils companies (without SCI) | GAEC | | 6534 | Civils companies (without SCI) | Groupement foncier agricole | | 6535 | Civils companies (without SCI) | Groupement agricole foncier | | 6536 | Civils companies (without SCI) | Groupement forestier | | 6537 | Civils companies (without SCI) | Groupement pastoral | | 6538 | Civils companies (without SCI) | Groupement foncier rural | | 6539 | Civils companies (without SCI) | Soci??t?? civile fonci??re | | 6540 | Civils companies | SCI | | 6541 | Civils companies | SCI de construction vente | | 6542 | Civils companies (without SCI) | Soci??t?? civile d'attribution | | 6543 | Civils companies (without SCI) | Soci??t?? civile coop??rative de construction | | 6544 | Civils companies | Soci??t?? civile d'accession progressive ?? la propri??t?? | | 6551 | Civils companies (without SCI) | Soci??t?? civile coop??rative de consommation | | 6554 | Civils companies (without SCI) | Soci??t?? civile coop??rative (d'int??r??t) maritime | | 6558 | Civils companies (without SCI) | Soci??t?? civile coop??rative entre m??decins | | 6560 | Civils companies (without SCI) | SCP | | 6561 | Civils companies (without SCI) | SCP d'avocats | | 6562 | Civils companies (without SCI) | SCP d'avocats aux conseil | | 6563 | Civils companies (without SCI) | SCP d'avou??s d'appel | | 6564 | Civils companies (without SCI) | SCP d'huissiers | | 6565 | Civils companies (without SCI) | SCP de notaires | | 6566 | Civils companies (without SCI) | SCP de commissaires-priseurs | | 6567 | Civils companies (without SCI) | SCP de greffiers de tribunal de commerce | | 6568 | Civils companies (without SCI) | SCP de conseils juridiques | | 6569 | Civils companies (without SCI) | SCP de commissaires aux comptes | | 6571 | Civils companies (without SCI) | SCP de m??decins | | 6572 | Civils companies (without SCI) | SCP de dentistes | | 6573 | Civils companies (without SCI) | SCP d'infirmiers | | 6574 | Civils companies (without SCI) | SCP de masseurs kin??sith??rapeutes | | 6575 | Civils companies (without SCI) | SCP de directeurs de laboratoire d'analyse m??dicale | | 6576 | Civils companies (without SCI) | SCP de v??t??rinaires | | 6577 | Civils companies (without SCI) | SCP de g??om??tres-experts | | 6578 | Civils companies (without SCI) | SCP d'architectes | | 6585 | Civils companies (without SCI) | SCP | | 6588 | Civils companies (without SCI) | Soci??t?? civile laiti??re | | 6589 | Civils companies (without SCI) | Soci??t?? civile de moyens | | 6595 | Civils companies (without SCI) | Caisse (locale) de cr??dit mutuel | | 6596 | Civils companies (without SCI) | Caisse de cr??dit agricole mutuel | | 6597 | Civils companies (without SCI) | Soci??t?? civile d'exploitation agricole | | 6598 | Farm operator  | Exploitation agricole ?? responsabilit?? limit??e | | 6599 | Civils companies (without SCI) | Autre soci??t?? civile | | 6901 | Diverse | Autres personnes de droit priv?? inscrites au registre du commerce et des soci??t??s | | 7111 | Administrations, Instituions | Autorit?? constitutionnelle | | 7112 | Administrations, Instituions | Autorit?? administrative ind??pendante | | 7113 | Administrations, Instituions | Minist??re | | 7120 | Administrations, Instituions | Service central d'un minist??re | | 7150 | Administrations, Instituions | Service du minist??re de la D??fense | | 7160 | Administrations, Instituions | Service d??concentr?? ?? comp??tence nation . D'un minist??re (hors D??fense) | | 7171 | Administrations, Instituions | Service d??concentr?? de l'Etat ?? comp??tence (inter) r??gionale | | 7172 | Administrations, Instituions | Service d??concentr?? de l'Etat ?? comp??tence (inter) d??partementale | | 7179 | Administrations, Instituions | (Autre) Service d??concentr?? de l'Etat ?? comp??tence territoriale | | 7190 | Administrations, Instituions | Ecole nationale non dot??e de la personnalit?? morale | | 7210 | Administrations, Instituions | Commune | | 7220 | Administrations, Instituions | D??partement | | 7225 | Administrations, Instituions | Territoire d'Outre-Mer | | 7229 | Administrations, Instituions | (Autre) Collectivit?? territoriale | | 7230 | Administrations, Instituions | R??gion | | 7312 | Administrations, Instituions | Commune associ??e | | 7313 | Administrations, Instituions | Section de commune | | 7314 | Administrations, Instituions | Ensemble urbain | | 7321 | Administrations, Instituions | Association syndicale autoris??e | | 7322 | Administrations, Instituions | Association fonci??re urbaine | | 7323 | Administrations, Instituions | Association fonci??re de remembrement | | 7331 | Administrations, Instituions | Etablissement public local d'enseignement | | 7340 | Administrations, Instituions | P??le m??tropolitain | | 7341 | Administrations, Instituions | Secteur de commune | | 7342 | Administrations, Instituions | District urbain | | 7343 | Administrations, Instituions | Communaut?? urbaine | | 7344 | Administrations, Instituions | M??tropole | | 7345 | Administrations, Instituions | Syndicat intercommunal ?? vocation multiple (SIVOM) | | 7346 | Administrations, Instituions | Communaut?? de commune | | 7347 | Administrations, Instituions | Communaut?? de villes | | 7348 | Administrations, Instituions | Communaut?? d'agglom??ration | | 7349 | Administrations, Instituions | Autre ??tablissement public local de coop??ration non sp??cialis?? ou entente | | 7351 | Administrations, Instituions | Institution interd??partementale ou entente | | 7352 | Administrations, Instituions | Institution interr??gionale ou entente | | 7353 | Administrations, Instituions | Syndicat intercommunal ?? vocation unique (SIVU) | | 7354 | Administrations, Instituions | Syndicat mixte communal | | 7355 | Administrations, Instituions | Autre syndicat mixte | | 7356 | Administrations, Instituions | Commission syndicale pour la gestion des biens indivis des communes | | 7361 | Administrations, Instituions | Centre communal d'action sociale | | 7362 | Administrations, Instituions | Caisse des ??coles | | 7363 | Administrations, Instituions | Caisse de cr??dit municipal | | 7364 | Administrations, Instituions | Etablissement d'hospitalisation | | 7365 | Administrations, Instituions | Syndicat inter hospitalier | | 7366 | Administrations, Instituions | Etablissement public local social et m??dico-social | | 7371 | Administrations, Instituions | Office public d'habitation ?? loyer mod??r?? (OPHLM) | | 7372 | Administrations, Instituions | Service d??partemental d'incendie | | 7373 | Administrations, Instituions | Etablissement public local culturel | | 7378 | Administrations, Instituions | R??gie d'une collectivit?? locale ?? caract??re administratif | | 7379 | Administrations, Instituions | (Autre) Etablissement public administratif local | | 7381 | Administrations, Instituions | Organisme consulaire | | 7382 | Administrations, Instituions | Etablissement public national ayant fonction d'administration centrale | | 7383 | Administrations, Instituions | Etablissement public national ?? caract??re scientifique  culturel et professionnel | | 7384 | Administrations, Instituions | Autre ??tablissement public national d'enseignement | | 7385 | Administrations, Instituions | Autre ??tablissement public national administratif ?? comp??tence territoriale limit??e | | 7389 | Administrations, Instituions | Etablissement public national ?? caract??re administratif | | 7410 | Administrations, Instituions | Groupement d'int??r??t public (GIP) | | 7430 | Administrations, Instituions | Etablissement public des cultes d'Alsace-Lorraine | | 7450 | Administrations, Instituions | Etablissement public, cercle et foyer dans les arm??es | | 7470 | Administrations, Instituions | Groupement de coop??ration sanitaire ?? gestion publique | | 7490 | Administrations, Instituions | Autre personne morale de droit administratif | | 8110 | Administrations, Instituions | R??gime g??n??ral de la s??curit?? sociale | | 8120 | Administrations, Instituions | R??gime sp??cial de s??curit?? sociale | | 8130 | Administrations, Instituions | Institution de retraite compl??mentaire | | 8140 | Administrations, Instituions | Mutualit?? sociale agricole | | 8150 | Administrations, Instituions | R??gime maladie des non-salari??s non agricoles | | 8160 | Administrations, Instituions | R??gime vieillesse ne d??pendant pas du r??gime g??n??ral de la s??curit?? sociale | | 8170 | Administrations, Instituions | R??gime d'assurance ch??mage | | 8190 | Administrations, Instituions | Autre r??gime de pr??voyance sociale | | 8210 | De facto undivided ownership company | Mutuelle | | 8250 | De facto undivided ownership company | Assurance mutuelle agricole | | 8290 | De facto undivided ownership company | Autre organisme mutualiste | | 8310 | Association fondation | Comit?? central d'entreprise | | 8311 | Association fondation | Comit?? d'??tablissement | | 8410 | Association fondation | Syndicat de salari??s | | 8420 | Association fondation | Syndicat patronal | | 8450 | Association fondation | Ordre professionnel ou assimil?? | | 8470 | Association fondation | Centre technique industriel ou comit?? professionnel du d??veloppement ??conomique | | 8490 | Association fondation | Autre organisme professionnel | | 8510 | Administrations, Instituions | Institution de pr??voyance | | 8520 | Administrations, Instituions | Institution de retraite suppl??mentaire | | 9110 | Condominium syndicate | Syndicat de copropri??t?? | | 9150 | Association fondation | Association syndicale libre | | 9210 | Association fondation | Association non d??clar??e | | 9220 | Association fondation | Association d??clar??e | | 9221 | Association fondation | Association d??clar??e \"entreprises d'insertion par l'??conomique\" | | 9222 | Association fondation | Association interm??diaire | | 9223 | Association fondation | Groupement d'employeurs | | 9224 | Association fondation | Association d'avocats ?? responsabilit?? professionnelle individuelle | | 9230 | Association fondation | Association d??clar??e  reconnue d'utilit?? publique | | 9240 | Association fondation | Congr??gation | | 9260 | Association fondation | Association de droit local | | 9300 | Association fondation | Fondation | | 9900 | Diverse | Autre personne morale de droit priv?? | | 9970 | Diverse | Groupement de coop??ration sanitaire ?? gestion priv??e | 
  'legalShareCapital': 56, // Number | Business share capital
  'legalSector': "legalSector_example", // String | Business sector. NAF code in France
  'legalAnnualTurnOver': "legalAnnualTurnOver_example", // String | Business annual turnover (in k???)
  'legalNetIncomeRange': "legalNetIncomeRange_example", // String | Business net income range (in k???)
  'legalNumberOfEmployeeRange': "legalNumberOfEmployeeRange_example", // String | Business number of employees range
  'effectiveBeneficiary': 56, // Number | Business effective beneficiary
  'language': "language_example", // String | User's prefered language (ISO 639-1)
  'taxNumber': "taxNumber_example", // String | User's tax identification number. If the taxResidence is set to another country than France, the field is mandatory. (deprecated, you must use the TaxResidence endpoint) 
  'taxResidence': "taxResidence_example", // String | User's tax residence country code (2 char code following ISO 3166 norm). (deprecated, you must use the TaxResidence endpoint) 
  'position': "position_example", // String | User's position.
  'personalAssets': "personalAssets_example", // String | User's personal assets range exprimed in K???.
  'activityOutsideEu': 56, // Number | Commercial activity outside of EU (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'economicSanctions': 56, // Number | Company, subsidiaries, entities, employees, directors, joint ventures are subject to Economic Sanctions (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'residentCountriesSanctions': 56, // Number | Company, subsidiaries, entities, employees, directors, joint ventures are subject to Economic Sanctions (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'involvedSanctions': 56, // Number | Company involved in countries or with people subject to Economic Sanctions after careful review (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes | 
  'timezone': "timezone_example" // String | User's timezone (Format tz database) The time zones have unique names in the form \"Area/Location\", e.g. \"America/New_York\", \"Europe/Paris\" More info [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). 
};
apiInstance.putUsers(specifiedUSPerson, email, opts, (error, data, response) => {
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
 **specifiedUSPerson** | **Number**| Est consid??r?? comme ayant la nationalit?? ou la citoyennet?? am??ricaine : Tout citoyen des ??tats-Unis : une personne est pr??sum??e citoyen des Etats-Unis d??s lors qu???elle poss??de un passeport am??ricain ou qu???elle est n??e sur le territoire des Etats-Unis, m??me lorsqu???un tel lieu de naissance figure sur un passeport d???un autre pays, ou que la personne poss??de ??galement une autre nationalit?? ou a sa r??sidence dans un autre pays. Une condition n??anmoins : la personne ne doit pas avoir renonc?? ?? la citoyennet?? am??ricaine ; ??? Tout r??sident l??gal des ??tats-Unis, quelle que soit sa nationalit?? : (i) quiconque est consid??r?? comme r??sident fiscal aux Etats-Unis aux termes de la loi f??d??rale am??ricaine, (ii) quiconque demande ?? ??tre trait?? comme r??sident fiscal aux Etats-Unis, ou (iii) quiconque est consid??r?? comme r??sident fiscal aux termes de la loi de cet Etat am??ricain. ??? Toute personne titulaire d???une carte de s??jour permanent (green card) aux Etats-Unis ou r??sidant de fa??on permanente aux Etats-Unis ou y ayant pass?? une p??riode suffisamment longue au cours des trois derni??res ann??es :  | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | 
 **email** | **String**| User&#x27;s email address (must be valid). | 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **userTypeId** | **Number**| User&#x27;s type. Possible values:  | Value | Type | | --- | --- | | 1 | Natural person (default)| | 2 | Business entity | | 3 | Non - governmental organization | | 4 | Governmental organization |  | [optional] 
 **userTag** | **String**| Custom data. | [optional] 
 **parentUserId** | **Number**| User id of user&#x27;s parent if any. | [optional] 
 **parentType** | **String**| Type of bound between parent and current user : * shareholder * employee * leader  | [optional] 
 **controllingPersonType** | **Number**| Type of relationship :  | Value | Type | | --- | --- | | 0 | None (default) | | 1 | Shareholder | | 2 | Other_relationship | | 3 | Director |  | [optional] 
 **employeeType** | **Number**| Type of user&#x27;s role :  | Value | Type | | --- | --- | | 0 | None (default)| | 1 | Leader | | 2 | Employee |  | [optional] 
 **entityType** | **Number**| Type of user&#x27;s entity type :    | Value | Type |   | --- | --- |   | 1 | Reporting Financial Institution |   | 2 | Non-Reporting Financial Institution |   | 3 | Active Non-Financial Entity - Governmental entities, Int. organizations |   | 4 | Active Non-Financial Entity - Other |   | 5 | Passive Non-Financial Entity - Investment entity that is not Participating Jurisdiction FI |  | [optional] 
 **title** | **String**| User&#x27;s title. Possible values: * M * MME * MLLE  | [optional] 
 **firstname** | **String**| User&#x27;s first name | [optional] 
 **lastname** | **String**| User&#x27;s last name | [optional] 
 **middleNames** | **String**| User&#x27;s middle names | [optional] 
 **birthday** | **String**| User&#x27;s birth date. Format YYYY-MM-DD | [optional] 
 **address1** | **String**| User&#x27;s postal address (main). Can not contain carriage return. | [optional] 
 **address2** | **String**| User&#x27;s postal address (complement). Can not contain carriage return. | [optional] 
 **address3** | **String**| User&#x27;s postal address (complement2). Can not contain carriage return. | [optional] 
 **postcode** | **String**| User&#x27;s postcode | [optional] 
 **city** | **String**| User&#x27;s city | [optional] 
 **state** | **String**| User&#x27;s state | [optional] 
 **country** | **String**| User&#x27;s country (Format ISO 3166-1 alpha-2) | [optional] 
 **phone** | **String**| User&#x27;s phone number (Format E.164). If you use Url please replace + with %2B. | [optional] 
 **mobile** | **String**| User&#x27;s mobile phone number (Format E.164). If you use Url please replace + with %2B. | [optional] 
 **nationality** | **String**| User&#x27;s nationality | [optional] 
 **nationalityOther** | **String**| User&#x27;s other nationality | [optional] 
 **placeOfBirth** | **String**| User&#x27;s place of birth | [optional] 
 **birthCountry** | **String**| User&#x27;s country of birth (Format ISO 3166-1 alpha-2) | [optional] 
 **occupation** | **String**| User&#x27;s occupation | [optional] 
 **incomeRange** | **String**| Customer income range | [optional] 
 **legalName** | **String**| Business name | [optional] 
 **legalRegistrationNumber** | **String**| Business registration number | [optional] 
 **legalTvaNumber** | **String**| Business VAT number | [optional] 
 **legalRegistrationDate** | **Date**| Business registration date | [optional] 
 **legalForm** | **String**| | Code | Category | Details (in french) | | ---- | ----- | ---- | | 1000 | Individual company | Entrepreneur Individuel a Responsabilit?? Limit??e (EIRL) | | 2110 | Indivision and others | Indivision entre personnes physiques | | 2120 | Indivision and others | Indivision avec personne morale | | 2210 | Indivision and others | Soci??t?? cr????e de fait entre personnes physiques | | 2220 | Indivision and others | Soci??t?? cr????e de fait avec personne morale | | 2310 | Indivision and others | Soci??t?? en participation entre personnes physiques | | 2320 | Indivision and others | Soci??t?? en participation avec personne morale | | 2385 | Indivision and others | Soci??t?? en participation de professions lib??rales | | 2400 | Indivision and others | Fiducie | | 2700 | Diverse | Paroisse hors zone concordataire | | 2900 | Economic Interest Grouping | Autre groupement de droit priv?? non dot?? de la personnalit?? morale | | 3110 | Foreign company | Repr??sentation ou agence commerciale d&#x27;??tat ou organisme public ??tranger  immatricul?? au RCS | | 3120 | Foreign company | Soci??t?? ??trang??re immatricul??e au RCS | | 3205 | Foreign company | Organisation internationale | | 3210 | Foreign company | Etat collectivit?? ou ??tablissement public ??tranger | | 3220 | Foreign company | Soci??t?? ??trang??re non immatricul??e au RCS | | 3290 | Foreign company | (Autre) personne morale de droit ??tranger | | 4110 | Administrations, Instituions | Etablissement public national ?? caract??re industriel ou commercial dot?? d&#x27;un comptable public | | 4120 | Administrations, Instituions | Etablissement public national ?? caract??re industriel ou commercial non dot?? d&#x27;un comptable public | | 4130 | Administrations, Instituions | Exploitant public | | 4140 | Administrations, Instituions | Etablissement public local ?? caract??re industriel ou commercial | | 4150 | Administrations, Instituions | R??gie d&#x27;une collectivit?? locale ?? caract??re industriel ou commercial | | 4160 | Administrations, Instituions | Institution Banque de France | | 5191 | De facto undivided ownership company | Soci??t?? de caution mutuelle | | 5192 | Diverse | Soci??t?? coop??rative de banque populaire | | 5193 | De facto undivided ownership company | Caisse de cr??dit maritime mutuel | | 5194 | De facto undivided ownership company | Caisse (f??d??rale) de cr??dit mutuel | | 5195 | Association fondation | Association coop??rative inscrite (droit local Alsace Moselle) | | 5196 | De facto undivided ownership company | Caisse d&#x27;??pargne et de pr??voyance ?? forme coop??rative | | 5202 | General partnership | Soci??t?? en nom collectif | | 5203 | General partnership | Soci??t?? en nom collectif coop??rative | | 5306 | Limited company | Soci??t?? en commandite simple | | 5307 | Limited company | Soci??t?? en commandite simple coop??rative | | 5308 | Limited company | Soci??t?? en commandite par actions | | 5309 | Limited company | Soci??t?? en commandite par actions coop??rative | | 5385 | Limited company | Soci??t?? d&#x27;exercice lib??ral en commandite par action | | 5410 | Limited Liability Company  | SARL nationale | | 5415 | Limited Liability Company  | SARL d&#x27;??conomie mixte | | 5422 | Limited Liability Company  | SARL immobili??re pour le commerce et l&#x27;industrie (SICOMI) | | 5426 | Limited Liability Company  | Soci??t?? immobili??re de gestion | | 5430 | Limited Liability Company  | Safer en SARL | | 5431 | Limited Liability Company  | SARL mixte d&#x27;int??r??t agricole (SIMA) | | 5432 | Limited Liability Company  | SARL d&#x27;int??r??t collectif agricole (SICA) | | 5442 | Limited Liability Company  | SARL d&#x27;attribution | | 5443 | Limited Liability Company  | SARL coop??rative de construction | | 5451 | Limited Liability Company  | SARL coop??rative de consommation | | 5453 | Limited Liability Company  | SARL coop??rative artisanale | | 5454 | Limited Liability Company  | SARL coop??rative d&#x27;int??r??t maritime | | 5455 | Limited Liability Company  | SARL coop??rative de transports | | 5458 | Limited Liability Company  | SARL coop??rative ouvri??re de production et de cr??dit (SCOP) | | 5459 | Limited Liability Company  | SARL union de soci??t??s coop??ratives | | 5460 | Limited Liability Company  | SARL coop??rative | | 5485 | Limited Liability Company  | Soci??t?? d&#x27;exercice lib??ral ?? responsabilit?? limit??e | | 5498 | Limited Liability Company  | SARL unipersonnelle | | 5499 | Limited Liability Company  | SARL | | 5505 | Limited company | SA ?? participation ouvri??re ?? conseil d&#x27;administration | | 5510 | Limited company | SA nationale ?? conseil d&#x27;administration | | 5515 | Limited company | SA d&#x27;??conomie mixte ?? conseil d&#x27;administration | | 5520 | Limited company | Soci??t?? d&#x27;investissement ?? capital variable (SICAV) ?? conseil d&#x27;administration | | 5522 | Limited company | Soci??t?? anonyme immobili??re pour le commerce et l&#x27;industrie (SICOMI)  ?? conseil d&#x27;administration | | 5525 | Limited company | Soci??t?? anonyme immobili??re d&#x27;investissement ?? conseil d&#x27;administration | | 5530 | Limited company | Safer anonyme ?? conseil d&#x27;administration | | 5531 | Limited company | Soci??t?? anonyme mixte d&#x27;int??r??t agricole (SMIA) ?? conseil d&#x27;administration | | 5532 | Limited company | Soci??t?? anonyme mixte d&#x27;int??r??t collectif agricole (SICA) ?? conseil d&#x27;administration | | 5542 | Limited company | Soci??t?? anonyme d&#x27;attribution ?? conseil d&#x27;administration | | 5543 | Limited company | Soci??t?? anonyme coop??rative de construction ?? conseil d&#x27;administration | | 5546 | Limited company | SA de HLM ?? conseil d&#x27;administration | | 5547 | Limited company | SA coop??rative de production de HLM ?? conseil d&#x27;administration | | 5548 | Limited company | SA de cr??dit immobilier ?? conseil d&#x27;administration | | 5551 | Limited company | SA coop??rative de consommation ?? conseil d&#x27;administration | | 5552 | Limited company | SA coop??rative de commer??ants d??taillants ?? conseil d&#x27;administration | | 5553 | Limited company | SA coop??rative artisanale ?? conseil d&#x27;administration | | 5554 | Limited company | SA coop??rative (d&#x27;int??r??t) maritime ?? conseil d&#x27;administration | | 5555 | Limited company | SA coop??rative de transports ?? conseil d&#x27;administration | | 5558 | Limited company | SCOP ?? conseil d&#x27;administration | | 5559 | Limited company | SA union de soci??t??s coop??ratives ?? conseil d&#x27;administration | | 5560 | Limited company | SA coop??rative ?? conseil d&#x27;administration | | 5585 | Limited company | Soci??t?? d&#x27;exercice lib??ral ?? forme anonyme ?? conseil d&#x27;administration | | 5599 | Limited company | SA ?? conseil d&#x27;administration | | 5605 | Limited company | SA ?? participation ouvri??re ?? directoire | | 5610 | Limited company | SA nationale ?? directoire | | 5615 | Limited company | SA d&#x27;??conomie mixte ?? directoire | | 5620 | Limited company | SICAV | | 5622 | Limited company | SICOMI | | 5625 | Limited company | Soci??t?? immobili??re d&#x27;investissement anonyme ?? directoire | | 5630 | Limited company | Safer anonyme ?? directoire | | 5631 | Limited company | Soci??t?? anonyme mixte d&#x27;int??r??t agricole (SMIA) | | 5632 | Limited company | SICA | | 5642 | Limited company | Soci??t?? anonyme d&#x27;attribution ?? directoire | | 5643 | Limited company | Soci??t?? anonyme coop??rative de construction ?? directoire | | 5646 | Limited company | S.A. HLM ?? directoire | | 5647 | Limited company | Soci??t?? coop??rative de production de HLM anonyme ?? directoire | | 5648 | Limited company | SA de cr??dit immobilier ?? directoire | | 5651 | Limited company | SA coop??rative de consommation ?? directoire | | 5652 | Limited company | SA coop??rative de commer??ants d??taillants ?? directoire | | 5653 | Limited company | SA coop??rative artisanale ?? directoire | | 5654 | Limited company | SA coop??rative (d&#x27;int??r??t) maritime ?? directoire | | 5655 | Limited company | SA coop??rative de transport ?? directoire | | 5658 | Limited company | SCOP | | 5659 | Limited company | SA union de soci??t??s coop??ratives ?? directoire | | 5660 | Limited company | SA coop??rative ?? directoire | | 5685 | Limited company | Soci??t?? d&#x27;exercice lib??ral ?? forme anonyme ?? directoire | | 5699 | Limited company | (Autre) SA ?? directoire | | 5710 | Limited company | SAS | | 5720 | Limited company | SASU | | 5785 | Limited company | Soci??t?? d&#x27;exercice lib??ral par action simplifi??e | | 5800 | Diverse | Soci??t?? europ??enne | | 6100 | De facto undivided ownership company | Caisse d&#x27;??pargne et de pr??voyance | | 6210 | Economic Interest Grouping | GEIE | | 6220 | Economic Interest Grouping | GIE | | 6316 | Diverse | CUMA | | 6317 | Diverse | Soci??t?? coop??rative agricole | | 6318 | Diverse | Union de soci??t??s coop??ratives agricoles | | 6411 | De facto undivided ownership company | Soci??t?? d&#x27;assurance mutuelle | | 6521 | Civils companies (without SCI) | SCPI | | 6532 | Civils companies (without SCI) | SICA | | 6533 | Civils companies (without SCI) | GAEC | | 6534 | Civils companies (without SCI) | Groupement foncier agricole | | 6535 | Civils companies (without SCI) | Groupement agricole foncier | | 6536 | Civils companies (without SCI) | Groupement forestier | | 6537 | Civils companies (without SCI) | Groupement pastoral | | 6538 | Civils companies (without SCI) | Groupement foncier rural | | 6539 | Civils companies (without SCI) | Soci??t?? civile fonci??re | | 6540 | Civils companies | SCI | | 6541 | Civils companies | SCI de construction vente | | 6542 | Civils companies (without SCI) | Soci??t?? civile d&#x27;attribution | | 6543 | Civils companies (without SCI) | Soci??t?? civile coop??rative de construction | | 6544 | Civils companies | Soci??t?? civile d&#x27;accession progressive ?? la propri??t?? | | 6551 | Civils companies (without SCI) | Soci??t?? civile coop??rative de consommation | | 6554 | Civils companies (without SCI) | Soci??t?? civile coop??rative (d&#x27;int??r??t) maritime | | 6558 | Civils companies (without SCI) | Soci??t?? civile coop??rative entre m??decins | | 6560 | Civils companies (without SCI) | SCP | | 6561 | Civils companies (without SCI) | SCP d&#x27;avocats | | 6562 | Civils companies (without SCI) | SCP d&#x27;avocats aux conseil | | 6563 | Civils companies (without SCI) | SCP d&#x27;avou??s d&#x27;appel | | 6564 | Civils companies (without SCI) | SCP d&#x27;huissiers | | 6565 | Civils companies (without SCI) | SCP de notaires | | 6566 | Civils companies (without SCI) | SCP de commissaires-priseurs | | 6567 | Civils companies (without SCI) | SCP de greffiers de tribunal de commerce | | 6568 | Civils companies (without SCI) | SCP de conseils juridiques | | 6569 | Civils companies (without SCI) | SCP de commissaires aux comptes | | 6571 | Civils companies (without SCI) | SCP de m??decins | | 6572 | Civils companies (without SCI) | SCP de dentistes | | 6573 | Civils companies (without SCI) | SCP d&#x27;infirmiers | | 6574 | Civils companies (without SCI) | SCP de masseurs kin??sith??rapeutes | | 6575 | Civils companies (without SCI) | SCP de directeurs de laboratoire d&#x27;analyse m??dicale | | 6576 | Civils companies (without SCI) | SCP de v??t??rinaires | | 6577 | Civils companies (without SCI) | SCP de g??om??tres-experts | | 6578 | Civils companies (without SCI) | SCP d&#x27;architectes | | 6585 | Civils companies (without SCI) | SCP | | 6588 | Civils companies (without SCI) | Soci??t?? civile laiti??re | | 6589 | Civils companies (without SCI) | Soci??t?? civile de moyens | | 6595 | Civils companies (without SCI) | Caisse (locale) de cr??dit mutuel | | 6596 | Civils companies (without SCI) | Caisse de cr??dit agricole mutuel | | 6597 | Civils companies (without SCI) | Soci??t?? civile d&#x27;exploitation agricole | | 6598 | Farm operator  | Exploitation agricole ?? responsabilit?? limit??e | | 6599 | Civils companies (without SCI) | Autre soci??t?? civile | | 6901 | Diverse | Autres personnes de droit priv?? inscrites au registre du commerce et des soci??t??s | | 7111 | Administrations, Instituions | Autorit?? constitutionnelle | | 7112 | Administrations, Instituions | Autorit?? administrative ind??pendante | | 7113 | Administrations, Instituions | Minist??re | | 7120 | Administrations, Instituions | Service central d&#x27;un minist??re | | 7150 | Administrations, Instituions | Service du minist??re de la D??fense | | 7160 | Administrations, Instituions | Service d??concentr?? ?? comp??tence nation . D&#x27;un minist??re (hors D??fense) | | 7171 | Administrations, Instituions | Service d??concentr?? de l&#x27;Etat ?? comp??tence (inter) r??gionale | | 7172 | Administrations, Instituions | Service d??concentr?? de l&#x27;Etat ?? comp??tence (inter) d??partementale | | 7179 | Administrations, Instituions | (Autre) Service d??concentr?? de l&#x27;Etat ?? comp??tence territoriale | | 7190 | Administrations, Instituions | Ecole nationale non dot??e de la personnalit?? morale | | 7210 | Administrations, Instituions | Commune | | 7220 | Administrations, Instituions | D??partement | | 7225 | Administrations, Instituions | Territoire d&#x27;Outre-Mer | | 7229 | Administrations, Instituions | (Autre) Collectivit?? territoriale | | 7230 | Administrations, Instituions | R??gion | | 7312 | Administrations, Instituions | Commune associ??e | | 7313 | Administrations, Instituions | Section de commune | | 7314 | Administrations, Instituions | Ensemble urbain | | 7321 | Administrations, Instituions | Association syndicale autoris??e | | 7322 | Administrations, Instituions | Association fonci??re urbaine | | 7323 | Administrations, Instituions | Association fonci??re de remembrement | | 7331 | Administrations, Instituions | Etablissement public local d&#x27;enseignement | | 7340 | Administrations, Instituions | P??le m??tropolitain | | 7341 | Administrations, Instituions | Secteur de commune | | 7342 | Administrations, Instituions | District urbain | | 7343 | Administrations, Instituions | Communaut?? urbaine | | 7344 | Administrations, Instituions | M??tropole | | 7345 | Administrations, Instituions | Syndicat intercommunal ?? vocation multiple (SIVOM) | | 7346 | Administrations, Instituions | Communaut?? de commune | | 7347 | Administrations, Instituions | Communaut?? de villes | | 7348 | Administrations, Instituions | Communaut?? d&#x27;agglom??ration | | 7349 | Administrations, Instituions | Autre ??tablissement public local de coop??ration non sp??cialis?? ou entente | | 7351 | Administrations, Instituions | Institution interd??partementale ou entente | | 7352 | Administrations, Instituions | Institution interr??gionale ou entente | | 7353 | Administrations, Instituions | Syndicat intercommunal ?? vocation unique (SIVU) | | 7354 | Administrations, Instituions | Syndicat mixte communal | | 7355 | Administrations, Instituions | Autre syndicat mixte | | 7356 | Administrations, Instituions | Commission syndicale pour la gestion des biens indivis des communes | | 7361 | Administrations, Instituions | Centre communal d&#x27;action sociale | | 7362 | Administrations, Instituions | Caisse des ??coles | | 7363 | Administrations, Instituions | Caisse de cr??dit municipal | | 7364 | Administrations, Instituions | Etablissement d&#x27;hospitalisation | | 7365 | Administrations, Instituions | Syndicat inter hospitalier | | 7366 | Administrations, Instituions | Etablissement public local social et m??dico-social | | 7371 | Administrations, Instituions | Office public d&#x27;habitation ?? loyer mod??r?? (OPHLM) | | 7372 | Administrations, Instituions | Service d??partemental d&#x27;incendie | | 7373 | Administrations, Instituions | Etablissement public local culturel | | 7378 | Administrations, Instituions | R??gie d&#x27;une collectivit?? locale ?? caract??re administratif | | 7379 | Administrations, Instituions | (Autre) Etablissement public administratif local | | 7381 | Administrations, Instituions | Organisme consulaire | | 7382 | Administrations, Instituions | Etablissement public national ayant fonction d&#x27;administration centrale | | 7383 | Administrations, Instituions | Etablissement public national ?? caract??re scientifique  culturel et professionnel | | 7384 | Administrations, Instituions | Autre ??tablissement public national d&#x27;enseignement | | 7385 | Administrations, Instituions | Autre ??tablissement public national administratif ?? comp??tence territoriale limit??e | | 7389 | Administrations, Instituions | Etablissement public national ?? caract??re administratif | | 7410 | Administrations, Instituions | Groupement d&#x27;int??r??t public (GIP) | | 7430 | Administrations, Instituions | Etablissement public des cultes d&#x27;Alsace-Lorraine | | 7450 | Administrations, Instituions | Etablissement public, cercle et foyer dans les arm??es | | 7470 | Administrations, Instituions | Groupement de coop??ration sanitaire ?? gestion publique | | 7490 | Administrations, Instituions | Autre personne morale de droit administratif | | 8110 | Administrations, Instituions | R??gime g??n??ral de la s??curit?? sociale | | 8120 | Administrations, Instituions | R??gime sp??cial de s??curit?? sociale | | 8130 | Administrations, Instituions | Institution de retraite compl??mentaire | | 8140 | Administrations, Instituions | Mutualit?? sociale agricole | | 8150 | Administrations, Instituions | R??gime maladie des non-salari??s non agricoles | | 8160 | Administrations, Instituions | R??gime vieillesse ne d??pendant pas du r??gime g??n??ral de la s??curit?? sociale | | 8170 | Administrations, Instituions | R??gime d&#x27;assurance ch??mage | | 8190 | Administrations, Instituions | Autre r??gime de pr??voyance sociale | | 8210 | De facto undivided ownership company | Mutuelle | | 8250 | De facto undivided ownership company | Assurance mutuelle agricole | | 8290 | De facto undivided ownership company | Autre organisme mutualiste | | 8310 | Association fondation | Comit?? central d&#x27;entreprise | | 8311 | Association fondation | Comit?? d&#x27;??tablissement | | 8410 | Association fondation | Syndicat de salari??s | | 8420 | Association fondation | Syndicat patronal | | 8450 | Association fondation | Ordre professionnel ou assimil?? | | 8470 | Association fondation | Centre technique industriel ou comit?? professionnel du d??veloppement ??conomique | | 8490 | Association fondation | Autre organisme professionnel | | 8510 | Administrations, Instituions | Institution de pr??voyance | | 8520 | Administrations, Instituions | Institution de retraite suppl??mentaire | | 9110 | Condominium syndicate | Syndicat de copropri??t?? | | 9150 | Association fondation | Association syndicale libre | | 9210 | Association fondation | Association non d??clar??e | | 9220 | Association fondation | Association d??clar??e | | 9221 | Association fondation | Association d??clar??e \&quot;entreprises d&#x27;insertion par l&#x27;??conomique\&quot; | | 9222 | Association fondation | Association interm??diaire | | 9223 | Association fondation | Groupement d&#x27;employeurs | | 9224 | Association fondation | Association d&#x27;avocats ?? responsabilit?? professionnelle individuelle | | 9230 | Association fondation | Association d??clar??e  reconnue d&#x27;utilit?? publique | | 9240 | Association fondation | Congr??gation | | 9260 | Association fondation | Association de droit local | | 9300 | Association fondation | Fondation | | 9900 | Diverse | Autre personne morale de droit priv?? | | 9970 | Diverse | Groupement de coop??ration sanitaire ?? gestion priv??e |  | [optional] 
 **legalShareCapital** | **Number**| Business share capital | [optional] 
 **legalSector** | **String**| Business sector. NAF code in France | [optional] 
 **legalAnnualTurnOver** | **String**| Business annual turnover (in k???) | [optional] 
 **legalNetIncomeRange** | **String**| Business net income range (in k???) | [optional] 
 **legalNumberOfEmployeeRange** | **String**| Business number of employees range | [optional] 
 **effectiveBeneficiary** | **Number**| Business effective beneficiary | [optional] 
 **language** | **String**| User&#x27;s prefered language (ISO 639-1) | [optional] 
 **taxNumber** | **String**| User&#x27;s tax identification number. If the taxResidence is set to another country than France, the field is mandatory. (deprecated, you must use the TaxResidence endpoint)  | [optional] 
 **taxResidence** | **String**| User&#x27;s tax residence country code (2 char code following ISO 3166 norm). (deprecated, you must use the TaxResidence endpoint)  | [optional] 
 **position** | **String**| User&#x27;s position. | [optional] 
 **personalAssets** | **String**| User&#x27;s personal assets range exprimed in K???. | [optional] 
 **activityOutsideEu** | **Number**| Commercial activity outside of EU (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **economicSanctions** | **Number**| Company, subsidiaries, entities, employees, directors, joint ventures are subject to Economic Sanctions (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **residentCountriesSanctions** | **Number**| Company, subsidiaries, entities, employees, directors, joint ventures are subject to Economic Sanctions (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **involvedSanctions** | **Number**| Company involved in countries or with people subject to Economic Sanctions after careful review (only for Professionals) | Value | Type | | --- | --- | | 0 | No | | 1 | Yes |  | [optional] 
 **timezone** | **String**| User&#x27;s timezone (Format tz database) The time zones have unique names in the form \&quot;Area/Location\&quot;, e.g. \&quot;America/New_York\&quot;, \&quot;Europe/Paris\&quot; More info [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersIdKyclivenessPost"></a>
# **usersIdKyclivenessPost**
> InlineResponse201 usersIdKyclivenessPost(userId, opts)



POST KYC Liveness.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.UserApi();
let userId = 56; // Number | The user ID
let opts = { 
  'body': "body_example" // String | URL user will be redirect to after process that will override default configured value.
};
apiInstance.usersIdKyclivenessPost(userId, opts, (error, data, response) => {
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
 **userId** | **Number**| The user ID | 
 **body** | [**String**](String.md)| URL user will be redirect to after process that will override default configured value. | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: */*, application/json

<a name="usersIdKyclivenessPut"></a>
# **usersIdKyclivenessPut**
> Object usersIdKyclivenessPut(userId)



PUT KYC Liveness.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.UserApi();
let userId = 56; // Number | The user ID

apiInstance.usersIdKyclivenessPut(userId, (error, data, response) => {
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
 **userId** | **Number**| The user ID | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

<a name="usersIdKycreviewPut"></a>
# **usersIdKycreviewPut**
> InlineResponse20027 usersIdKycreviewPut(id, opts)

review user information

Perform a KYC review for given user.

### Example
```javascript
import {Treezor} from 'treezor';
let defaultClient = Treezor.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Treezor.UserApi();
let id = 56; // Number | User's id.
let opts = { 
  'accessToken': "accessToken_example", // String | Access token must be defined here or in Authorization HTTP header. More info [here](https://agent.treezor.com/security-authentication). 
  'accessSignature': "accessSignature_example", // String | Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication). 
  'accessTag': "accessTag_example", // String | Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics). 
  'accessUserId': 56, // Number | Access user's id is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
  'accessUserIp': "accessUserIp_example" // String | Access user's ip is used for user's action restriction. More info [here](https://agent.treezor.com/basics). 
};
apiInstance.usersIdKycreviewPut(id, opts, (error, data, response) => {
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
 **id** | **Number**| User&#x27;s id. | 
 **accessToken** | **String**| Access token must be defined here or in Authorization HTTP header. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessSignature** | **String**| Access signature can be mandatory for specific context. Treezor will contact you if so. More info [here](https://agent.treezor.com/security-authentication).  | [optional] 
 **accessTag** | **String**| Access tag is used for idem potency query. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserId** | **Number**| Access user&#x27;s id is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 
 **accessUserIp** | **String**| Access user&#x27;s ip is used for user&#x27;s action restriction. More info [here](https://agent.treezor.com/basics).  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

