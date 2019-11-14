/**
 * Singleton user data object.
 */

import TestData from './testData';

const DATA_CLASS = 'user';

const TYPES = {
  typical: {
    existingCustomer: false,
    changingLender: true,
    porpertyValue: 300000,
    mortgageAmount: 150000,
    currentTermLengthYears: 30,
  },
};


const userData = new TestData(DATA_CLASS, TYPES);
export default userData;
