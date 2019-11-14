import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import mainPage from '../pages/main.page';
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

When(/^I enter my details as a "(.*)" customer looking for a "(.*)" mortgage$/,
  (userType, mortgageType) => {
  //const user = users.getByType(userType);
  //const mortgage = mortgages.getByType(mortgageType);
});

Then(/^I am shown "(.*)" mortgage options$/, (mortgageType) => {
  //const mortgage = mortgages.getByType(mortgageType);
  // assert
});

Then(/^I can apply for a mortgage$/, () => {
  // assert
});
