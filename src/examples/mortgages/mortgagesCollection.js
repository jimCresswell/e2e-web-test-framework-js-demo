/**
 * Exports a single instance of MortgagesCollection.
 *
 * This module defines classes for both individual and collections of mortgages,
 * extending the base Example and ExamplesCollection classes.
 *
 * @module mortgagesCollection
 */
/* eslint max-classes-per-file: off */

import Mortgage from './mortgage';
import Offer from './offer';
import ExamplesCollection from '../../helpers/data/examplesCollection';

/**
* Mortgage data examples to be wrapped in an ExamplesCollection instance.
* @constant {Example[]}
*/
const MORTGAGE_EXAMPLES = [
  new Mortgage({
    exampleName: '_test',
    preferences: {
      rateType: Mortgage.TRACKER,
      hasFee: false,
      offerPreference: new Offer(5, Mortgage.TRACKER),
    },
    expectedOffers: [
      new Offer(5, Mortgage.TRACKER),
    ],
  }),
  new Mortgage({
    exampleName: 'fixed_with_fee',
    preferences: {
      rateType: Mortgage.FIXED,
      hasFee: true,
      offerPreference: new Offer(5, Mortgage.FIXED),
    },
    expectedOffers: [
      new Offer(2, Mortgage.FIXED),
      new Offer(3, Mortgage.FIXED),
      new Offer(5, Mortgage.FIXED),
      new Offer(10, Mortgage.FIXED),
    ],
  }),
];


/**
 * The exported MortgagesCollection instance.
 * @constant {MortgagesCollection}
 */
const mortgagesCollection = new ExamplesCollection(
  'mortgages', MORTGAGE_EXAMPLES
);
export default mortgagesCollection;
