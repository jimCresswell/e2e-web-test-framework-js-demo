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
  it('to throw if examplesArray is not a non-empty array', function() {
    expect(() => new ExamplesCollection('name', 'examples'))
      .to.throw(TypeError);
    expect(() => new ExamplesCollection('name', []))
      .to.throw(TypeError);
  });

  describe('instance contains', function() {
    before(function() {
      this.collectionName = 'A type of thing';
      this.example1 = [1, 2, 3];
      this.example1.exampleName = 'numbers';
      this.example2 = { hello: 'hello' };
      this.example2.exampleName = 'hi';
      const exampleData = [
        this.example1,
        this.example2,
      ];

      this.examples = new ExamplesCollection(this.collectionName, exampleData);
    });

    it('the expected overall examples type name.', function() {
      expect(this.examples.collectionName).to.equal(this.collectionName);
    });

    it('the expected individual example names.', function() {
      expect(this.examples.getExampleNames())
        .to.deep.equal(['numbers', 'hi']);
    });

    it('the expected individual examples.', function() {
      expect(this.examples.getExample('numbers'))
        .to.equal(this.example1);
      expect(this.examples.getExample('hi'))
        .to.equal(this.example2);
    });
  });

  describe('throws an error', function() {
    it('when an unknown type is requested.', function() {
      const dataClassName = 'animals';
      const exampleData = [
        { exampleName: 'dog', noise: 'woof' },
        { exampleName: 'cat', noise: 'feed me' },
      ];
      const examples = new ExamplesCollection(dataClassName, exampleData);

      expect(() => examples.getExample('elephant'))
        .to.throw(TypeError)
        .with.property('message')
        .to.be.a('string')
        .that.includes('dog')
        .that.includes('cat');
    });
  });
});
