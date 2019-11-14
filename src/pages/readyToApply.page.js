/* eslint require-jsdoc: off, max-len: off, lines-between-class-members: off */

import navigationSection from './navigation.section';

const REMORTGAGE_HEADER_TEXT = 'Start your Remortgage application';

/**
 * Page object for the default URL page.
 */
class ReadyToApplyPage {
  get pageHeadingEl() { return $('#pageBody h1'); }

  /**
   * Mix in the navigation section.
   */
  constructor() {
    this.url = '/products/mortgages/remortgage-to-nationwide/ready-to-apply';
    this.navigation = navigationSection;
  }

  /**
   * Open the page directly.
   */
  open() {
    browser.url(this.url);
  }

  isRemortgagePage() {
    this.pageHeadingEl.waitForDisplayed();
    const pageHeaderText = this.pageHeadingEl.getText();
    return pageHeaderText === REMORTGAGE_HEADER_TEXT;
  }
}

const readyToApplyPage = new ReadyToApplyPage();
export default readyToApplyPage;
