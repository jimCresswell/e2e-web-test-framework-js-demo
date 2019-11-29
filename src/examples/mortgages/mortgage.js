import Example from '../../helpers/data/example';

/**
 * Mortgage class to wrap the simple user examples.
 * @extends Example
 */
class Mortgage extends Example {
  /*
    Static constants.
   */

  /**
   * FIXED label.
   * @constant {string}
   * @static
   */
  static get FIXED() { return 'Fixed'; }

  /**
   * TRACKER label.
   * @constant {string}
   * @static
   */
  static get TRACKER() { return 'Tracker'; }


  /*
    Instance getters.
  */

  /**
   * The desired mortgage rate type.
   * @type {string}
   */
  get rateType() {
    return this.data.preferences.rateType;
  }

  /**
   * Is the desired mortgage rate type 'fixed'?
   * @type {boolean}
   */
  get isFixed() {
    return this.data.preferences.rateType === Mortgage.FIXED;
  }

  /**
   * Does the desired mortgage type have a fee?
   * @type {boolean}
   */
  get hasFee() {
    return this.data.preferences.hasFee;
  }

  /**
   * The user's preferred mortgage offer.
   * @type {Offer}
   */
  get offerPreference() {
    return this.data.preferences.offerPreference;
  }

  /**
   * The mortgage offers expected to be returned by the system.
   * @type {Offer[]}
   */
  get expectedOffers() {
    return this.data.expectedOffers;
  }
}

export default Mortgage;
