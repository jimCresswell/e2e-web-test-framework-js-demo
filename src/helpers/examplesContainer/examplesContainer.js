/**
 * Container for sets of examples to be used as test data.
 */
class ExamplesContainer {
  /**
   * Define the test data at instantiation.
   * @param {String} dataType The broad type of data, e.g. user, tree, icecream.
   * @param {Object} examples Examples of specific instances of the type.
   */
  constructor(dataType, examples) {
    this.dataType = dataType;
    this.examples = examples;
    this.data = null;
  }

  /**
   * Return the objects data type.
   * @return {String} The data type.
   */
  getType() {
    return this.dataType;
  }

  /**
   * List the available types.
   * @return {Array}  List of available types.
   */
  getExampleNames() {
    return Object.keys(this.examples);
  }

  /**
   * Access the test data.
   * Spaces in the exampleName argument will be replaced with underscores.
   *
   * To do: refactor to return an instance of the Example class and
   * rename back to getExample.
   * @param  {String} exampleName A key identifying the example.
   * @return {Object}          The test data.
   */
  setCurrentExample(exampleName) {
    const exampleNameNoSpaces = exampleName.replace(/\s/g, '_');
    const exampleExists = Object.prototype.hasOwnProperty.call(
      this.examples, exampleNameNoSpaces
    );
    if (exampleExists) {
      // Expose the specific example in the `data` field.
      this.data = this.examples[exampleNameNoSpaces];
      return this;
    }
    throw new TypeError(
      `Unsupported ${this.dataType} example "${exampleNameNoSpaces}".
      Available examples are: ${this.getExampleNames()}`
    );
  }

  /**
   * If a data accessor is called before a type is set throw an error.
   */
  checkExampleIsSet() {
    if (this.data === null) {
      throw new TypeError(
        'TestData accessor called before setting type with `getByType`'
      );
    }
  }
}

export default ExamplesContainer;
