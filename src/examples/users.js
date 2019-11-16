/**
 * Singleton user test data examples.
 */

import ExamplesCollection from '../helpers/data/examplesCollection';

const DATA_CLASS = 'user';

const CHANGING_LENDER = 'changing lender';

const TYPES = {
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

const users = new ExamplesCollection(DATA_CLASS, TYPES);
users.hasNationwideMortgage = function hasNationwideMortgage() {
  this.checkExampleIsSet();
  return this.currentExample.hasNationwideMortgage;
};
users.isChangingLender = function isChangingLender() {
  this.checkExampleIsSet();
  return this.currentExample.applicationType === CHANGING_LENDER;
};


export default users;
