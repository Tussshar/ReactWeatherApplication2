var React = require('react');
var {Link, IndexLink} = require('react-router');

/*var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Nav component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    );
  }
});
*/

var Nav = (props) => {
    return (
      <div>
        <h2>Nav component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    )
  };
  module.exports = Nav;

/*
Our navigation will work even if we use Link intead of Index link for Weather
But if we use Link for root component then even if about or examples are clicked, 
the props for weather will remain active.
*/