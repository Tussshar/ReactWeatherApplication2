var React = require('React');

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var location = this.location.value;
        console.log(location);

        if (location.length > 0) {
            console.log(location);
            this.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref={(ref) => this.location = ref}/>
                    <button className="button expanded hollow">Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;

/**
 * Generally we would have written input tag as 
 * 
 * <input type="text" ref="location" placeholder="Enter city name" />
 * and would have accessed the location in onFormSubmit method as this.refs.location.value;
 * 
 * 
 * But React has no autobinding in ES6 classes, so we should define a function for ref 
 * to make it work and use this.location.value instead of this.refs.location.value
 */