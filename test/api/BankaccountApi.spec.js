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

  beforeEach(function() {
    instance = new Treezor.BankaccountApi();
  });

  describe('(package)', function() {
    describe('BankaccountApi', function() {
      describe('deleteBankaccount', function() {
        it('should call deleteBankaccount successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteBankaccount call and complete the assertions
          /*

          instance.deleteBankaccount(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse2002);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBankaccount', function() {
        it('should call getBankaccount successfully', function(done) {
          // TODO: uncomment, update parameter values for getBankaccount call and complete the assertions
          /*

          instance.getBankaccount(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse2002);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBankaccounts', function() {
        it('should call getBankaccounts successfully', function(done) {
          // TODO: uncomment, update parameter values for getBankaccounts call and complete the assertions
          /*
          var opts = {};

          instance.getBankaccounts(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse2002);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postBankaccount', function() {
        it('should call postBankaccount successfully', function(done) {
          // TODO: uncomment, update parameter values for postBankaccount call and complete the assertions
          /*
          var opts = {};

          instance.postBankaccount(userId, bankaccountOwnerName, bankaccountOwnerAddress, bankaccountIBAN, bankaccountBIC, bankaccountType, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Treezor.InlineResponse2002);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
