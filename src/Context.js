/** @jsx React.DOM */
var boardActions = require('./actions/boardActions');
var boardStore = require('./stores/boardStore');

exports.create = function() {
  var actions = {
    board: boardActions.create()
  };

  var stores = {
    board: boardStore.create(actions.board)
  };

  return { actions, stores };
};
