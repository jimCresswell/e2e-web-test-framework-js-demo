/**
 * Base class for reusable page sections.
 */

/**
 * The base class for page sections that might be used within multiple pages.
 */
class PageSection {
  /**
   * PageSection constructor.
   * @param {String} id The section identifier, used when mixing into pages.
   */
  constructor(id) {
    if (id === undefined) {
      throw new TypeError('Page Sections must have an ID.');
    }
    if (typeof id !== 'string' || id.length < 1) {
      throw new TypeError(
        `Page section ids must be non-empty strings, received: "${id}"`
      );
    }
    this.id = id;
  }
}

export default PageSection;
