import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import mainPage from '../pages/main.page';
import userData from '../data/userData';
import mortgageData from '../data/mortgageData';

// It doesn't matter that this is `given` rather than `when`,
// the different step types only exist for human readability.
Given(/^I'm looking for mortgage information$/, () => {
  mainPage.open();
});

When(/^I enter my details as a "(.*)" customer looking for a "(.*)" mortgage$/, (userType, mortgageType) => {
  const user = userData.getUser(userType);
  const mortgage = mortgageData.getMortgage(mortgageType);
});

Then(/^I am shown "(.*)" mortgage options$/, (mortgageType) => {
  const mortgage = mortgageData.getMortgage(mortgageType);
  // assert
});

Then(/^I can apply for a mortgage$/, () => {
  // assert
});
