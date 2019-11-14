/**
 * Generic test data class.
 */
class TestData {
  /**
   * Define the test data at instantiation.
   * @param {String} dataClass [description]
   * @param {Object} types     [description]
   */
  constructor(dataClass, types) {
    this.dataClass = dataClass;
    this.types = types;
  }

  /**
   * List the available types.
   * @return {Array}  List of available types.
   */
  getTypes() {
    return Object.keys(this.types);
  }

  /**
   * Access the test data.
   * Spaces in the type argument will be replaced with underscores.
   * @param  {String} type A key identifying the test type.
   * @return {Object}          The test data.
   */
  getByType(type) {
    const typeNoSpaces = type.replace(/\s/g, '_');
    if (Object.prototype.hasOwnProperty.call(this.types, typeNoSpaces)) {
      return this.types[typeNoSpaces];
    }
    throw new TypeError(
      `Unsupported ${this.dataClass} type "${typeNoSpaces}".
      Available types are: ${this.getTypes()}`
    );
  }
}

export default TestData;
