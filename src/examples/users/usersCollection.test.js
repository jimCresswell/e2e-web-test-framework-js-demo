/**
 * Tests for the Users class.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off,
no-unused-expressions: off
*/

import { expect } from 'chai';

import users from './usersCollection';

describe('Users instance', function() {
  before(function() {
    this.user = users.getExample('_test');
  });

  it('has a hasNationwideMortgage value', function() {
    expect(this.user.hasNationwideMortgage).to.be.false;
  });

  it('has an applicationType value', function() {
    expect(this.user.applicationType).to.equal('buying my first home');
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
