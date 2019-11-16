/**
 * Tests for the TestData class.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off
*/

import { expect } from 'chai';

import ExamplesCollection from './examplesCollection';

describe('ExamplesCollection class', function() {
  describe('contains', function() {
    before(function() {
      this.collectionName = 'A type of thing';
      this.example1 = [1, 2, 3];
      this.example2 = { hello: 'hello' };
      const exampleData = {
        example1: this.example1,
        example2: this.example2,
      };
      this.examples = new ExamplesCollection(this.collectionName, exampleData);
    });

    it('the expected overall examples type name.', function() {
      expect(this.examples.getName()).to.equal(this.collectionName);
    });

    it('the expected individual example names.', function() {
      expect(this.examples.getExampleNames())
        .to.deep.equal(['example1', 'example2']);
    });

    it('the expected individual examples.', function() {
      expect(this.examples.setCurrentExample('example1').data)
        .to.equal(this.example1);
      expect(this.examples.setCurrentExample('example2').data)
        .to.equal(this.example2);
    });
  });

  describe('throws an error', function() {
    it('when an unknown type is requested.', function() {
      const dataClassName = 'animals';
      const exampleData = {
        dog: 'woof',
        cat: 'feed me',
      };
      const examples = new ExamplesCollection(dataClassName, exampleData);

      expect(() => examples.setCurrentExample('elephant'))
        .to.throw(TypeError)
        .with.property('message')
        .to.be.a('string')
        .that.includes('dog')
        .that.includes('cat');
    });

    // Note: the point of the refactor is to get rid of this necessity.
    it('when checkExampleIsSet is called when no example set', function() {
      const dataTypeName = 'A different type of thing';
      const examples = new ExamplesCollection(dataTypeName, { example1: 'a' });
      expect(() => examples.checkExampleIsSet()).to.throw(TypeError);
    });
  });
});
