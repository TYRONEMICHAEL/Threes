/** @jsx React.DOM */
/*jshint -W030 */
var expect = require('chai').expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Context = require('../../../src/Context.js');
var Board = require('../../../src/components/Board.jsx');


describe('Board Component', function() {
  var boardInstance;

  beforeEach(function() {
    var ctx = Context.create();
    var boardStore = ctx.stores.board;

    boardStore.getBoard.onValue(function(newBoard) {
      boardInstance = TestUtils.renderIntoDocument(
        React.createElement(Board, {
          actions: ctx.actions,
          board: newBoard
        })
      );
    });
  });

  afterEach(function() {
    React.unmountComponentAtNode(boardInstance.getDOMNode());
  });

  it('has correct props', function() {
    expect(boardInstance).not.to.be.undefined;
    expect(boardInstance.props.actions).to.not.be.undefined;
    expect(boardInstance.props.board).to.not.be.undefined;
  });

  it('renders the board correctly', function() {
    var node = boardInstance.getDOMNode();
    var cells = Array.prototype.slice.call(node.getElementsByTagName('td'));
    var renderedTiles = cells.map((column) => parseInt(column.innerHTML, 10));
    var tiles = boardInstance.props.board
      .flatten(1)
      .map((tile) => tile.get('number'))
      .toJS();

    expect(JSON.stringify(tiles)).to.equal(JSON.stringify(renderedTiles));
  });
});
