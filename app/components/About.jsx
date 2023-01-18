var React = require('React');

/*
var About = React.createClass({
  render: function() {
    return (
      <h3>About component</h3>
    );
  }
});
*/

// Using stateless functional component for above render function.
// Stateless function can be used for simple components only.

//var About = function(props) {
var About = (props) => {
    return (
        <div>
            <h3>About component</h3>
            <p>Welcome to About page!</p>
        </div>
    )
};
module.exports = About;