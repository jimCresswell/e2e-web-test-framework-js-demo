/**
 * Exports a single instance of UsersCollection.
 *
 * This module defines classes for both individual and collections of users,
 * extending the base Example and ExamplesCollection classes.
 *
 * @todo Consider replacing the decoration with instantiation in order to
 * enforce data types compliance and allow better documentation. Then
 * module can directly export an instance of ExamplesCollection without
 * subclassing it.
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
  /**
   * Does the user have a Nationwide mortgage?
   * @type {boolean}
   */
  get hasNationwideMortgage() {
    return this.data.hasNationwideMortgage;
  }

  /**
   * The user's application type.
   * @type {string}
   */
  get applicationType() {
    return this.data.applicationType;
  }

  /**
   * Is the user changing lender?
   * @type {boolean}
   */
  get isChangingLender() {
    return this.data.applicationType === CHANGING_LENDER;
  }

  /**
   * The value of the target property in GBP.
   * @type {int}
   */
  get propertyValue() {
    return this.data.propertyValue;
  }

  /**
   * The requested value of mortgage in GBP.
   * @type {int}
   */
  get mortgageAmount() {
    return this.data.mortgageAmount;
  }

  /**
   * The requested term length in years.
   * @type {int}
   */
  get termLengthYears() {
    return this.data.termLengthYears;
  }
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
