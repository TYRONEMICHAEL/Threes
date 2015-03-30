/*jshint -W030 */
var expect = require('chai').expect;
var actions = require('../../../src/actions/BoardActions').create();

describe('Board Actions', function() {
  it('has the correct number of actions and has the correct defined actions', function() {
    expect(Object.keys(actions).length).to.equal(1);
    expect(actions.createBoard).to.not.be.undefined;
  });
});
