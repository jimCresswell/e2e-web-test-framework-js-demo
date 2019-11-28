/**
 * The singleton shared navigation section.
 */

import PageSection from '../../helpers/browser/pageSection';

const ID = 'navigation';

/**
 * The navigation page section used on multiple pages.
 * @extends PageSection
 */
class NavigationSection extends PageSection {
  /* eslint-disable require-jsdoc */
  constructor() {
    super(ID);
  }

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
    const { width } = browser.getWindowSize();
    if (width < 1024) {
      this.navMenu.waitForDisplayed();
      this.navMenu.click();

      this.mortgagesNav.waitForDisplayed();
      this.mortgagesNav.click();

      this.newMortgageRatesNav.waitForDisplayed();
      this.newMortgageRatesNav.click();
    } else {
      throw new TypeError(
        `Menu navigation is not yet implemented for viewport width: ${width}.`
      );
    }
  }
}

const navigationSection = new NavigationSection();
export default navigationSection;
