/*jshint -W030 */
var expect = require('chai').expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Context = require('../../src/Context.js');
var App = require('../../src/App.jsx');

describe('Application Component', function() {
  var instance = TestUtils.renderIntoDocument(
    React.createElement(App, {
      context: Context.create()
    })
  );

  it('has correct context', function() {
    var instanceCtx = instance.props.context;
    expect(instanceCtx.actions).to.not.be.undefined;
    expect(instanceCtx.stores).to.not.be.undefined;
  });

  it('renders correctly', function() {
    expect(instance.getDOMNode()).to.not.be.undefined;
  });
});
