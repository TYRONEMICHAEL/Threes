/*jshint -W030 */
var expect = require('chai').expect;
var actions = require('../../../src/actions/ThreesActions');

describe('ThreesActions', function() {

  it('has the correct number of actions and has the correct defined actions', function() {
    expect(Object.keys(actions).length).to.equal(1);
    expect(actions.start).to.be.defined;
  });

});
