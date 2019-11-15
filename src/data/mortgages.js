/**
 * Singleton mortgage data object.
 */

import TestData from './testData';

const DATA_CLASS = 'mortgage';

const FIXED = 'fixed';

/**
 * Mortgage offer types.
*/
class Offer {
  /**
   * Mortgage offer types.
   * @param {Number} length Offered length of rate type in years.
   * @param {String} type   Rate type.
   */
  constructor(length, type) {
    this.length = length;
    this.type = type;
  }
}

const TYPES = {
  fixed_with_fee: {
    preferences: {
      type: FIXED,
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
  return this.data.preferences.type === FIXED;
};

export default mortgageData;
