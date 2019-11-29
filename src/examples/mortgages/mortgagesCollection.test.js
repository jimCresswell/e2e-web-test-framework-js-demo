/**
 * Tests for the mortgagesCollection module.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off,
no-unused-expressions: off
*/

import { expect } from 'chai';

import mortgagesCollection from './mortgagesCollection';
import Mortgage from './mortgage';

describe('The mortgagesCollection', function() {
  it('can retrieve a mortgage by exampleName', function() {
    const mortgage = mortgagesCollection.getExample('_test');
    expect(mortgage).to.be.instanceof(Mortgage);
  });
});
