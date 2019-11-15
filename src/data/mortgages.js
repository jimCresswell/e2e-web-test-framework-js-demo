/**
 * Singleton mortgage data object.
 */

import TestData from './testData';

const DATA_CLASS = 'mortgage';

const FIXED = 'Fixed';

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
    this.offerLength = length;
    this.offerType = type;
  }

  /**
   * Custom toString method for data comparisons.
   * @return {String} String description of the offer.
   */
  toString() {
    return `${this.offerLength}yr${this.offerType}`;
  }

  /**
   * Generate the expected data-product-name attribute string.
   *
   * Note the double space after 'yr' and trailing space.
   * @return {String} data-product-name attribute string.
   */
  toDataProductName() {
    return `${this.offerLength} yr  ${this.offerType} `;
  }
}

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
  if (this.data === null) this.throwTypeError();
  return this.data.preferences.rateType === FIXED;
};
mortgageData.hasFee = function isFixed() {
  if (this.data === null) this.throwTypeError();
  return this.data.preferences.hasFee;
};
mortgageData.getExpectedOffers = function getExpectedOffer() {
  if (this.data === null) this.throwTypeError();
  return this.data.expectedOffers;
};
mortgageData.getPreferredProductName = function getPreferredProductName() {
  return this.data.preferences.offerPreference.toDataProductName();
};

export default mortgageData;
