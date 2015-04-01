/** @jsx React.DOM */
var React = require('react');

var Board = React.createClass({
  render: function() {
    var board = this.props.board.toJS();
    var rows = board.map((row, rowIndex) =>
      <tr key={[rowIndex]}>
        {row.map((column, columnIndex) =>
          <td key={[rowIndex, columnIndex]} data-number={column.number}>
            {column.number}
          </td>
        )}
      </tr>
    );

    return (
      <table className="threes__board">{rows}</table>
    );
  }
});

module.exports = Board;
