/** @jsx React.DOM */
var React = require('react/addons');
var Board = require('./components/Board.jsx');
var Bacon = require('baconjs');

var App = React.createClass({
  propTypes: {
    context: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    var stores = this.props.context.stores;
    var initialState;

    this.streamTemplate = Bacon.combineTemplate({
      board: stores.board.getBoard
    });

    this.streamTemplate.onValue((state) => initialState = state);

    return initialState;
  },

  componentDidMount: function() {
    this.streamTemplate.onValue(state => this.setState(state));
  },

  render: function() {
    var actions = this.props.context.actions;

    return (
      <div className="threes__app">
        <Board actions={actions} board={this.state.board} />
        <button ref='restartBtn' onClick={this.restart}>Restart</button>
      </div>
    );
  },

  restart: function() {
    this.props.context.actions.board.createBoard.push();
  }
});

module.exports = App;
