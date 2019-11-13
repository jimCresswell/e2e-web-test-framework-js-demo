/**
 * Page object for the default URL page.
 */
class MainPage {
  /**
   * Open the page at the default URL.
   */
  open() {
    browser.url('/');
  }

  /**
   * Accesor for main section.
   * @return {[type]} [description]
   */
  get mainPageBody() {
    return $('#index');
  }

  /**
   * Check the page has loaded.
   * @return {Boolean} Page load status.
   */
  hasLoaded() {
    return this.mainPageBody.isExisting();
  }
}

const mainPage = new MainPage();
export default mainPage;
