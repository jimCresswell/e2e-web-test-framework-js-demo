/**
 * Tests for the Example class.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off,
no-unused-expressions: off
*/

import { expect } from 'chai';

import Example from './example';

describe('Example class', function() {
  it('throws if an invalid example name is provided', function() {
    expect(() => new Example({})).to.throw(TypeError);
  });

  it('replaces spaces in provided names with underscores', function() {
    const example = new Example({ exampleName: 'a name with spaces' });
    expect(example.exampleName).to.equal('a_name_with_spaces');
  });

  describe('extends a subclass that', function() {
    before(function() {
      /* eslint-disable require-jsdoc */
      class ExampleSubclass extends Example {
        get prop1() { return this.data.prop1; }
      }
      /* eslint-enable require-jsdoc */

      this.example = new ExampleSubclass({
        exampleName: 'animals',
        prop1: 'horse',
        prop2: 'fish',
        deliberatelyUndefined: undefined,
      });
    });

    it('preserves example names', function() {
      expect(this.example.exampleName).to.equal('animals');
    });

    it('makes example data available through getters', function() {
      expect(this.example.prop1).to.equal('horse');
    });

    it('throws on attempting to access non-existent properties', function() {
      expect(() => this.example.notAProp).to.throw(TypeError);
    });

    it('throws on attempting to access undefined properties', function() {
      expect(() => this.example.deliberatelyUndefined)
        .to.throw(TypeError);
    });
  });
});
