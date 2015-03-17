/** @jsx React.DOM */
var Immutable = require('immutable');
var shuffle = require('../util/shuffle');
var deck = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];

var createTile = (number) => Immutable.Map({
  id: (Math.floor(Math.random() * 999999)),
  number: number
});

module.exports = function () {

  function generateBoard() {
    var shuffledDeck = Immutable.Seq(shuffle(deck))
      .take(9)
      .toArray();

    var emptyTiles = Immutable.Range(0, 16)
      .map(createTile.bind(null, 0))
      .toList();

    var numberedTiles = emptyTiles
      .take(9)
      .map((tile, index) => tile.set('number', shuffledDeck[index]))
      .toList();

    var tiled = emptyTiles
      .merge(numberedTiles)
      .sort()
      .toArray();

    var insertRow = (row) => Immutable.Range(0, 4)
      .map(column => tiled[column + (row * 4)]);

    var board = Immutable.Range(0, 4)
      .map(insertRow)
      .toList();

    return board;
  }

  return { generateBoard };
};

