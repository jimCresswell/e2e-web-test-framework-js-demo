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
  const defaultFakeWidth = 800;
  let fakeWidth = defaultFakeWidth;

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
      getText: sinon.fake(),
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
    url: sinon.fake(),
    setWindowSize: sinon.fake(),
    getWindowSize: sinon.fake(() => ({ width: fakeWidth })),
    setFakeWidth: (width) => { fakeWidth = width; },
    resetFakeWidth: () => { fakeWidth = defaultFakeWidth; },
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
