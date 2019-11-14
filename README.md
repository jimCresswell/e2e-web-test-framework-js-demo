# WDIO and Cucumber Test Demo

Demo using [WebdriverIO](https://webdriver.io/) with [Cucumber](https://cucumber.io/).

The feature files are [here](src/features), written in a [Specification by Example](https://gojko.net/books/specification-by-example/) style.

## Usage

 * Install `yarn install` or `npm install`.
 * Run the external service tests `yarn start` or `npm start`.
 * Generate and open the report `yarn report` or `npm run report`.
 * Run test code unit tests `yarn test` or `npm test`.

## To do

  * Implement page interaction methods for [mortgage rate search page](src/pages/ourMortgageRates.page.js).
  * Explicitly handle behaviour differences for narrow and wide viewports.
  * Implement rest of selectors on [mortgage rate search page](src/pages/ourMortgageRates.page.js).
  * Explore the data model domains for users and mortgages e.g.
    * which information belongs strictly to the user rather than mortgage type,
    * which information determines offered mortgage types,
    * which information affects offered rates but not types, etc.
