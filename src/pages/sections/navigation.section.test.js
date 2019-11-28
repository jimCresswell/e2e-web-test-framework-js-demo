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
  // Set fakes for the WDIO `$` and `browser` objects,
  // and create the test data.
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
      expect(() => navigationSection.goToNewMortgageRates(1024))
        .to.throw(TypeError);
    });

    it('does not throw for viewport widths less than 1024.', function() {
      expect(() => navigationSection.goToNewMortgageRates(900))
        .to.not.throw();
    });
  });
});
