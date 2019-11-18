# WDIO and Cucumber Test Demo

Demo using [WebdriverIO](https://webdriver.io/) with [Cucumber](https://cucumber.io/).

The feature files are [here](src/features), written in a [Specification by Example](https://gojko.net/books/specification-by-example/) style.


## Usage

 * Install `yarn install` or `npm install`.
 * Run the external service tests `yarn start` or `npm start`.
 * Generate and open the service test report `yarn report` or `npm run report`.
 * Run unit tests once with coverage stats `yarn test` or `npm test`.
 * Run unit tests continuously on file change `yarn test:watch` or `npm test:watch`.


## To do

### Improvements

  * Explore making `users` and `mortgages` into singleton classes which extend `ExamplesCollection`, and which contain inline `user` and `mortgage` classes respectively.
  * Abstract shared page object members and methods to a generic `PageObject` class.
  * Consider moving the step functionality wrapped by Cucumber into a separate file so it can be tested properly.
  * Implement a workaround for `@pending` tags on example groups in features (see the `@cleanSlate` tag code in wdio.conf.js for an example) and create a PR to add the functionality to CucumberJS.
  * Explicitly handle behaviour differences for narrow and wide viewports (e.g. the considerable differences in navigation section behaviour).

#### Alternative Domain Modelling

Because "end to end" testing of web services specifically models user interactions (rather than e.g. UI design), consider having test steps defer to a `User` object, which in turn interacts with the `Page` objects. That would resolve the design tension where some interactions are modelled in the step definitions, but the page objects also contain information on how to react to different types of user.

The domains would then be the `User` which knows about its own `UserInformation` (including all preferences), and the service composed of `Pages` it is interacting with. Any decisions on what interactions to carry out based on `Page` content would belong to the `User`.

There may be a need for a third `System` domain which contains expected results that don't belong to a `Page`. E.g. an expected page title belongs in the `Page` domain, whereas the details of a returned list of mortgage types and rates is not part of the UI but depends on both backend logic (possibly versioned with the rest of the SUT and tests) and datastore state (which can possibly change dynamically without a SUT code release) and so belongs in the `System` domain.


## Notes

### Cucumber and WebDriver as a Test Framework

Cucumber with WebDriver is an amazing combination for creating living documentation of system behaviour that is guaranteed to be up to date because if not the continuous integration system will reject those changes (fail those "tests"). If carefully structured and properly displayed the features become an amazing resource for developing shared understanding between engineering and business strategy teams.

However, Cucumber does not lend itself to data driven testing, and WebDriver is *slow* and flaky, which negatively impacts productivity and morale. These tests should be strictly limited to high level descriptions of key user journeys executed against the whole system. Tests of the UI (rather than testing _through_ the UI) should be carried out at a lower level against isolated front-ends with injected state, preferably in a way that allows them to run instantly on developer machines.

The point of automated tests is to reliably, rapidly and repeatably indicate when something is *done* (and, as a side-effect, when it breaks) and communicate that to the appropriate audience in an appropriate timescale.

In the case of these high level tests we are checking that we are providing the services to the user that we intended to (given assumptions that need to be verified with user labs etc), and those results are relevant to the entire product team and are necessarily quite slow. Checks on engineering quality are very different and should be in a format that suits the engineers, run against the minimum possible amount of system (e.g. one microservice, one logical component, one module or class), run very frequently (e.g. on file-change, on commit, on merge-request), reported in a format suitable for the engineers, and reported *rapidly*. Some tests need to run against a production-like environment to be meaningful e.g. user-facing-performance tests, however in those cases more realistic information may be available through ensuring proper production logs exist and carrying out data analysis.

### Automating the Manual Test Suite

Do not do this. The feature files will read like lists of instructions, be incredibly expensive to maintain and require considerable effort to determine what "failures" actually mean. Instead use the intentions of the manual tests to feed into the creation of the living documentation. This will also free people carrying out manual testing from tedious, repetitive work, allowing them to focus on their subjective expectations and experience of the system, which are crucial to user satisfaction but _cannot be automated_.

### Test Code Quality and Lifecycle

Well written high level tests should check behaviour and not implementation, which means they may be around a lot longer than any given implementation of the system they are testing. Because of that, quality of the test code should be _at least as good_ as the quality of product code. Moderate product code can be sufficient if it passes all the tests, bad test code will destroy velocity and morale.

### System and Test Versioning

High level "end-to-end" tests should be versioned with (have the same lifecycle as) the system as a whole. For monoliths this is easy, put the tests in the same repository. For microservices the tests should be live with the code that determines which collection of microservices is deployed. If there is no code for determining which microsystems are deployed then the system as an emergent whole has no version, which makes it impossible to deterministically test its behaviour. In this case if the high-level behaviour changes slowly it might be reasonable to keep the tests in step manually, but ideally when specifying behaviour we should be able to _precisely_ say what we are testing the behaviour of.
