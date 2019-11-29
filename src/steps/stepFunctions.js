/**
 * The functions bound to the Cucumber step definitions.
 * <br /><br />
 * Uses example data collections {@link module:usersCollection}
 * and {@link module:mortgagesCollection}.
 * <br /><br />
 * Uses Page Objects {@link MainPage}, {@link OurMortgageRatesPage}
 * and {@link ReadyToApplyPage}.
 *
 * @module stepFunctions
 * @requires usersCollection
 * @requires mortgagesCollection
 */

import { assert } from 'chai';

import mainPage from '../pages/main.page';
import ourMortgageRatesPage from '../pages/ourMortgageRates.page';
import readyToApplyPage from '../pages/readyToApply.page';

import users from '../examples/users/usersCollection';
import mortgages from '../examples/mortgages/mortgagesCollection';

/**
* Set the viewport dimensions in the browser.
* @param {int} width  Target viewport width in pixels.
* @param {int} height Target viewport height in pixels.
*/
function setViewportDimensions(width, height) {
  browser.setWindowSize(width, height);
}

/**
* Open the main page then go to New Mortgage Rates page.
*/
function goToNewMortgageRates() {
  mainPage.open();
  mainPage.navigation.goToNewMortgageRates();
}

/**
* Set the screen to a medium width then navigate.
*
* Note: this is required because the navigation menu behaviour changes
* at various screen widths.
* @todo implement separate examples for different screen sizes.
*/
function goToNewMortgageRatesMediumScreen() {
  setViewportDimensions(900, 800);
  goToNewMortgageRates();
}

/**
* Enter user and mortgage details.
* @param  {string} userType     User ID.
* @param  {string} mortgageType Mortgage ID.
*/
function enterDetails(userType, mortgageType) {
  const user = users.getExample(userType);
  const mortgage = mortgages.getExample(mortgageType);

  ourMortgageRatesPage.enterUserDetails(user);
  ourMortgageRatesPage.enterMortgagePreferences(mortgage);
}

/**
* Check the displayed offers match the expected offers.
* @param  {string} mortgageType Mortgage ID
*/
function checkExpectedOffers(mortgageType) {
  const expectedOffers = mortgages
    .getExample(mortgageType)
    .expectedOffers
    .map((offer) => offer.toString());

  const actualOffers = ourMortgageRatesPage.getOfferNames();
  assert.deepEqual(expectedOffers, actualOffers, 'Offers should match.');
}

/**
* Given a preferred offer, start an application.
* @param  {string} mortgageType Mortgage ID.
*/
function startMorgageApplication(mortgageType) {
  const mortgage = mortgages.getExample(mortgageType);
  ourMortgageRatesPage.startApplication(mortgage.offerPreference);

  assert.isTrue(
    readyToApplyPage.isRemortgagePage(),
    'Should be on the "start your remortgage" page.'
  );
}

/**
 * Exports
 */
export {
  setViewportDimensions,
  goToNewMortgageRates,
  goToNewMortgageRatesMediumScreen,
  enterDetails,
  checkExpectedOffers,
  startMorgageApplication
};
