/**
 * Tests for the TestData class.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off,
no-unused-expressions: off
*/

import { expect } from 'chai';

import mainPage from './main.page';

describe('Main Page page object', function() {
  it('includes the navigation section.', function() {
    expect(mainPage.navigation.goToNewMortgageRates).to.exist;
  });
});
