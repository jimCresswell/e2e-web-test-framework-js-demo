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
  get hasNationwideMortgage() {
    return this.data.hasNationwideMortgage;
  }

  get applicationType() {
    return this.data.applicationType;
  }

  get isChangingLender() {
    return this.data.applicationType === CHANGING_LENDER;
  }

  get mortgageAmount() {
    return this.data.mortgageAmount;
  }
  /* eslint-enable require-jsdoc */
}

const users = new ExamplesCollection(
  COLLECTION_NAME, User.decorate(EXAMPLES)
);
export default users;
