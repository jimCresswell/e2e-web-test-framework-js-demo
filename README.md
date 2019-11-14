# WDIO and Cucumber Test Demo

Demo using [WebdriverIO](https://webdriver.io/) with [Cucumber](https://cucumber.io/).

The feature files are [here](src\features), written in a [Specification by Example](https://gojko.net/books/specification-by-example/) style.

## Usage

 * Install `yarn install` or `npm install`.
 * Run the tests `yarn test` or `npm test`.
 * Generate and open the report `yarn report` or `npm run report`.

## To do

  * Explicitly handle behaviour differences for narrow and wide viewports.
  * Explore the data model domains for users and mortgages e.g.
    * which information belongs strictly to the user rather than mortgage type,
    * which information determines offered mortgage types,
    * which information affects offered rates but not types, etc.
