/**
 * Singleton user test data examples.
 */

import ExamplesCollection from '../helpers/data/examplesCollection';
import Example from '../helpers/data/example';

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

/**
 * Individual user class containing methods to add to above examples.
 */
class User extends Example {
  /* eslint-disable require-jsdoc */
  hasNationwideMortgage() {
    return this.hasNationwideMortgage;
  }

  isChangingLender() {
    return this.applicationType === CHANGING_LENDER;
  }

  getApplicationType() {
    return this.applicationType;
  }
  /* eslint-enable require-jsdoc */
}

const users = new ExamplesCollection(COLLECTION_NAME, User.decorate(EXAMPLES));

// To do: Refactor getExample to give single example, then remove these.
users.hasNationwideMortgage = function hasNationwideMortgage() {
  this.checkExampleIsSet();
  return this.currentExample.hasNationwideMortgage;
};
users.isChangingLender = function isChangingLender() {
  this.checkExampleIsSet();
  return this.currentExample.applicationType === CHANGING_LENDER;
};


export default users;
