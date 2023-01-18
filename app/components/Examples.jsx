var React = require('React');

/*
var Examples = React.createClass({
  render: function() {
    return (
      <h3>Example component</h3>
    );
  }
});
*/
var Examples = (props) => {
    return (
      <div>
        <h3>Example component!</h3>
        <p>Welcome to examples page.</p>
      </div>
    )
};
  
module.exports = Examples;