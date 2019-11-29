import { noUndefined } from './objectBehaviour';

/**
 * A single example to be used as test data.
 */
class Example {
  /**
   * Mixin the properties from an example object literal to this Example object.
   *
   * Note the Proxy functionality that throws a TypeError if either
   * a non-existent property is accessed or a property with a value
   * of `undefined`. This prevents missing properties or typos in
   * test data properties causing `undefined` to be passed to
   * browser interaction code.
   *
   * @param {Object} example     The example data in an object literal
   * @param {string} example.exampleName The example identifier
   */
  constructor(example) {
    const name = example.exampleName;
    if (typeof name !== 'string' || name.length < 1) {
      throw new TypeError(
        `Example name must be a non-empty string, received "${name}"`
      );
    }

    /**
     * Store the example data.
     * @type {Object}
     * @private
     * @todo Enforce privacy on the data object so it isn't misused.
     */
    this.data = example;

    // Replace any spaces in the example name with underscores.
    this.data.exampleName = name.replace(/\s/g, '_');

    // Wrap the example in a proxy object that throws a TypeError
    // if a non-existent or undefined example property is accessed.
    return noUndefined(this);
  }

  /**
   * Get the name of the individual example.
   * @return {String} The example name.
   */
  get exampleName() {
    return this.data.exampleName;
  }
}

export default Example;
