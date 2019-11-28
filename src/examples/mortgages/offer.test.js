/**
 * Tests for the Offer class.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off,
no-unused-expressions: off
*/

import { expect } from 'chai';

import Offer from './offer';

describe('Offer instance', function() {
  before(function() {
    this.offer = new Offer(3, 'Fixed');
  });

  it('has the expected toString value', function() {
    expect(this.offer.toString()).to.equal('3yrFixed');
  });

  // Note the double space after 'yr' and trailing space.
  it('has the expected toDataProductName value', function() {
    expect(this.offer.toDataProductName()).to.equal('3 yr  Fixed ');
  });
});
