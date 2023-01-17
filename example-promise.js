// Es6 promises examples

function getTempCallback(location, callback) {
    callback(undefined, 78);
    callback('City not found');
  }
  
  getTempCallback('Boston', function(err, temp) {
    if (err) {
      console.log('error', err);
    } else {
      console.log('success', temp);
    }
  });
  
  
  function getTempPromise(location) {
    return new Promise(function(resolve, reject) {
      // Either resolve or reject will be called with promise and not both.
      setTimeout(function() {
        resolve(79);
        reject('City not found');
      }, 1000);
    });
  }
  
  getTempPromise('Boston').then(function(temp) {
    console.log('promise success', temp);
  }, function(err) {
    console.log('promise error', err);
  })
  
  // Go to project folder in terminal and run node example-promise.js
  