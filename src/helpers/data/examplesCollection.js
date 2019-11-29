/**
 * A collection of examples to be used as test data.
 *
 * The examples can be a simple object literal
 * or wrapped in a class extending Example.
 *
 * @class
 * @abstract
 */
class ExamplesCollection {
  /**
   * Define the test data at instantiation.
   *
   * @param {string} collectionName The collection ID.
   * @param {Object|Example} examples The examples data.
   */
  constructor(collectionName, examples) {
    this.collectionName = collectionName;
    this.examples = examples;
  }

  /**
   * List the available types.
   * @return {string[]}  List of available types.
   */
  getExampleNames() {
    return Object.keys(this.examples);
  }

  /**
   * Get an individual example.
   * Spaces in the exampleName argument will be replaced with underscores.
   *
   * @param  {string} exampleName A key identifying the example.
   * @throws {TypeError}
   * @return {Object|Example}          The test data.
   */
  getExample(exampleName) {
    const exampleNameNoSpaces = exampleName.replace(/\s/g, '_');
    const exampleExists = Object.prototype.hasOwnProperty.call(
      this.examples, exampleNameNoSpaces
    );
    if (exampleExists) {
      return this.examples[exampleNameNoSpaces];
    }
    throw new TypeError(
      `Unsupported ${this.collectionName} example "${exampleNameNoSpaces}".
      Available examples are: ${this.getExampleNames()}`
    );
  }
}

export default ExamplesCollection;
