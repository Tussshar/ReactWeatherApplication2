var axios = require('axios').default;
// Since axios@1.1.0 version, we need to use require('axios').default instead of require('axios).
// Or else it will throw an exception.
// axios library is used to call an api
// OPEN_WEATHER_MAP_URL is our base url which is going to be constant.
const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=640451c7f371d5c40ac0d95ed38354a7&units=imperial';

module.exports = {
    getTemp: function(location) {
    // When we enter London in text box, browser automatically converts it to London%20.
    // We fix this by using  encodeURIComponent.
      var encodedLocation = encodeURIComponent(location);
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; //  we are using back-tick here
      // When we use back-tick, we can use variable directly in the string.
  
      // axios.get makes call to the url and returns the result.
      // axios uses promises thats why we have .then here.
      // Second function of the promise is for exception.
      // First function of the promise is called when exception is not thrown.
      return axios.get(requestUrl).then(function(res) {
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      }, function(res) {
        throw new Error(res.data.message);
      });
    }
  }
  
  
  // 640451c7f371d5c40ac0d95ed38354a7
  //