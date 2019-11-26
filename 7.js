function add() {
  let counter = 0;
  console.log('counter::', counter);
  return function() {
    // var counter = 0;
    //counter = 0;
    counter = counter + 1;
    return counter;
  };
}

sum = add();
sum();
let totl = sum();

console.log(totl);
