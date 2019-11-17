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
    this.data = {};
    Object.entries(example).forEach((property) => {
      const [key, value] = property;
      this.data[key] = value;
      this.data.exampleName = exampleName;
    });
  }

  /**
   * Get the name of the individual example.
   * @return {String} The example name.
   */
  get exampleName() {
    return this.data.exampleName;
  }

  /**
   * Decorate a collection examples by turning them into `Example` objects.
   *
   * Note the Proxy functionality that throws a TypeError if either
   * a non-existent property is accessed or a property with a value
   * of `undefined`. This prevents missing properties or typos in
   * test data properties causing `undefined` to be passed to
   * browser interaction code.
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
      const decoratedExample = new this(name, properties);

      // Wrap the decorated example in a proxy object that throws
      // a type error if the example property is undefined.
      const decoratedExampleProxy = new Proxy(decoratedExample, {
        get: function get(target, prop) {
          if (target[prop] === undefined) {
            throw new TypeError(
              /* eslint-disable max-len */
              `Property "${prop}" of object type "${target.constructor.name}" is undefined.`
              /* eslint-enable max-len */
            );
          }
          /* eslint-disable prefer-rest-params */
          return Reflect.get(...arguments);
          /* eslint-enable prefer-rest-params */
        },
      });

      decoratedExamples[name] = decoratedExampleProxy;
    });
    return decoratedExamples;
  }
}

export default Example;
