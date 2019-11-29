/**
 * Tests for the mortgagesCollection module.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off,
no-unused-expressions: off
*/

import { expect } from 'chai';

import Mortgage from './mortgage';
import Offer from './offer';

describe('Mortgages instance', function() {
  before(function() {
    this.mortgage = new Mortgage({
      exampleName: '_test',
      preferences: {
        rateType: Mortgage.TRACKER,
        hasFee: false,
        offerPreference: new Offer(5, Mortgage.TRACKER),
      },
      expectedOffers: [
        new Offer(5, Mortgage.TRACKER),
      ],
    });
  });

  it('has a rateType value', function() {
    expect(this.mortgage.rateType).to.equal(Mortgage.TRACKER);
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

  it('has an expectedOffers array of Offers', function() {
    const offers = this.mortgage.expectedOffers;
    expect(offers[0]).to.be.instanceof(Offer);
  });
});
