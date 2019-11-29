/**
 * Tests for the User class.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off,
no-unused-expressions: off
*/

import { expect } from 'chai';

import User from './user';

describe('Users instance', function() {
  before(function() {
    this.user = new User({
      exampleName: '_test',
      hasNationwideMortgage: false,
      applicationType: User.FIRST_HOME,
      propertyValue: 1,
      mortgageAmount: 2,
      termLengthYears: 3,
    });
  });

  it('has a hasNationwideMortgage value', function() {
    expect(this.user.hasNationwideMortgage).to.be.false;
  });

  it('has an applicationType value', function() {
    expect(this.user.applicationType).to.equal(User.FIRST_HOME);
  });

  it('has a isChangingLender value', function() {
    expect(this.user.isChangingLender).to.false;
  });

  it('has a propertyValue value', function() {
    expect(this.user.propertyValue).to.equal(1);
  });

  it('has a mortgageAmount value', function() {
    expect(this.user.mortgageAmount).to.equal(2);
  });

  it('has a termLengthYears value', function() {
    expect(this.user.termLengthYears).to.equal(3);
  });
});
