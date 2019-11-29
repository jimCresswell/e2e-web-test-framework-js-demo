/**
 * Exports a single instance of UsersCollection.
 *
 * This module defines classes for both individual and collections of users,
 * extending the base Example and ExamplesCollection classes.
 *
 * @module usersCollection
 */
/* eslint max-classes-per-file: off */

import ExamplesCollection from '../../helpers/data/examplesCollection';
import Example from '../../helpers/data/example';


/**
 * @constant {String}
 * @default
 */
const CHANGING_LENDER = 'changing lender';
/**
 * @constant {String}
 * @default
 */
const FIRST_HOME = 'buying my first home';


/**
 * User data examples to be decorated with the User class methods and
 * wrapped in an ExamplesCollection instance.
 * @constant {Object}
 * @default
 */
const USER_EXAMPLES = {
  _test: {
    hasNationwideMortgage: false,
    applicationType: FIRST_HOME,
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
 * User class to decorate the simple user examples.
 * @extends Example
 * @inner
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

  get propertyValue() {
    return this.data.propertyValue;
  }

  get mortgageAmount() {
    return this.data.mortgageAmount;
  }

  get termLengthYears() {
    return this.data.termLengthYears;
  }
  /* eslint-enable require-jsdoc */
}

/**
 * The UsersCollection class, extending ExamplesCollection.
 * @extends ExamplesCollection
 * @inner
 */
class UsersCollection extends ExamplesCollection {
  /**
   * Create an ExamplesCollection of 'users'.
   */
  constructor() {
    super('users', User.decorate(USER_EXAMPLES));
  }
}

/**
 * The exported UserCollection instance
 * @constant {UsersCollection}
 */
const usersCollection = new UsersCollection();
export default usersCollection;
