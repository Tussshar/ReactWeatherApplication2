var React = require('React');
var WeatherForm = require('WeatherForm');
var WeatherMessage= require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {
        // Creating new variable to access 'this' inside 'then' function.
        var that = this;

        debugger;
        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        },
        function(errorMessage) {
            that.setState({
                location: "",
                temp: "",
                isLoading: false
            });
            alert(errorMessage);
        });
    },
    render: function() {
        var {isLoading, location, temp} = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;