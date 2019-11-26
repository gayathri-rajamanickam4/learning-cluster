var foo = function() {
  // foo is visible here
  // bar is visible here
  console.log(typeof bar()); // Works here :)
};

foo();

console.log('foo type::', typeof foo);
