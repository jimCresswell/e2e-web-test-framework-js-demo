/**
 * Tests for the ourMortgageRates page object.
 *
 * This is to pick up issues with the _use_ of the test data objects within the
 * page object. This is testing implementation so is not good test practice,
 * but is much faster than running the WebdriverIO tests to see if TypeErrors
 * get thrown. Essentially this is in lieu of compile time errors being
 * possible.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off,
no-unused-expressions: off
*/

import { expect } from 'chai';

import { mockWdio, unMockWdio } from '../helpers/test/testHelpers';

import ourMortgageRatesPage from './ourMortgageRates.page';

describe('Our Mortgage Rates page object', function() {
  // Set fakes for the WDIO `$` and `browser` objects,
  // and create the test data.
  before(function() {
    mockWdio.call(this);

    this.user = {
      isChangingLender: true,
      propertyValue: 1,
      mortgageAmount: 2,
      termLengthYears: 3,
    };
    this.mortgage = {
      isFixed: true,
      rateType: 'fixed',
      hasFee: true,
    };
  });

  after(function() {
    unMockWdio.call(this);
  });

  it('enterUserDetails function to not throw', function() {
    expect(() => ourMortgageRatesPage.enterUserDetails(this.user))
      .to.not.throw();
  });

  it('enterMortgagePreferences function to not throw', function() {
    expect(() => ourMortgageRatesPage.enterMortgagePreferences(this.mortgage))
      .to.not.throw();
  });

  it('getOfferNames function to not throw', function() {
    expect(() => ourMortgageRatesPage.getOfferNames())
      .to.not.throw();
  });

  it('startApplication function to not throw', function() {
    const fakePreferredOffer = {
      toDataProductName: () => {},
    };
    expect(() => ourMortgageRatesPage.startApplication(fakePreferredOffer))
      .to.not.throw();
  });
});
