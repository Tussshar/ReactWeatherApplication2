var React = require('React');
var {Link} = require('react-router');

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
        <h1 className="text-center">Examples!</h1>
        <p>Here are few example locations to try out:</p>
        <ol>
            <li>
                <Link to='/?location=Santa Clara'>Santa Clara, CA</Link>
            </li>
            <li>
                <Link to='/?location=Mumbai'>Mumbai, Maharashtra, India</Link>
            </li>
        </ol>
      </div>
    )
};
  
module.exports = Examples;