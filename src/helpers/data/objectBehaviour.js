/**
 * A collection of proxies for modifying default Object behaviour.
 *
 * @module objectBehaviour
 */

const objectBehaviour = {
  /**
   * Proxy an object to throw an error if a non-existent property
   * or undefined value is accessed.
   * @function noUndefined
   * @param  {Object} object The object to modify.
   * @throws {TypeError}
   * @return {Object}        The passed object wrapped in a modifying proxy.
   */
  noUndefined(object) {
    return new Proxy(object, {
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
  },
};

export default objectBehaviour;
export const { noUndefined } = objectBehaviour;
