import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import mainPage from '../pages/main.page';
import userData from '../data/userData';

// It doesn't matter that this is `given` rather than `when`,
// the different step types only exist for human readability.
Given(/^I'm looking for mortgage information$/, () => {
  mainPage.open();
});

When(/^I enter my details as a "(.*)" customer$/, (userType) => {
  let user = userData.getUser(userType);
});

Then(/^I can see mortgage information$/, () => {
  // assert
});

Then(/^I can apply for a mortgage$/, () => {
  // assert
});
