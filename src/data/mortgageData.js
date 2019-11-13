/* eslint max-classes-per-file: off */

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

/**
 * Mortgage data singleton.
 */
class MortgageData {
  /**
   * Define the mortgage data at instantiation.
   */
  constructor() {
    this.fixedWithFee = {
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
    };
  }

  /**
   * Access the user data.
   * @param  {String} type A key identifying the user type.
   * @return {Object}          The user data.
   */
  getByType(type) {
    if (Object.prototype.hasOwnProperty.call(this.types, type)) {
      return this[type];
    }
    throw new TypeError(
      `Unsupported ${DATA_CLASS} type ${type}.
      Available types are ${Object.keys(this.types)}`
    );
  }
}

const mortgageData = new MortgageData();
export default mortgageData;
