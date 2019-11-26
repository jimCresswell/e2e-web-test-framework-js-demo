/**
 * The base pageObject class.
 */
class PageObject {
  /**
   * Constructor.
   * @param {String} url The URL for this page relative to the default base URL.
   */
  constructor(url) {
    this.url = url;

    // TO DO: mix in page sections.
  }

  /**
   * Open the page directly.
   */
  open() {
    browser.url(this.url);
  }
}

export default PageObject;
