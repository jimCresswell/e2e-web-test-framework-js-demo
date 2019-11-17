/**
 * Tests for the Mortgages class.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off,
no-unused-expressions: off
*/

import { expect } from 'chai';

import mortgages from './mortgages';
import Offer from './offer';

describe('Mortgages instance', function() {
  before(function() {
    this.mortgage = mortgages.getExample('_test');
  });

  it('has a rateType value', function() {
    expect(this.mortgage.rateType).to.equal('Tracker');
  });

  it('has a isFixed value', function() {
    expect(this.mortgage.isFixed).to.be.false;
  });

  it('has a hasFee value', function() {
    expect(this.mortgage.hasFee).to.be.false;
  });

  it('has an offerPreference value of type Offer', function() {
    expect(this.mortgage.offerPreference).to.be.instanceof(Offer);
  });

  // Not testing the exact value because that belongs in the Offer class tests.
  it('has a preferredProductDataName value', function() {
    expect(this.mortgage.preferredProductDataName).to.not.be.undefined;
  });

  it('has an expectedOffers array of Offers', function() {
    const offers = this.mortgage.expectedOffers;
    const firstOffer = offers[0];
    expect(offers).to.be.instanceof(Array);
    expect(firstOffer).to.be.instanceof(Offer);
  });
});
