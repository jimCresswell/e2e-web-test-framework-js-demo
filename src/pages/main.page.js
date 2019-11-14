import navigationSection from './navigation.section';

/**
 * Page object for the default URL page.
 */
class MainPage {
  /**
   * Mix in the navigation section.
   */
  constructor() {
    this.url = '/';
    this.navigation = navigationSection;
  }

  /**
   * Open the page directly.
   */
  open() {
    browser.url(this.url);
  }
}

const mainPage = new MainPage();
export default mainPage;
