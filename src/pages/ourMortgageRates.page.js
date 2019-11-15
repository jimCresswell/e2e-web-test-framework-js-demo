import navigationSection from './navigation.section';

/**
 * Page object for the default URL page.
 */
class OurMortgageRatesPage {
  /* eslint-disable require-jsdoc, lines-between-class-members, max-len */
  get hasNationwideMortgage() { return $('#selectorItemHaveNationwideMortgage0'); }
  get doesNotHaveNationwideMortgage() { return $('#selectorItemHaveNationwideMortgage1'); }
  get changingLender() { return $('#selectorItemNationwideMortgageTypeNo2'); }
  get propertyValue() { return $('#SearchPropertyValue'); }
  get mortgageAmount() { return $('#SearchMortgageAmount'); }
  get mortgageTerm() { return $('#SearchMortgageTerm'); }
  get findARateButton() { return $('button=Find a mortgage rate'); }

  get resultsHeader() { return $('h3*="mortgages for you"'); }
  get updatingOverlay() { return $('#updatingOverlay'); }

  get fixedRateCheck() { return ('#fixed'); }
  get withFeeCheck() { return ('#product-fee-fee'); }

  get newMortgageResultsContainer() { return $('#NewMortgageRateTables'); }
  get fixedMortgageResults() {
    return this.newMortgageResultsContainer
      .$$('ratesTableBody tr[data-product-name*="Fixed"]');
  }

  get fiveYrFixedResult() { return $('tr[data-product-name="5 yr  Fixed "]'); }

  // Selectors for chaining. Note these are selectors not elements.
  get moreDetailsSelector() { return '.toggleMoreDetails'; }
  get offerApplyButtonSelector() { return '.applyButton'; }
  /* eslint-enable require-jsdoc, lines-between-class-members, max-len */

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
   * @param  {TestData} user The user data
   */
  enterUserDetails(user) {
    // Has existing NW mortgage, yes/no.
    if (user.hasNationwideMortgage()) {
      this.hasNationwideMortgage.waitForDisplayed();
      this.hasNationwideMortgage.click();
    } else {
      this.doesNotHaveNationwideMortgage.waitForDisplayed();
      this.doesNotHaveNationwideMortgage.click();
    }

    // To do: replace with switch statement when other selectors implemneted.
    // Application type.
    if (user.isChangingLender()) {
      this.changingLender.waitForDisplayed();
      this.changingLender.click();
    } else {
      const type = user.data.applicationType;
      throw new TypeError(
        `Application type "${type}" is not implemented yet.`
      );
    }

    // Numeric values.
    // To do: may have to implement waiting for overlay for stability.
    this.propertyValue.setValue(user.data.porpertyValue);
    this.mortgageAmount.setValue(user.data.mortgageAmount);
    this.mortgageTerm.setValue(user.data.termLengthYears);

    // Request offers.
    this.findARateButton.waitForClickable();
    this.findARateButton.click();
  }

  /**
   * Enter the user's mortgage preferences.
   *
   * To do: remodel as per /README.md#alternative-domain-modelling
   * @param  {TestData} mortgage Mortgage data including user preferences.
   */
  enterMortgagePreferences(mortgage) {
    this.resultsHeader.waitForDisplayed();

    if (mortgage.isFixed()) {
      this.fixedRateCheck.click();
    } else {
      /* eslint-disable prefer-destructuring */
      const type = mortgage.data.preferences.type;
      /* eslint-enable prefer-destructuring */
      throw new TypeError(
        `Mortgage type "${type}" is not implemented yet.`
      );
    }
  }

  /**
   * Get a list of mortgage offer names from the UI.
   * @return {Array} A list of names.
   */
  getOfferNames() {
    console.log('get offer names');
    return ['not', 'real', 'offers'];
  }

  /**
   * Start the application for the preferred offer type.
   * @param  {String} offerPreference Preferred offer type description.
   */
  startApplication(offerPreference) {
    console.log('start application for ' + offerPreference);
  }
}

const ourMortgageRatesPage = new OurMortgageRatesPage();
export default ourMortgageRatesPage;
