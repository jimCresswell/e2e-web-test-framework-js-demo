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

describe('Example subclasses', function() {
  before(function() {
    this.simpleExamples = {
      example1: {
        prop1: 'horse',
        prop2: 'fish',
      },
      example2: {
        prop1: 'jam',
        prop2: 'France',
        deliberatelyUndefined: undefined,
      },
    };

    /* eslint-disable require-jsdoc */
    class ExampleSubClass extends Example {
      get prop1() { return this.data.prop1; }
    }
    /* eslint-enable require-jsdoc */

    this.decoratedExamples = ExampleSubClass.decorate(this.simpleExamples);
  });

  describe('can create decorated examples', function() {
    it('that preserve example names', function() {
      expect(this.decoratedExamples).to.have.all.keys('example1', 'example2');
    });

    it('that copies the simple examples to a data property', function() {
      /* eslint-disable prefer-destructuring */
      const example = this.decoratedExamples.example1;
      /* eslint-enable prefer-destructuring */
      expect(example.data).to.include(this.simpleExamples.example1);
    });

    it('that add example names within each example', function() {
      /* eslint-disable prefer-destructuring */
      const exampleName = this.decoratedExamples.example1.exampleName;
      /* eslint-enable prefer-destructuring */
      expect(exampleName).to.equal('example1');
    });

    it('that have the subclass getters', function() {
      /* eslint-disable prefer-destructuring */
      const prop1 = this.decoratedExamples.example1.prop1;
      /* eslint-disable prefer-destructuring */
      expect(prop1).to.equal('horse');
    });

    it(
      'that throw on attempting to access non-existent properties',
      function() {
        expect(() => this.decoratedExamples.example1.notAProp)
          .to.throw(TypeError);
      }
    );

    it(
      'that throw on attempting to access properties with a value of undefined',
      function() {
        expect(() => this.decoratedExamples.example2.deliberatelyUndefined)
          .to.throw(TypeError);
      }
    );
  });
});
