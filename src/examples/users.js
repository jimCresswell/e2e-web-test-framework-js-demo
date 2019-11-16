/**
 * Singleton user test data examples.
 */

import ExamplesCollection from '../helpers/data/examplesCollection';

const COLLECTION_NAME = 'users';

// Constants.
const CHANGING_LENDER = 'changing lender';

const EXAMPLES = {
  _test: {
    hasNationwideMortgage: false,
    applicationType: 'test application type',
    propertyValue: 1,
    mortgageAmount: 2,
    termLengthYears: 3,
  },
  remortgaging: {
    hasNationwideMortgage: false,
    applicationType: CHANGING_LENDER,
    propertyValue: 300000,
    mortgageAmount: 150000,
    termLengthYears: 30,
  },
};


const users = new ExamplesCollection(COLLECTION_NAME, EXAMPLES);

// To do: These functions should be on individual user objects,
// e.g. decorate the instances of Example with these functions at creation.
// const users = new ExamplesCollection(COLLECTION_NAME, EXAMPLES, EXAMPLE_METHODS);
users.hasNationwideMortgage = function hasNationwideMortgage() {
  this.checkExampleIsSet();
  return this.currentExample.hasNationwideMortgage;
};
users.isChangingLender = function isChangingLender() {
  this.checkExampleIsSet();
  return this.currentExample.applicationType === CHANGING_LENDER;
};


export default users;
