/**
 * Tests for the objectBehaviour module.
 *
 * Note that the access control only applies to the passed object,
 * nested objects are not affected and if their behaviour needs to
 * be modified they will need their own proxies.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off,
no-unused-expressions: off
*/

import { expect } from 'chai';

import { noUndefined } from './objectBehaviour';

describe('The objectBehaviour module', function() {
  before(function() {
    this.example = {
      thing1: 'aronia',
      thing2: 'kiwi',
      deliberatelyUndefined: undefined,
      nestedObject: {},
    };
  });

  describe('noUndefined function:', function() {
    before(function() {
      this.modifiedExample = noUndefined(this.example);
    });

    it(
      'allows access to existing properties',
      function() {
        expect(this.modifiedExample.thing1)
          .to.equal('aronia');
      }
    );

    it(
      'throws on attempting to access non-existent properties',
      function() {
        expect(() => this.modifiedExample.nonExistentProperty)
          .to.throw(TypeError);
      }
    );

    it(
      'throws on attempting to access properties with a value of undefined',
      function() {
        expect(() => this.modifiedExample.deliberatelyUndefined)
          .to.throw(TypeError);
      }
    );

    it(
      'does not affect nested objects',
      function() {
        expect(() => this.modifiedExample.nestedObject.notAProperty)
          .to.not.throw(TypeError);
        expect(this.modifiedExample.nestedObject.notAProperty)
          .to.be.undefined;
      }
    );
  });
});
