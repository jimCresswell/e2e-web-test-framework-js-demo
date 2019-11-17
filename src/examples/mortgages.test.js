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

import mortgages from './mortgages';

describe('MortgageData instance', function() {
  it('can get an example by name', function() {
    const mortgage = mortgages.getExample('fixed_with_fee');
    expect(mortgage.isFixed).to.be.true;
  });
});
