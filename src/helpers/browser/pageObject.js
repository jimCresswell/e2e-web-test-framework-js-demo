/**
 * The base pageObject class.
 */
class PageObject {
  /**
   * Constructor.
   * @param {String} url The URL for this page relative to the default base URL.
   * @param {Array} sections An optional array of page sections to mix in.
   */
  constructor(url, sections) {
    if (url === undefined) {
      throw new TypeError(
        'PageObject constructor called without passing a URL'
      );
    }
    this.url = url;

    // Mix in any provided page sections.
    if (sections !== undefined) {
      if (!Array.isArray(sections)) {
        throw new TypeError(
          `Sections must be provided as an Array, received: "${sections}"`
        );
      }
      /* eslint-disable no-restricted-syntax */
      for (const section of sections) {
        const { id } = section;
        if (id === undefined) {
          throw new TypeError('Sections must have an id property.');
        }
        if (this[id] !== undefined) {
          throw new TypeError(`Section with already used ID passed: "${id}"`);
        }
        this[id] = section;
      }
      /* eslint-enable no-restricted-syntax */
    }
  }

  /**
   * Open the page directly.
   */
  open() {
    browser.url(this.url);
  }
}

export default PageObject;
