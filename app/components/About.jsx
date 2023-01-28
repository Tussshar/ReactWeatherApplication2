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
             <h1 className="text-center">About component</h1>
            <p>
              This is a weather application built on React.
              I have built this for a complete React Webapp developer course.
            </p>
            <p>
              Here are some of the tools I used:
            </p>
            <ul>
              <li>
                <a href="https://reactjs.org/">React</a> - This was the 
                Javascript framwwork used.
              </li>
              <li>
                <a href="http://openweathermap.org">Open Weather Map</a> - I used Opne Weather Map
                to search for weather data by the city.
              </li>
            </ul>
        </div>
    )
};
module.exports = About;