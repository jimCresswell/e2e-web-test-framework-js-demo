/**
 * Singleton mortgage data object.
 */

import TestData from './testData';

const DATA_CLASS = 'mortgage';

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
      type: 'fixed',
      hasFee: true,
    },
    expectedOffers: [
      new Offer(2, 'fixed'),
      new Offer(3, 'fixed'),
      new Offer(5, 'fixed'),
      new Offer(10, 'fixed'),
    ],
  },
};


const mortgageData = new TestData(DATA_CLASS, TYPES);
export default mortgageData;
