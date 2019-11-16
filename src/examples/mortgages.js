/**
 * Singleton mortgage test data examples.
 */

import ExamplesCollection from '../helpers/data/examplesCollection';
import Offer from './offer';

const COLLECTION_NAME = 'mortgages';

// Constants.
const FIXED = 'Fixed';

const EXAMPLES = {
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

const mortgages = new ExamplesCollection(COLLECTION_NAME, EXAMPLES);
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
