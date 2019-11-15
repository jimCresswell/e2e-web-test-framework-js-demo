import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';

import mainPage from '../pages/main.page';
import ourMortgageRatesPage from '../pages/ourMortgageRates.page';
import readyToApplyPage from '../pages/readyToApply.page';

import users from '../data/users';
import mortgages from '../data/mortgages';

// It doesn't matter that this is `given` rather than `when`,
// the different step types only exist for human readability.
Given(/^I'm looking for information on new mortgages$/, () => {
  // Force narrow viewport behavior.
  // To do: create different steps for different viewport widths.
  browser.setWindowSize(900, 800);

  mainPage.open();
  mainPage.navigation.goToNewMortgageRates();
});

When(
  /^I enter my details as a "(.*)" customer looking for a "(.*)" mortgage$/,
  (userType, mortgageType) => {
    const user = users.getByType(userType);
    const mortgage = mortgages.getByType(mortgageType);

    ourMortgageRatesPage.enterUserDetails(user);
    ourMortgageRatesPage.enterMortgagePreferences(mortgage);
  }
);

Then(/^I am shown "(.*)" mortgage options$/, (mortgageType) => {
  const expectedOffers = mortgages
    .getByType(mortgageType)
    .getExpectedOffers()
    .map((offer) => offer.toString());

  const actualOffers = ourMortgageRatesPage.getOfferNames();

  assert.deepEqual(expectedOffers, actualOffers, 'Offers should match.');
});

Then(/^I can start a "(.*)" mortgage application$/, (mortgageType) => {
  const mortgage = mortgages.getByType(mortgageType);
  const dataProductName = mortgage.getPreferredProductName();
  ourMortgageRatesPage.startApplication(dataProductName);

  assert.isTrue(
    readyToApplyPage.isRemortgagePage(),
    'Should be on the "start your remortgage" page.'
  );
});
