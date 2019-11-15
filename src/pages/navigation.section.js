/**
 * The shared navigation section.
 */
class NavigationSection {
  /* eslint-disable require-jsdoc */
  get navMenu() { return $('#NavMenu'); }

  get mortgagesNav() { return $('#MortgagesNavItem'); }

  get newMortgageRatesNav() {
    return this.mortgagesNav
      .$('nav[aria-label="New mortgage customers"]')
      .$('=Mortgage rates');
  }
  /* eslint-enable require-jsdoc */

  /**
   * Navigate to the new mortgages rates page.
   *
   * Note that navigation element behaviour changes with viewport width.
   */
  goToNewMortgageRates() {
    if (browser.getWindowSize().width < 1024) {
      this.navMenu.waitForDisplayed();
      this.navMenu.click();

      this.mortgagesNav.waitForDisplayed();
      this.mortgagesNav.click();

      this.newMortgageRatesNav.waitForDisplayed();
      this.newMortgageRatesNav.click();
    } else {
      throw new TypeError('Broad viewport navigation not implemented yet.');
    }
  }
}

const navigationSection = new NavigationSection();
export default navigationSection;
