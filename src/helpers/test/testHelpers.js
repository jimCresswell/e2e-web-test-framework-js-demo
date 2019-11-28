/**
 * Helpers for testing WDIO page objects.
 *
 * @module testHelpers
 */

import sinon from 'sinon';

/**
 * Mock the WDIO global functions
 *
 * Must be called in the context of the Mocha test instance.
 * @this MochaTestContext
 */
function mockWdio() {
  this.old$ = global.$;
  global.$ = function fake$(selector) {
    const returnedEl = {
      selector,
      click: sinon.fake(),
      isDisplayed: sinon.fake(),
      setValue: sinon.fake(),
      waitForDisplayed: sinon.fake(),
      waitForClickable: sinon.fake(),
      waitForExist: sinon.fake(),
      scrollIntoView: sinon.fake(),
    };

    // Make the fake elements chainable.
    returnedEl.$ = fake$;

    return returnedEl;
  };

  this.old$$ = global.$$;
  global.$$ = function fake$$() {
    return [];
  };

  this.oldBrowser = global.browser;
  global.browser = {
    pause: sinon.fake(),
  };
}

/**
 * Un-mock the WDIO globals.
 *
 * Must be called in the context of the Mocha test instance.
 * @this MochaTestContext
 */
function unMockWdio() {
  global.$ = this.old$;
  global.$$ = this.old$$;
  global.browser = this.oldBrowser;
  sinon.restore();
}

export { mockWdio, unMockWdio };
