/** @jsx React.DOM */
/*jshint expr: true*/
var expect = require('chai').expect;
var store = require('../../../src/stores/ThreesStore')();

describe('ThreesStore', function() {

  it('generates the board correctly', function() {
    var board = store.generateBoard();
    var jsBoard = board.toJS();

    expect(jsBoard.length).to.equal(4);
    expect(jsBoard[0].length).to.equal(4);
    expect(jsBoard[0][0].id).to.be.defined;
    expect(jsBoard[0][0].number).to.be.greaterThan(-1);

    expect(
      board
      .flatten(1)
      .filter(tile => tile.get('number') > 0)
      .toJS()
      .length
    ).to.equal(9);

    expect(
      board
      .flatten(1)
      .filter(tile => tile.get('number') === 3)
      .toJS()
      .length
    ).to.be.lessThan(5);
  });

});
