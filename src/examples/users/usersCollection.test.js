/**
 * Tests for the usersCollection module.
 */
/* eslint
prefer-arrow-callback: off,
func-names: off,
space-before-function-paren: off,
no-unused-expressions: off
*/

import { expect } from 'chai';

import usersCollection from './usersCollection';
import User from './user';

describe('The usersCollection', function() {
  it('can retrieve a user by exampleName', function() {
    const user = usersCollection.getExample('_test');
    expect(user).to.be.instanceof(User);
  });
});
