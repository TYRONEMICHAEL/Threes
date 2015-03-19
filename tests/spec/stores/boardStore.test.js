/** @jsx React.DOM */
/*jshint expr: true*/
var expect = require('chai').expect;
var boardActions = require('../../../src/actions/boardActions').create();
var store = require('../../../src/stores/boardStore').create(boardActions);

describe('boardStore', function() {
  var immutableBoard;
  var board;

  beforeEach(function(done) {
    store.getBoard.onValue(function(newBoard) {
      immutableBoard = newBoard;
      board = immutableBoard.toJS();
      done();
    })();
  });

  it('generates the board correctly', function() {
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
    var idRef = board[0][0].id;
    boardActions.createBoard.push();
    expect(board[0][0].id).to.not.equal(idRef);
  });
});
