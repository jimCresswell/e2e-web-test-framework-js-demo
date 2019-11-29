/**
 * Exports a single instance of UsersCollection.
 *
 * This module defines classes for both individual and collections of users,
 * extending the base Example and ExamplesCollection classes.
 *
 * @module usersCollection
 */

import User from './user';
import ExamplesCollection from '../../helpers/data/examplesCollection';

/**
 * User data examples to be wrapped in an ExamplesCollection instance.
 * @constant {Example[]}
 */
const USER_EXAMPLES = [
  new User({
    exampleName: '_test',
    hasNationwideMortgage: false,
    applicationType: User.FIRST_HOME,
    propertyValue: 1,
    mortgageAmount: 2,
    termLengthYears: 3,
  }),
  new User({
    exampleName: 'remortgaging',
    hasNationwideMortgage: false,
    applicationType: User.CHANGING_LENDER,
    propertyValue: 300000,
    mortgageAmount: 150000,
    termLengthYears: 30,
  }),
];


/**
 * The exported UserCollection instance
 * @constant {UsersCollection}
 */
const usersCollection = new ExamplesCollection('users', USER_EXAMPLES);
export default usersCollection;
