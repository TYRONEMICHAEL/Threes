/** @jsx React.DOM */
var React = require('react/addons');

var App = React.createClass({
  propTypes: {
    context: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className="threes"></div>
    );
  }
});

module.exports = App;
