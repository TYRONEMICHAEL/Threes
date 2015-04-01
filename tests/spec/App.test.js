/*jshint -W030 */
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Context = require('../../src/Context.js');
var App = require('../../src/App.jsx');

chai.use(sinonChai);

describe('Application Component', function() {
  // => http://stackoverflow.com/questions/24280428/stubbing-a-react-component-method-with-sinon
  var restartBtnSpy = sinon.spy(App.prototype.__reactAutoBindMap, 'restart');

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
    expect(instance.getDOMNode().getElementsByClassName('threes__board').length).to.equal(1);
  });

  it('generates a new board when the button restart is clicked', function() {
    var restartBtn = React.findDOMNode(instance.refs.restartBtn);
    var boardRef = instance.state.board.toJS();

    expect(restartBtnSpy).to.not.have.been.calledOnce;
    React.addons.TestUtils.Simulate.click(restartBtn);
    expect(restartBtnSpy).to.have.been.calledOnce;
    expect(JSON.stringify(instance.state.board.toJS()))
      .to.not.equal(JSON.stringify(boardRef));
  });
});
