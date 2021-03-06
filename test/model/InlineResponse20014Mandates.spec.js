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
    describe('InlineResponse20014Mandates', function() {
      beforeEach(function() {
        instance = new Treezor.InlineResponse20014Mandates();
      });

      it('should create an instance of InlineResponse20014Mandates', function() {
        // TODO: update the code to test InlineResponse20014Mandates
        expect(instance).to.be.a(Treezor.InlineResponse20014Mandates);
      });

      it('should have the property mandateId (base name: "mandateId")', function() {
        // TODO: update the code to test the property mandateId
        expect(instance).to.have.property('mandateId');
        // expect(instance.mandateId).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property legalInformations (base name: "legalInformations")', function() {
        // TODO: update the code to test the property legalInformations
        expect(instance).to.have.property('legalInformations');
        // expect(instance.legalInformations).to.be(expectedValueLiteral);
      });

      it('should have the property uniqueMandateReference (base name: "uniqueMandateReference")', function() {
        // TODO: update the code to test the property uniqueMandateReference
        expect(instance).to.have.property('uniqueMandateReference');
        // expect(instance.uniqueMandateReference).to.be(expectedValueLiteral);
      });

      it('should have the property mandateStatus (base name: "mandateStatus")', function() {
        // TODO: update the code to test the property mandateStatus
        expect(instance).to.have.property('mandateStatus');
        // expect(instance.mandateStatus).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "userId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property debtorName (base name: "debtorName")', function() {
        // TODO: update the code to test the property debtorName
        expect(instance).to.have.property('debtorName');
        // expect(instance.debtorName).to.be(expectedValueLiteral);
      });

      it('should have the property debtorAddress (base name: "debtorAddress")', function() {
        // TODO: update the code to test the property debtorAddress
        expect(instance).to.have.property('debtorAddress');
        // expect(instance.debtorAddress).to.be(expectedValueLiteral);
      });

      it('should have the property debtorCity (base name: "debtorCity")', function() {
        // TODO: update the code to test the property debtorCity
        expect(instance).to.have.property('debtorCity');
        // expect(instance.debtorCity).to.be(expectedValueLiteral);
      });

      it('should have the property debtorZipCode (base name: "debtorZipCode")', function() {
        // TODO: update the code to test the property debtorZipCode
        expect(instance).to.have.property('debtorZipCode');
        // expect(instance.debtorZipCode).to.be(expectedValueLiteral);
      });

      it('should have the property debtorCountry (base name: "debtorCountry")', function() {
        // TODO: update the code to test the property debtorCountry
        expect(instance).to.have.property('debtorCountry');
        // expect(instance.debtorCountry).to.be(expectedValueLiteral);
      });

      it('should have the property debtorIban (base name: "debtorIban")', function() {
        // TODO: update the code to test the property debtorIban
        expect(instance).to.have.property('debtorIban');
        // expect(instance.debtorIban).to.be(expectedValueLiteral);
      });

      it('should have the property debtorBic (base name: "debtorBic")', function() {
        // TODO: update the code to test the property debtorBic
        expect(instance).to.have.property('debtorBic');
        // expect(instance.debtorBic).to.be(expectedValueLiteral);
      });

      it('should have the property sequenceType (base name: "sequenceType")', function() {
        // TODO: update the code to test the property sequenceType
        expect(instance).to.have.property('sequenceType');
        // expect(instance.sequenceType).to.be(expectedValueLiteral);
      });

      it('should have the property creditorName (base name: "creditorName")', function() {
        // TODO: update the code to test the property creditorName
        expect(instance).to.have.property('creditorName');
        // expect(instance.creditorName).to.be(expectedValueLiteral);
      });

      it('should have the property sepaCreditorIdentifier (base name: "sepaCreditorIdentifier")', function() {
        // TODO: update the code to test the property sepaCreditorIdentifier
        expect(instance).to.have.property('sepaCreditorIdentifier');
        // expect(instance.sepaCreditorIdentifier).to.be(expectedValueLiteral);
      });

      it('should have the property creditorAddress (base name: "creditorAddress")', function() {
        // TODO: update the code to test the property creditorAddress
        expect(instance).to.have.property('creditorAddress');
        // expect(instance.creditorAddress).to.be(expectedValueLiteral);
      });

      it('should have the property creditorCity (base name: "creditorCity")', function() {
        // TODO: update the code to test the property creditorCity
        expect(instance).to.have.property('creditorCity');
        // expect(instance.creditorCity).to.be(expectedValueLiteral);
      });

      it('should have the property creditorZipCode (base name: "creditorZipCode")', function() {
        // TODO: update the code to test the property creditorZipCode
        expect(instance).to.have.property('creditorZipCode');
        // expect(instance.creditorZipCode).to.be(expectedValueLiteral);
      });

      it('should have the property creditorCountry (base name: "creditorCountry")', function() {
        // TODO: update the code to test the property creditorCountry
        expect(instance).to.have.property('creditorCountry');
        // expect(instance.creditorCountry).to.be(expectedValueLiteral);
      });

      it('should have the property signatureDate (base name: "signatureDate")', function() {
        // TODO: update the code to test the property signatureDate
        expect(instance).to.have.property('signatureDate');
        // expect(instance.signatureDate).to.be(expectedValueLiteral);
      });

      it('should have the property debtorSignatureIp (base name: "debtorSignatureIp")', function() {
        // TODO: update the code to test the property debtorSignatureIp
        expect(instance).to.have.property('debtorSignatureIp');
        // expect(instance.debtorSignatureIp).to.be(expectedValueLiteral);
      });

      it('should have the property signed (base name: "signed")', function() {
        // TODO: update the code to test the property signed
        expect(instance).to.have.property('signed');
        // expect(instance.signed).to.be(expectedValueLiteral);
      });

      it('should have the property debtorIdentificationCode (base name: "debtorIdentificationCode")', function() {
        // TODO: update the code to test the property debtorIdentificationCode
        expect(instance).to.have.property('debtorIdentificationCode');
        // expect(instance.debtorIdentificationCode).to.be(expectedValueLiteral);
      });

      it('should have the property debtorReferencePartyName (base name: "debtorReferencePartyName")', function() {
        // TODO: update the code to test the property debtorReferencePartyName
        expect(instance).to.have.property('debtorReferencePartyName');
        // expect(instance.debtorReferencePartyName).to.be(expectedValueLiteral);
      });

      it('should have the property debtorReferenceIdentificationCode (base name: "debtorReferenceIdentificationCode")', function() {
        // TODO: update the code to test the property debtorReferenceIdentificationCode
        expect(instance).to.have.property('debtorReferenceIdentificationCode');
        // expect(instance.debtorReferenceIdentificationCode).to.be(expectedValueLiteral);
      });

      it('should have the property creditorReferencePartyName (base name: "creditorReferencePartyName")', function() {
        // TODO: update the code to test the property creditorReferencePartyName
        expect(instance).to.have.property('creditorReferencePartyName');
        // expect(instance.creditorReferencePartyName).to.be(expectedValueLiteral);
      });

      it('should have the property creditorReferenceIdentificationCode (base name: "creditorReferenceIdentificationCode")', function() {
        // TODO: update the code to test the property creditorReferenceIdentificationCode
        expect(instance).to.have.property('creditorReferenceIdentificationCode');
        // expect(instance.creditorReferenceIdentificationCode).to.be(expectedValueLiteral);
      });

      it('should have the property contractIdentificationNumber (base name: "contractIdentificationNumber")', function() {
        // TODO: update the code to test the property contractIdentificationNumber
        expect(instance).to.have.property('contractIdentificationNumber');
        // expect(instance.contractIdentificationNumber).to.be(expectedValueLiteral);
      });

      it('should have the property contractDescription (base name: "contractDescription")', function() {
        // TODO: update the code to test the property contractDescription
        expect(instance).to.have.property('contractDescription');
        // expect(instance.contractDescription).to.be(expectedValueLiteral);
      });

      it('should have the property isPaper (base name: "isPaper")', function() {
        // TODO: update the code to test the property isPaper
        expect(instance).to.have.property('isPaper');
        // expect(instance.isPaper).to.be(expectedValueLiteral);
      });

      it('should have the property sddType (base name: "sddType")', function() {
        // TODO: update the code to test the property sddType
        expect(instance).to.have.property('sddType');
        // expect(instance.sddType).to.be(expectedValueLiteral);
      });

      it('should have the property revocationSignatureDate (base name: "revocationSignatureDate")', function() {
        // TODO: update the code to test the property revocationSignatureDate
        expect(instance).to.have.property('revocationSignatureDate');
        // expect(instance.revocationSignatureDate).to.be(expectedValueLiteral);
      });

      it('should have the property createdIp (base name: "createdIp")', function() {
        // TODO: update the code to test the property createdIp
        expect(instance).to.have.property('createdIp');
        // expect(instance.createdIp).to.be(expectedValueLiteral);
      });

      it('should have the property createdDate (base name: "createdDate")', function() {
        // TODO: update the code to test the property createdDate
        expect(instance).to.have.property('createdDate');
        // expect(instance.createdDate).to.be(expectedValueLiteral);
      });

      it('should have the property modifiedDate (base name: "modifiedDate")', function() {
        // TODO: update the code to test the property modifiedDate
        expect(instance).to.have.property('modifiedDate');
        // expect(instance.modifiedDate).to.be(expectedValueLiteral);
      });

    });
  });

}));
