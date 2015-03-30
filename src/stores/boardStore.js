/** @jsx React.DOM */
var Immutable = require('immutable');
var Bacon = require('baconjs');
var shuffle = require('../util/shuffle');

const deck = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];

var createTile = (number) => Immutable.Map({
  id: (Math.floor(Math.random() * 999999)),
  number: number
});

var createBoard = function () {
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

  var tiles = emptyTiles
    .merge(numberedTiles)
    .sort()
    .toArray();

  var row = (row) => Immutable.Range(0, 4)
    .map(column => tiles[column + (row * 4)]);

  var newBoard = Immutable.Range(0, 4)
    .map(row)
    .toList();

  return newBoard;
};

exports.create = function(actions) {
  var board = Bacon.update(
    createBoard(),
    actions.createBoard, createBoard
  );

  return {
    getBoard: board
  };
};
