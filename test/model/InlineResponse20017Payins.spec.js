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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Treezor);
  }
}(this, function(expect, Treezor) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('InlineResponse20017Payins', function() {
      beforeEach(function() {
        instance = new Treezor.InlineResponse20017Payins();
      });

      it('should create an instance of InlineResponse20017Payins', function() {
        // TODO: update the code to test InlineResponse20017Payins
        expect(instance).to.be.a(Treezor.InlineResponse20017Payins);
      });

      it('should have the property payinId (base name: "payinId")', function() {
        // TODO: update the code to test the property payinId
        expect(instance).to.have.property('payinId');
        // expect(instance.payinId).to.be(expectedValueLiteral);
      });

      it('should have the property payinTag (base name: "payinTag")', function() {
        // TODO: update the code to test the property payinTag
        expect(instance).to.have.property('payinTag');
        // expect(instance.payinTag).to.be(expectedValueLiteral);
      });

      it('should have the property payinStatus (base name: "payinStatus")', function() {
        // TODO: update the code to test the property payinStatus
        expect(instance).to.have.property('payinStatus');
        // expect(instance.payinStatus).to.be(expectedValueLiteral);
      });

      it('should have the property codeStatus (base name: "codeStatus")', function() {
        // TODO: update the code to test the property codeStatus
        expect(instance).to.have.property('codeStatus');
        // expect(instance.codeStatus).to.be(expectedValueLiteral);
      });

      it('should have the property informationStatus (base name: "informationStatus")', function() {
        // TODO: update the code to test the property informationStatus
        expect(instance).to.have.property('informationStatus');
        // expect(instance.informationStatus).to.be(expectedValueLiteral);
      });

      it('should have the property walletId (base name: "walletId")', function() {
        // TODO: update the code to test the property walletId
        expect(instance).to.have.property('walletId');
        // expect(instance.walletId).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "userId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property cartId (base name: "cartId")', function() {
        // TODO: update the code to test the property cartId
        expect(instance).to.have.property('cartId');
        // expect(instance.cartId).to.be(expectedValueLiteral);
      });

      it('should have the property walletEventName (base name: "walletEventName")', function() {
        // TODO: update the code to test the property walletEventName
        expect(instance).to.have.property('walletEventName');
        // expect(instance.walletEventName).to.be(expectedValueLiteral);
      });

      it('should have the property walletAlias (base name: "walletAlias")', function() {
        // TODO: update the code to test the property walletAlias
        expect(instance).to.have.property('walletAlias');
        // expect(instance.walletAlias).to.be(expectedValueLiteral);
      });

      it('should have the property userFirstname (base name: "userFirstname")', function() {
        // TODO: update the code to test the property userFirstname
        expect(instance).to.have.property('userFirstname');
        // expect(instance.userFirstname).to.be(expectedValueLiteral);
      });

      it('should have the property userLastname (base name: "userLastname")', function() {
        // TODO: update the code to test the property userLastname
        expect(instance).to.have.property('userLastname');
        // expect(instance.userLastname).to.be(expectedValueLiteral);
      });

      it('should have the property messageToUser (base name: "messageToUser")', function() {
        // TODO: update the code to test the property messageToUser
        expect(instance).to.have.property('messageToUser');
        // expect(instance.messageToUser).to.be(expectedValueLiteral);
      });

      it('should have the property paymentMethodId (base name: "paymentMethodId")', function() {
        // TODO: update the code to test the property paymentMethodId
        expect(instance).to.have.property('paymentMethodId');
        // expect(instance.paymentMethodId).to.be(expectedValueLiteral);
      });

      it('should have the property subtotalItems (base name: "subtotalItems")', function() {
        // TODO: update the code to test the property subtotalItems
        expect(instance).to.have.property('subtotalItems');
        // expect(instance.subtotalItems).to.be(expectedValueLiteral);
      });

      it('should have the property subtotalServices (base name: "subtotalServices")', function() {
        // TODO: update the code to test the property subtotalServices
        expect(instance).to.have.property('subtotalServices');
        // expect(instance.subtotalServices).to.be(expectedValueLiteral);
      });

      it('should have the property subtotalTax (base name: "subtotalTax")', function() {
        // TODO: update the code to test the property subtotalTax
        expect(instance).to.have.property('subtotalTax');
        // expect(instance.subtotalTax).to.be(expectedValueLiteral);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property distributorFee (base name: "distributorFee")', function() {
        // TODO: update the code to test the property distributorFee
        expect(instance).to.have.property('distributorFee');
        // expect(instance.distributorFee).to.be(expectedValueLiteral);
      });

      it('should have the property createdDate (base name: "createdDate")', function() {
        // TODO: update the code to test the property createdDate
        expect(instance).to.have.property('createdDate');
        // expect(instance.createdDate).to.be(expectedValueLiteral);
      });

      it('should have the property createdIp (base name: "createdIp")', function() {
        // TODO: update the code to test the property createdIp
        expect(instance).to.have.property('createdIp');
        // expect(instance.createdIp).to.be(expectedValueLiteral);
      });

      it('should have the property paymentHtml (base name: "paymentHtml")', function() {
        // TODO: update the code to test the property paymentHtml
        expect(instance).to.have.property('paymentHtml');
        // expect(instance.paymentHtml).to.be(expectedValueLiteral);
      });

      it('should have the property paymentLanguage (base name: "paymentLanguage")', function() {
        // TODO: update the code to test the property paymentLanguage
        expect(instance).to.have.property('paymentLanguage');
        // expect(instance.paymentLanguage).to.be(expectedValueLiteral);
      });

      it('should have the property paymentPostUrl (base name: "paymentPostUrl")', function() {
        // TODO: update the code to test the property paymentPostUrl
        expect(instance).to.have.property('paymentPostUrl');
        // expect(instance.paymentPostUrl).to.be(expectedValueLiteral);
      });

      it('should have the property paymentPostDataUrl (base name: "paymentPostDataUrl")', function() {
        // TODO: update the code to test the property paymentPostDataUrl
        expect(instance).to.have.property('paymentPostDataUrl');
        // expect(instance.paymentPostDataUrl).to.be(expectedValueLiteral);
      });

      it('should have the property paymentAcceptedUrl (base name: "paymentAcceptedUrl")', function() {
        // TODO: update the code to test the property paymentAcceptedUrl
        expect(instance).to.have.property('paymentAcceptedUrl');
        // expect(instance.paymentAcceptedUrl).to.be(expectedValueLiteral);
      });

      it('should have the property paymentWaitingUrl (base name: "paymentWaitingUrl")', function() {
        // TODO: update the code to test the property paymentWaitingUrl
        expect(instance).to.have.property('paymentWaitingUrl');
        // expect(instance.paymentWaitingUrl).to.be(expectedValueLiteral);
      });

      it('should have the property paymentRefusedUrl (base name: "paymentRefusedUrl")', function() {
        // TODO: update the code to test the property paymentRefusedUrl
        expect(instance).to.have.property('paymentRefusedUrl');
        // expect(instance.paymentRefusedUrl).to.be(expectedValueLiteral);
      });

      it('should have the property paymentCanceledUrl (base name: "paymentCanceledUrl")', function() {
        // TODO: update the code to test the property paymentCanceledUrl
        expect(instance).to.have.property('paymentCanceledUrl');
        // expect(instance.paymentCanceledUrl).to.be(expectedValueLiteral);
      });

      it('should have the property paymentExceptionUrl (base name: "paymentExceptionUrl")', function() {
        // TODO: update the code to test the property paymentExceptionUrl
        expect(instance).to.have.property('paymentExceptionUrl');
        // expect(instance.paymentExceptionUrl).to.be(expectedValueLiteral);
      });

      it('should have the property ibanFullname (base name: "ibanFullname")', function() {
        // TODO: update the code to test the property ibanFullname
        expect(instance).to.have.property('ibanFullname');
        // expect(instance.ibanFullname).to.be(expectedValueLiteral);
      });

      it('should have the property ibanId (base name: "ibanId")', function() {
        // TODO: update the code to test the property ibanId
        expect(instance).to.have.property('ibanId');
        // expect(instance.ibanId).to.be(expectedValueLiteral);
      });

      it('should have the property ibanBic (base name: "ibanBic")', function() {
        // TODO: update the code to test the property ibanBic
        expect(instance).to.have.property('ibanBic');
        // expect(instance.ibanBic).to.be(expectedValueLiteral);
      });

      it('should have the property ibanTxEndToEndId (base name: "ibanTxEndToEndId")', function() {
        // TODO: update the code to test the property ibanTxEndToEndId
        expect(instance).to.have.property('ibanTxEndToEndId');
        // expect(instance.ibanTxEndToEndId).to.be(expectedValueLiteral);
      });

      it('should have the property ibanTxId (base name: "ibanTxId")', function() {
        // TODO: update the code to test the property ibanTxId
        expect(instance).to.have.property('ibanTxId');
        // expect(instance.ibanTxId).to.be(expectedValueLiteral);
      });

      it('should have the property refundAmount (base name: "refundAmount")', function() {
        // TODO: update the code to test the property refundAmount
        expect(instance).to.have.property('refundAmount');
        // expect(instance.refundAmount).to.be(expectedValueLiteral);
      });

      it('should have the property totalRows (base name: "totalRows")', function() {
        // TODO: update the code to test the property totalRows
        expect(instance).to.have.property('totalRows');
        // expect(instance.totalRows).to.be(expectedValueLiteral);
      });

      it('should have the property forwardUrl (base name: "forwardUrl")', function() {
        // TODO: update the code to test the property forwardUrl
        expect(instance).to.have.property('forwardUrl');
        // expect(instance.forwardUrl).to.be(expectedValueLiteral);
      });

      it('should have the property payinDate (base name: "payinDate")', function() {
        // TODO: update the code to test the property payinDate
        expect(instance).to.have.property('payinDate');
        // expect(instance.payinDate).to.be(expectedValueLiteral);
      });

      it('should have the property mandateId (base name: "mandateId")', function() {
        // TODO: update the code to test the property mandateId
        expect(instance).to.have.property('mandateId');
        // expect(instance.mandateId).to.be(expectedValueLiteral);
      });

      it('should have the property creditorName (base name: "creditorName")', function() {
        // TODO: update the code to test the property creditorName
        expect(instance).to.have.property('creditorName');
        // expect(instance.creditorName).to.be(expectedValueLiteral);
      });

      it('should have the property creditorAddressLine (base name: "creditorAddressLine")', function() {
        // TODO: update the code to test the property creditorAddressLine
        expect(instance).to.have.property('creditorAddressLine');
        // expect(instance.creditorAddressLine).to.be(expectedValueLiteral);
      });

      it('should have the property creditorCountry (base name: "creditorCountry")', function() {
        // TODO: update the code to test the property creditorCountry
        expect(instance).to.have.property('creditorCountry');
        // expect(instance.creditorCountry).to.be(expectedValueLiteral);
      });

      it('should have the property creditorIban (base name: "creditorIban")', function() {
        // TODO: update the code to test the property creditorIban
        expect(instance).to.have.property('creditorIban');
        // expect(instance.creditorIban).to.be(expectedValueLiteral);
      });

      it('should have the property creditorBIC (base name: "creditorBIC")', function() {
        // TODO: update the code to test the property creditorBIC
        expect(instance).to.have.property('creditorBIC');
        // expect(instance.creditorBIC).to.be(expectedValueLiteral);
      });

      it('should have the property virtualIbanId (base name: "virtualIbanId")', function() {
        // TODO: update the code to test the property virtualIbanId
        expect(instance).to.have.property('virtualIbanId');
        // expect(instance.virtualIbanId).to.be(expectedValueLiteral);
      });

      it('should have the property virtualIbanReference (base name: "virtualIbanReference")', function() {
        // TODO: update the code to test the property virtualIbanReference
        expect(instance).to.have.property('virtualIbanReference');
        // expect(instance.virtualIbanReference).to.be(expectedValueLiteral);
      });

    });
  });

}));
