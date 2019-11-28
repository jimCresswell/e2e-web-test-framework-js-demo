/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off,
no-unused-expressions: off
*/

import { expect } from 'chai';

import navigationSection from './navigation.section';

import { mockWdio, unMockWdio } from '../../helpers/test/testHelpers';

describe('The Navigation section', function() {
  // Set fakes for the WDIO `$` and `browser` objects.
  before(function() {
    mockWdio.call(this);
  });

  after(function() {
    unMockWdio.call(this);
  });

  it('has an ID.', function() {
    expect(navigationSection.id).to.equal('navigation');
  });

  describe('goToNewMortgageRates method', function() {
    it('throws for viewport widths larger than 1023.', function() {
      global.browser.setFakeWidth(1024);
      expect(() => navigationSection.goToNewMortgageRates())
        .to.throw(TypeError);
    });

    it('does not throw for viewport widths less than 1024.', function() {
      global.browser.setFakeWidth(900);
      expect(() => navigationSection.goToNewMortgageRates())
        .to.not.throw();
    });
  });
});
