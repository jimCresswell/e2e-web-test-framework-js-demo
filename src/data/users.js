/**
 * Singleton user data object.
 */

import TestData from './testData';

const DATA_CLASS = 'user';

const CHANGING_LENDER = 'changing lender';

const TYPES = {
  remortgaging: {
    hasNationwideMortgage: false,
    applicationType: CHANGING_LENDER,
    porpertyValue: 300000,
    mortgageAmount: 150000,
    termLengthYears: 30,
  },
};

const userData = new TestData(DATA_CLASS, TYPES);
userData.hasNationwideMortgage = function hasNationwideMortgage() {
  if (this.data === null) this.throwTypeError();
  return this.data.hasNationwideMortgage;
};
userData.isChangingLender = function isChangingLender() {
  if (this.data === null) this.throwTypeError();
  return this.data.applicationType === CHANGING_LENDER;
};


export default userData;
