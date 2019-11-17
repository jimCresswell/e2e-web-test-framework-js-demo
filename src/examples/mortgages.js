/**
 * Singleton mortgage test data examples.
 */

import ExamplesCollection from '../helpers/data/examplesCollection';
import Example from '../helpers/data/example';
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

/**
 * Individual mortgage class containing methods to add to above examples.
 */
class Mortgage extends Example {
  /* eslint-disable require-jsdoc */
  get rateType() {
    return this.data.preferences.rateType;
  }

  get isFixed() {
    return this.data.preferences.rateType === FIXED;
  }

  get hasFee() {
    return this.data.preferences.hasFee;
  }

  get preferredProductDataName() {
    return this.data.preferences.offerPreference.toDataProductName();
  }

  get expectedOffers() {
    return this.data.expectedOffers;
  }
  /* eslint-enable require-jsdoc */
}

const mortgages = new ExamplesCollection(
  COLLECTION_NAME, Mortgage.decorate(EXAMPLES)
);
export default mortgages;
