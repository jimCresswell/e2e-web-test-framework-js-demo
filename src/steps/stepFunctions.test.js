/**
 * Tests for the Find Mortgage Rate steps.
 *
 * These tests don't throw unexpectedly, in lieu of compile time analysis.
 * These tests are coupled to implementation and so are not best practice,
 * however they are a lot quicker than running the features to catch issues.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off,
no-unused-expressions: off
*/

import { expect, AssertionError } from 'chai';

import { mockWdio, unMockWdio } from '../helpers/test/testHelpers';

import {
  setViewportDimensions,
  goToNewMortgageRates,
  goToNewMortgageRatesMediumScreen,
  enterDetails,
  checkExpectedOffers,
  startMorgageApplication
} from './stepFunctions';

describe('The step function module', function() {
  // Set fakes for the WDIO `$` and `browser` objects.
  before(function() {
    mockWdio.call(this);
  });

  after(function() {
    unMockWdio.call(this);
  });

  it('includes a setViewportDimensions method', function() {
    expect(() => setViewportDimensions(100, 200)).to.not.throw();

    // Example of what can be done with the faked `$` and `browser` methods.
    const fakeCallcount = global.browser.setWindowSize.callCount;
    expect(fakeCallcount)
      .to.equal(1, 'browser.setWindowSize should have been called once');
  });

  it('includes a goToNewMortgageRates method', function() {
    expect(() => goToNewMortgageRates()).to.not.throw();
  });

  it('includes a goToNewMortgageRatesMediumScreen method', function() {
    expect(() => goToNewMortgageRatesMediumScreen()).to.not.throw();
  });

  it('includes an enterDetails method', function() {
    // Not using the '_test' examples so that the called methods
    // execute without throwing TypeErrors for unimplemented
    // browser interation paths.
    const userType = 'remortgaging';
    const mortgageType = 'fixed_with_fee';
    expect(() => enterDetails(userType, mortgageType))
      .to.not.throw();
  });

  it('includes a checkExpectedOffers method', function() {
    // There is no page to get offers from so the actual offer
    // list is empty, while the '_test' mortgage specifies
    // one expected offer.
    const mortgageType = '_test';
    expect(() => checkExpectedOffers(mortgageType))
      .to.throw(AssertionError);
  });

  it('includes a startMorgageApplication method', function() {
    // There is no page to be on, so the check that we are
    // on the "start your remortgage" page fails.
    const mortgageType = '_test';
    expect(() => startMorgageApplication(mortgageType))
      .to.throw(AssertionError);
  });
});
