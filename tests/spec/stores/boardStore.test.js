/** @jsx React.DOM */
/*jshint expr: true*/
var expect = require('chai').expect;
var boardActions = require('../../../src/actions/BoardActions').create();
var store = require('../../../src/stores/BoardStore').create(boardActions);

describe('Board Store', function() {
  var immutableBoard;

  beforeEach(function() {
    store.getBoard.onValue(newBoard => immutableBoard = newBoard);
  });

  it('generates the board correctly', function() {
    var board = immutableBoard.toJS();

    expect(board.length).to.equal(4);
    expect(board[0].length).to.equal(4);
    expect(board[0][0].id).to.not.be.undefined;
    expect(board[0][0].number).to.be.greaterThan(-1);

    expect(
      immutableBoard
      .flatten(1)
      .filter(tile => tile.get('number') > 0)
      .size
    ).to.equal(9);

    expect(
      immutableBoard
      .flatten(1)
      .filter(tile => tile.get('number') === 3)
      .size
    ).to.be.lessThan(5);

    expect(
      immutableBoard
      .flatten(1)
      .filter(tile => tile.get('number') === 1)
      .size
    ).to.be.at.least(1);
  });

  it('creates a new board', function() {
    var board = immutableBoard.toJS();
    var idRef = board[0][0].id;
    var newBoard;

    boardActions.createBoard.push();
    newBoard = immutableBoard.toJS();
    expect(newBoard[0][0].id).to.not.equal(idRef);
  });
});
