/**
 * Helpers for testing WDIO page objects.
 */

import sinon from 'sinon';

/**
 * Mock the WDIO global functions.
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
 */
function unMockWdio() {
  global.$ = this.old$;
  global.$$ = this.old$$;
  global.browser = this.oldBrowser;
  sinon.restore();
}

export { mockWdio, unMockWdio };
