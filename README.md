# WDIO and Cucumber Test Demo
[![Build Status](https://travis-ci.org/jimCresswell/e2e-web-test-framework-demo.svg?branch=master)](https://travis-ci.org/jimCresswell/e2e-web-test-framework-demo)
[![Coverage Status](https://coveralls.io/repos/github/jimCresswell/e2e-web-test-framework-demo/badge.svg?branch=master)](https://coveralls.io/github/jimCresswell/e2e-web-test-framework-demo?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/8a0948209bbb1cbe1222/maintainability)](https://codeclimate.com/github/jimCresswell/e2e-web-test-framework-demo/maintainability)
[![dependencies Status](https://david-dm.org/jimCresswell/e2e-web-test-framework-demo/status.svg)](https://david-dm.org/jimCresswell/e2e-web-test-framework-demo)
[![devDependencies Status](https://david-dm.org/jimCresswell/e2e-web-test-framework-demo/dev-status.svg)](https://david-dm.org/jimCresswell/e2e-web-test-framework-demo?type=dev)
[![Vulnerabilities Analysis](https://snyk.io/test/github/jimCresswell/e2e-web-test-framework-demo/badge.svg?targetFile=package.json)](https://snyk.io/test/github/jimCresswell/e2e-web-test-framework-demo?targetFile=package.json)

End-to-end JavaScript web testing demo using [WebdriverIO](https://webdriver.io/) with [Cucumber](https://cucumber.io/).

The feature files are [here](src/features), written in a [Specification by Example](https://gojko.net/books/specification-by-example/) style. The step definitions are [here](src/steps). The data for each example used in the scenarios are in the [examples directory](src/examples), in `*Collection` modules and wrapped in test data classes.

The code design favours being explicit over brevity. This helps in mixed experience teams, particularly where people with some test automation experience are being trained in software engineering. The code is also quite defensive for the same reason, for instance adding test data which takes browser interactions down an unsupported path will throw an instructive error.

Page interactions use the `page object` pattern with additional reusable page sections.

## Usage

 * Install `yarn install` or `npm install`.
 * Run the external service tests `yarn start` or `npm start`.
 * Generate and open the service test report `yarn report` or `npm run report`.
 * Run unit tests
   * once with coverage stats `yarn test` or `npm test`.
   * once for a CI environment with [Coveralls](https://coveralls.io/) reporting `yarn test:ci` or `npm test:ci`.
   * continuously on file change `yarn test:watch` or `npm test:watch`.
 * Generate the JSDoc HTML files in the `docs` directory `yarn docs` or `npm run docs`.


## To do

### Improvements

  * Consider enforcing key correctness on objects passed to `User` and `Mortgage` constructors.
  * Implement a workaround for `@pending` tags on example groups in features (see the `@cleanSlate` tag code in wdio.conf.js for an example) and create a PR to add the functionality to CucumberJS.
  * Add further test data functionality such as random data generation.
  * Implement support for differing navigation section behaviour for more viewport widths.

#### Alternative Domain Modelling

End-to-end tests specifically model user interactions rather than e.g. UI design. The current model splits data about the user, user reaction to the presented options, and expected returned system state (mortgage offers) between the `users` and `mortgages` objects.

Consider having test steps defer to a `User` object, which then interacts with the `Page` objects. That would resolve the design tension where some user interactions are modelled in the step definitions but the page objects also contain information on how to react to different types of user. The domains would then be the `User` which knows about its own information and preferences, and the service composed of `Pages` it is interacting with. Any decisions on what interactions to carry out based on `Page` content would belong to the `User`. A `System` domain can contain any expected system data that doesn't belong to a `Page`, e.g. a returned list of mortgage rates that appears in the UI but might depend on a datastore state which can change independently of the version of the system under test.


## Notes on Testing

### Cucumber and WebDriver as a Test Framework

Cucumber with WebDriver is an amazing combination for creating living documentation of system behaviour that is guaranteed to be up to date because if not the continuous integration system will reject those changes (fail those "tests"). If carefully structured and properly displayed the features become an amazing resource for developing shared understanding between engineering and business strategy teams.

However, Cucumber does not lend itself to data driven testing, and WebDriver is *slow* and flaky, which negatively impacts productivity and morale. These tests should be strictly limited to high level descriptions of key user journeys executed against the whole system. Tests of the UI (rather than testing _through_ the UI) should be carried out at a lower level of the test pyramid against isolated front-ends with injected state, preferably in a way that allows them to run instantly on developer machines.

The point of automated tests is to reliably, rapidly and repeatably indicate when work is *done* (and, as a side-effect, when something breaks) and communicate that to the appropriate audience in appropriately short timescales.

In the case of these high level tests we are checking that we are providing the services to the user that we intended to (given assumptions that need to be verified with user labs etc), and those results are relevant to the entire product team and are necessarily quite slow. Checks on engineering quality are very different and should be in a format that suits the engineers, run against the minimum possible amount of system (e.g. one microservice, one logical component, one module or class), run very frequently (e.g. on file-change, on commit, on merge-request), reported in a format suitable for the engineers, and reported *rapidly*. Some tests need to run against a production-like environment to be meaningful e.g. user-facing-performance tests, however in those cases more realistic information may be available through ensuring proper production logs exist and carrying out data analysis.

### Automating the Manual Test Suite

Do not do this. The feature files will read like lists of instructions, be expensive to maintain and require considerable effort to determine what "failures" actually mean. Instead use the intentions of the manual tests to feed into the creation of the living documentation. This will also free people carrying out manual testing from tedious, repetitive work, allowing them to focus on their subjective expectations and experience of the system, which are crucial to user satisfaction and which _cannot be automated_.

### Test Code Quality and Lifecycle

Well-written tests should check behaviour not implementation, which means they may be around a lot longer than any given implementation of the system under test. Because of that the quality of the test code should be _at least as good_ as the quality of product code. Moderate product code can be sufficient if it passes a comprehensive test suite, bad test code will destroy velocity and morale.

### System and Test Versioning

End-to-end tests should be versioned with (have the same lifecycle as) the system they are testing. For monoliths this is easy, put the tests in the same repository. For microservices the tests should be live with the code that determines which collection of microservices is deployed. If there is no code for determining which microsystems are deployed then the system as an emergent whole has no version, which makes it impossible to deterministically test its behaviour. In this case if the high-level behaviour changes slowly it might be reasonable to keep the tests in step manually, but ideally when specifying behaviour we should be able to _precisely_ say what we are testing the behaviour of.
