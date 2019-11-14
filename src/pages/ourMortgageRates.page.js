/* eslint require-jsdoc: off, max-len: off, lines-between-class-members: off */

import navigationSection from './navigation.section';

/**
 * Page object for the default URL page.
 */
class OurMortgageRatesPage {
  get hasNationwideMortgage() { return $('#selectorItemHaveNationwideMortgage0'); }
  get doesNotHaveNationwideMortgage() { return $('#selectorItemHaveNationwideMortgage1'); }
  get changingLender() { return $('#selectorItemNationwideMortgageTypeNo2'); }
  get propertyValue() { return $('#SearchPropertyValue'); }
  get mortgageAmount() { return $('#SearchMortgageAmount'); }
  get mortgageTerm() { return $('#SearchMortgageTerm'); }
  get findARateButton() { return $('button="Find a mortgage rate"'); }

  get resultsHeader() { return $('h3*="mortgages for you"'); }
  get updatingOverlay() { return $('#updatingOverlay'); }

  get fixedRateCheck() { return ('#fixed'); }
  get withFeeCheck() { return ('#product-fee-fee'); }

  get newMortgageResultsContainer() { return $('#NewMortgageRateTables'); }
  get fixedResults() {
    return this.newMortgageResultsContainer
      .$$('ratesTableBody tr[data-product-name*="Fixed"]');
  }

  get fiveYrFixed() { return $('tr[data-product-name="5 yr  Fixed "]'); }

  // selector for toggle more detail button per result.
  // .toggleMoreDetails
  // Apply button per result
  // .applyButton

  /**
   * Mix in the navigation section.
   */
  constructor() {
    this.url = '/products/mortgages/our-mortgage-rates';
    this.navigation = navigationSection;
  }

  /**
   * Open the page directly.
   */
  open() {
    browser.url(this.url);
  }

  /**
   * Enter the user's details on the page.
   * @param  {Object} user The user data
   */
  enterUserDetails(user) {
    console.log(user);

    if (user.hasNationwideMortgage) {
      this.hasNationwideMortgage.waitForDisplayed();
      this.hasNationwideMortgage.click();
    } else {
      this.doesNotHaveNationwideMortgage.waitForDisplayed();
      this.doesNotHaveNationwideMortgage.click();
    }

    // To do: replace with switch statement when other selectors implemneted.
    if (user.applicationType === 'changing lender') {
      this.changingLender.waitForDisplayed();
      this.changingLender.click();
    } else {
      throw new TypeError(`Application type "${user.applicationType}" is not implemented yet.`);
    }
  }

  enterMortgagePreferences(preferences) {
    console.log(preferences);
  }

  getOfferNames() {
    console.log('get offer names');
    return ['not', 'real', 'offers'];
  }

  startApplication() {
    console.log('start application');
  }
}

const ourMortgageRatesPage = new OurMortgageRatesPage();
export default ourMortgageRatesPage;
