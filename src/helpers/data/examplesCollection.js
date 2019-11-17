/**
 * A collection of examples to be used as test data.
 */
class ExamplesCollection {
  /**
   * Define the test data at instantiation.
   * @param {String} collectionName The broad type of data, e.g. user, icecream.
   * @param {Object} examples Examples of specific instances of the type.
   */
  constructor(collectionName, examples) {
    this.collectionName = collectionName;
    this.examples = examples;
    this.currentExample = null;
  }

  /**
   * List the available types.
   * @return {Array}  List of available types.
   */
  getExampleNames() {
    return Object.keys(this.examples);
  }

  /**
   * Get an individual example.
   * Spaces in the exampleName argument will be replaced with underscores.
   *
   * @param  {String} exampleName A key identifying the example.
   * @return {Example}          The test data.
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
