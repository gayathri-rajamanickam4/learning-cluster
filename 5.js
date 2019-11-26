function greet() {
  return function(greeting) {
    return function(name) {
      return greeting + ',' + name + '!';
    };
  };
}

let greeter = greet();

let test = greeter('Hello')('Candidate');

console.log('test::', test);
