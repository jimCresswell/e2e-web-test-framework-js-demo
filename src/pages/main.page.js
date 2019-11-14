import navigationSection from './navigation.section';

/**
 * Page object for the default URL page.
 */
class MainPage {
  /**
   * Mix in the navigation section.
   */
  constructor() {
    this.navigation = navigationSection;
  }

  /**
   * Open the page at the default URL.
   */
  open() {
    browser.url('/');
  }
}

const mainPage = new MainPage();
export default mainPage;
