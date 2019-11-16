/**
 * A single example to be used as test data.
 *
 * This class is intended to be subclassed.
 */
class Example {
  /**
   * Mixin the properties from an example object literal to this Example object.
   * @param {[type]} exampleName [description]
   * @param {[type]} example     [description]
   */
  constructor(exampleName, example) {
    Object.entries(example).forEach((property) => {
      const [key, value] = property;
      this[key] = value;
      this.exampleName = exampleName;
    });
  }

  /**
   * Decorate a collection examples by turning them into `Example` objects.
   *
   * The methods for decoration come from subclasses of Example,
   * see e.g. the User class src\examples\users.js .
   * @param  {Object} examples Object literal examples.
   * @return {Object}          [description]
   */
  static decorate(examples) {
    const decoratedExamples = {};
    Object.entries(examples).forEach((example) => {
      const [name, properties] = example;
      decoratedExamples[name] = new this(name, properties);
    });
    return decoratedExamples;
  }
}

export default Example;
