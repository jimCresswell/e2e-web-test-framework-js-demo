import PageObject from '../helpers/browser/pageObject';

import navigationSection from './sections/navigation.section';

const URL = '/products/mortgages/remortgage-to-nationwide/ready-to-apply';

const REMORTGAGE_HEADER_TEXT = 'Start your Remortgage application';

/**
 * Page object for the "Ready to Apply" (for a remortgage) page.
 */
class ReadyToApplyPage extends PageObject {
  /* eslint-disable require-jsdoc */
  get pageHeadingEl() { return $('#pageBody h1'); }
  /* eslint-enable require-jsdoc */

  /**
   * Mix in the URL and navigation section.
   */
  constructor() {
    super(URL, [navigationSection]);
  }

  /**
   * Is this the remortgage application page?
   * @return {Boolean} true/false
   */
  isRemortgagePage() {
    this.pageHeadingEl.waitForDisplayed();
    const pageHeaderText = this.pageHeadingEl.getText();
    return pageHeaderText === REMORTGAGE_HEADER_TEXT;
  }
}

const readyToApplyPage = new ReadyToApplyPage();
export default readyToApplyPage;
