var Bacon = require('baconjs');

var actions = function() {
  return {
    /**
    * Start a new game
    */
    createBoard: new Bacon.Bus()
  };
};

exports.create = actions;
