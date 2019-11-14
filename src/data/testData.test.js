/**
 * Tests for the TestData class.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off
*/

import { expect } from 'chai';

import TestData from './testData';

describe('TestData class', function() {
  it('contains the expected data.', function() {
    const dataClassName = 'data class name';
    const type1 = [1, 2, 3];
    const type2 = { hello: 'hello' };
    const exampleData = { type1, type2 };
    const data = new TestData(dataClassName, exampleData);

    expect(data.dataClass).to.equal(dataClassName);
    expect(data.types).to.include.all.keys('type1', 'type2');
    expect(data.getByType('type1')).to.equal(type1);
    expect(data.getByType('type2')).to.equal(type2);
  });

  it('throws an error when an unknown type is requested.', function() {
    const dataClassName = 'animals';
    const exampleData = {
      dog: 'woof',
      cat: 'feed me',
    };
    const data = new TestData(dataClassName, exampleData);

    expect(() => data.getByType('elephant'))
      .to.throw(TypeError)
      .with.property('message')
      .to.be.a('string')
      .that.includes('dog')
      .that.includes('cat');
  });
});
