var React = require('React');

/*var WeatherMessage = React.createClass({
  render: function() {
    var {temp, location} = this.props;
    var message = '';
    if (location.length > 0) {
      message = 'Weather in ';
    }
    return (
      <h4>It is {temp} in {location}</h4>
    );
  }
});
*/
//var WeatherMessage = (props) => {
var WeatherMessage = ({temp, location}) => {
    //var {temp, location} = props;
    var message = '';
    if (location.length > 0) {
        message = 'Weather in ';
    }
    return (
        <h4>It is {temp} in {location}</h4>
    );
};
      
module.exports = WeatherMessage;