/**
 * Singleton mortgage test data examples.
 */

import ExamplesCollection from '../helpers/data/examplesCollection';
import Offer from './offer';

const DATA_CLASS = 'mortgage';

const FIXED = 'Fixed';

const TYPES = {
  fixed_with_fee: {
    preferences: {
      rateType: FIXED,
      hasFee: true,
      offerPreference: new Offer(5, FIXED),
    },
    expectedOffers: [
      new Offer(2, FIXED),
      new Offer(3, FIXED),
      new Offer(5, FIXED),
      new Offer(10, FIXED),
    ],
  },
};

const mortgages = new ExamplesCollection(DATA_CLASS, TYPES);
mortgages.isFixed = function isFixed() {
  this.checkExampleIsSet();
  return this.currentExample.preferences.rateType === FIXED;
};
mortgages.hasFee = function isFixed() {
  this.checkExampleIsSet();
  return this.currentExample.preferences.hasFee;
};
mortgages.getExpectedOffers = function getExpectedOffer() {
  this.checkExampleIsSet();
  return this.currentExample.expectedOffers;
};
mortgages.getPreferredProductName = function getPreferredProductName() {
  this.checkExampleIsSet();
  return this.currentExample.preferences.offerPreference.toDataProductName();
};

export default mortgages;
