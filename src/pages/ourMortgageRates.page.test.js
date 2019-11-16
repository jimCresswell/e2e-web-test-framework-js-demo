/**
 * Tests for the ourMortgageRates page object.
 *
 * This is to pick up issues with the _use_ of the test data objects within the
 * page object. This is testing implementation so is not good test practice,
 * but is much faster than running the WebdriverIO tests to see if TypeErrors
 * get thrown.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off,
no-unused-expressions: off
*/

import { expect } from 'chai';
import sinon from 'sinon';

import ourMortgageRatesPage from './ourMortgageRates.page';
import users from '../examples/users';
import mortgages from '../examples/mortgages';

describe('Our Mortgage Rates page object', function() {
  // Set fakes for the WDIO `$` and `browser` objects,
  // and create the test data.
  before(function() {
    this.old$ = global.$;
    global.$ = function fake$(selector) {
      return {
        selector,
        click: sinon.fake(),
        isDisplayed: sinon.fake(),
        setValue: sinon.fake(),
        waitForDisplayed: sinon.fake(),
        waitForClickable: sinon.fake(),
      };
    };

    this.oldBrowser = global.browser;
    global.browser = {
      pause: sinon.fake(),
    };

    this.user = users.setCurrentExample('remortgaging');
    this.mortgage = mortgages.setCurrentExample('fixed with fee');
  });

  after(function() {
    global.$ = this.old$;
    global.browser = this.oldBrowser;
    sinon.restore();
  });

  it('enterUserDetails function to not throw', function() {
    expect(() => ourMortgageRatesPage.enterUserDetails(this.user))
      .to.not.throw();
  });

  it('enterMortgagePreferences function to not throw', function() {
    expect(() => ourMortgageRatesPage.enterMortgagePreferences(this.mortgage))
      .to.not.throw();
  });
});
