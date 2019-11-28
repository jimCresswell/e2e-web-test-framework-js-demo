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
    global.browser = { url: (urlString) => urlString };

    // Create an instance to test.
    this.url = '/a/url/string';
    this.sections = [{ id: 'section1' }, { id: 'section2' }];
    this.pageInstance = new PageObject(this.url, this.sections);
  });

  after(function() {
    // Reset the WDIO globals.
    global.browser = this.oldBrowser;
  });

  it('throws if a URL is not passed.', function() {
    expect(() => new PageObject()).to.throw(TypeError);
  });

  describe('has sections which', function() {
    it('are optional.', function() {
      expect(() => new PageObject('some/url')).to.not.throw();
    });

    it('must be passed in an Array.', function() {
      expect(() => new PageObject('some/url', 'not a section'))
        .to.throw(TypeError);
    });

    it('must have an ID.', function() {
      expect(() => new PageObject('some/url', [{ noID: 'nope' }]))
        .to.throw(TypeError);
    });

    it('must have an ID not already in use on the page.', function() {
      expect(() => new PageObject('some/url', [{ id: 'url' }]))
        .to.throw(TypeError);
    });

    it('can be mixed in to the page.', function() {
      expect(this.pageInstance).to.include.keys('section1', 'section2');
    });
  });

  it('has an open method.', function() {
    expect(() => this.pageInstance.open()).to.not.throw();
  });
});
