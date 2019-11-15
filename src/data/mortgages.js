/**
 * Singleton mortgage data object.
 */

import TestData from './testData';
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

const mortgageData = new TestData(DATA_CLASS, TYPES);
mortgageData.isFixed = function isFixed() {
  this.checkTypeIsSet();
  return this.data.preferences.rateType === FIXED;
};
mortgageData.hasFee = function isFixed() {
  this.checkTypeIsSet();
  return this.data.preferences.hasFee;
};
mortgageData.getExpectedOffers = function getExpectedOffer() {
  this.checkTypeIsSet();
  return this.data.expectedOffers;
};
mortgageData.getPreferredProductName = function getPreferredProductName() {
  this.checkTypeIsSet();
  return this.data.preferences.offerPreference.toDataProductName();
};

export default mortgageData;
