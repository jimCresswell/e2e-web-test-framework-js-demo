/**
 * Bind the step functions to the Cucumber steps.
 *
 * The steps functions are defined separately in the
 * stepFunctions module to improve testing and reuse.
 * @module 'find-mortgage-rate.steps'
 * @requires cucumber
 * @requires stepFunctions
 */

import { Given, When, Then } from 'cucumber';

import {
  goToNewMortgageRatesMediumScreen,
  enterDetails,
  checkExpectedOffers,
  startMorgageApplication
} from './stepFunctions';

Given(
  /^I'm looking for information on new mortgages$/,
  goToNewMortgageRatesMediumScreen
);
When(
  /^I enter my details as a "(.*)" customer looking for a "(.*)" mortgage$/,
  enterDetails
);
Then(
  /^I am shown "(.*)" mortgage options$/,
  checkExpectedOffers
);
Then(
  /^I can start a "(.*)" mortgage application$/,
  startMorgageApplication
);
