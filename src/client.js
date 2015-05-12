var React = require('react');
var App = require('./App.jsx');
var Context = require('./Context.js');

React.render(React.createElement(App, {
  context: Context.create()
}), document.getElementById('threes'));
