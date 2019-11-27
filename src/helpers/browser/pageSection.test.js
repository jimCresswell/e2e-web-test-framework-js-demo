/**
 * Tests for the PageSection class.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off,
no-unused-expressions: off
*/


import { expect } from 'chai';

import PageSection from './pageSection';

describe('The PageSection base class', function() {
  it('must be constructed with a string ID.', function() {
    expect(() => new PageSection()).to.throw(TypeError);
    expect(() => new PageSection('')).to.throw(TypeError);
  });

  it('has an ID.', function() {
    const ID = 'anID';
    const section = new PageSection(ID);
    expect(section.id).to.equal(ID);
  });
});
