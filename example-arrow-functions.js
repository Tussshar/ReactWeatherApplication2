var names = ['Tushar', 'Ajit', 'Nitin'];

names.forEach(function(name) {
  console.log('forEach', name);
});

// Arrow function can be used in place of anonymous function
names.forEach((name) => {
  console.log('arrowFunc', name);
});

// Above function can be written as:
names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Tushar'));

var person1 = {
  name: 'Tushar',
  greet: function() {
    names.forEach(function(name) { // --> anonymous function
      console.log(this.name + ' says hi to ' + name) // --> Won't work
    });
  }
};

var person2 = {
    name: 'Tushar',
    greet: function() {
      names.forEach((name) => { // --> arrow function
        console.log(this.name + ' says hi to ' + name)
      });
    }
  };

// With arrow functions we can use this binding inside function.

person2.greet();
// Go to project folder and run node example-arrow-functions.js
