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

import users from './users';

describe('Users instance', function() {
  before(function() {
    this.user = users.setCurrentExample('_test');
  });

  it('has a property value', function() {
    expect(this.user.currentExample.propertyValue).to.not.be.undefined;
  });

  it('has method getApplicationType', function() {
    expect(this.user.currentExample.getApplicationType).to.not.be.undefined;
  });
});
