/**
 * Mortgage offer types.
 *
 * @class
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

export default Offer;
