/**
 * Tests for the Mortgages class.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off,
no-unused-expressions: off
*/

import { expect } from 'chai';

import mortgageData from './mortgages';

describe('MortgageData instance', function() {
  it('can get data by type', function() {
    const mortgage = mortgageData.getByType('fixed_with_fee');
    expect(mortgage.isFixed()).to.be.true;
  });

  it('throws an error if type has not been set', function() {
    expect(mortgageData.isFixed).to.throw(TypeError);
  });
});
