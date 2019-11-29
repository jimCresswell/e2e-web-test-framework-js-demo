/**
 * A collection of examples to be used as test data.
 *
 * The examples can be a simple object literal
 * or wrapped in a class extending Example.
 */
class ExamplesCollection {
  /**
   * Define the test data at instantiation.
   *
   * @param {string} collectionName The collection ID.
   * @param {Object[]|Example[]} examplesArray The examples data.
   */
  constructor(collectionName, examplesArray) {
    this.collectionName = collectionName;

    if (!Array.isArray(examplesArray) || examplesArray.length < 1) {
      throw new TypeError(
        `examplesArray must be a non-empty Array, receiced "${examplesArray}"`
      );
    }

    // Array to "map" to make lookups by name simpler.
    const examplesMap = {};
    examplesArray.forEach((example) => {
      examplesMap[example.exampleName] = example;
    });

    this.examples = examplesMap;
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
