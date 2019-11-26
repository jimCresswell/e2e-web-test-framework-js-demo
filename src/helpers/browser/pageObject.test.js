/**
 * Tests for the PageObject class.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off,
no-unused-expressions: off
*/

import { expect } from 'chai';

import PageObject from './pageObject';

describe('The PageObject base class', function() {
  before(function() {
    // Override the WDIO globals.
    this.oldBrowser = global.browser;
    this.old$ = global.$;

    global.browser = { url: (urlString) => urlString };
    global.$ = (locatorString) => locatorString;

    // Create an instance to test.
    this.URL = '/a/url/string';
    this.pageInstance = new PageObject(this.url);
  });

  after(function() {
    // Reset the WDIO globals.
    global.browser = this.oldBrowser;
    global.$ = this.old$;
  });

  it('has an open method.', function() {
    expect(this.pageInstance.open).to.be.instanceof(Function);
  });
});
