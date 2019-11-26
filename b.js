function createBase(base) {
  return function(other) {
    return base + other;
  };
}

var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21));
