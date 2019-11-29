/**
 * Exports a single instance of MortgagesCollection.
 *
 * This module defines classes for both individual and collections of mortgages,
 * extending the base Example and ExamplesCollection classes.
 *
 * @todo Consider replacing the decoration with instantiation in order to
 * enforce data types compliance and allow better documentation. Then
 * module can directly export an instance of ExamplesCollection without
 * subclassing it.
 *
 * @module mortgagesCollection
 */
/* eslint max-classes-per-file: off */

import ExamplesCollection from '../../helpers/data/examplesCollection';
import Example from '../../helpers/data/example';
import Offer from './offer';


/**
 * @constant {String}
 * @default
 */
const FIXED = 'Fixed';
/**
 * @constant {String}
 * @default
 */
const TRACKER = 'Tracker';


/**
* Mortgage data examples to be decorated with the Mortgage class methods and
* wrapped in an ExamplesCollection instance.
* @constant {Object}
* @default
*/
const MORTGAGES = {
  _test: {
    preferences: {
      rateType: TRACKER,
      hasFee: false,
      offerPreference: new Offer(5, TRACKER),
    },
    expectedOffers: [
      new Offer(5, TRACKER),
    ],
  },
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
 * Mortgage class to decorate the simple user examples.
 * @extends Example
 * @inner
 */
class Mortgage extends Example {
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
    return this.data.preferences.rateType === FIXED;
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

/**
 * The MortgagesCollection class, extending ExamplesCollection.
 * @extends ExamplesCollection
 * @inner
 */
class MortgagesCollection extends ExamplesCollection {
  /**
   * Create an ExamplesCollection of 'mortgages'.
   */
  constructor() {
    super('mortgages', Mortgage.decorate(MORTGAGES));
  }
}

/**
 * The exported MortgagesCollection instance.
 * @constant {MortgagesCollection}
 */
const mortgagesCollection = new MortgagesCollection();
export default mortgagesCollection;
