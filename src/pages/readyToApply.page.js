/* eslint require-jsdoc: off, max-len: off, lines-between-class-members: off */

import PageObject from '../helpers/browser/pageObject';

import navigationSection from './sections/navigation.section';

const URL = '/products/mortgages/remortgage-to-nationwide/ready-to-apply';

const REMORTGAGE_HEADER_TEXT = 'Start your Remortgage application';

/**
 * Page object for the default URL page.
 */
class ReadyToApplyPage extends PageObject {
  get pageHeadingEl() { return $('#pageBody h1'); }

  /**
   * Mix in the URL and navigation section.
   */
  constructor() {
    super(URL, [navigationSection]);
  }

  isRemortgagePage() {
    this.pageHeadingEl.waitForDisplayed();
    const pageHeaderText = this.pageHeadingEl.getText();
    return pageHeaderText === REMORTGAGE_HEADER_TEXT;
  }
}

const readyToApplyPage = new ReadyToApplyPage();
export default readyToApplyPage;
