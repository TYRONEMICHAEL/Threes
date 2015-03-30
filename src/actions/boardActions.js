var Bacon = require('baconjs');

exports.create = function() {
  return {
    /**
    * Start a new game
    */
    createBoard: new Bacon.Bus()
  };
};

