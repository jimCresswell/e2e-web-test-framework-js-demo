/**
 * Check the URL argument is valid.
 * @param  {string} url The URL string to validate.
 */
function validateUrl(url) {
  if (url === undefined) {
    throw new TypeError(
      'PageObject constructor called without passing a URL'
    );
  }
}

/**
 * Check the sections argument is valid.
 * @param  {Array} sections [description]
 */
function validateSections(sections) {
  if (!Array.isArray(sections)) {
    throw new TypeError(
      `Sections must be provided as an Array, received: "${sections}"`
    );
  }
}

/**
 * The base pageObject class.
 */
class PageObject {
  /**
   * Constructor.
   * @param {String} url The URL for this page relative to the default base URL.
   * @param {Array=} sections An optional array of page sections to mix in.
   */
  constructor(url, sections) {
    validateUrl(url);
    this.url = url;

    // If no sections were provided then return early.
    if (sections === undefined) {
      return this;
    }

    validateSections(sections);

    // Mix in any provided page sections.
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

  /**
   * Open the page directly.
   */
  open() {
    browser.url(this.url);
  }
}

export default PageObject;
