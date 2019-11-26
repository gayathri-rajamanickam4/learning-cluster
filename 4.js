let numbers = [10, 2, 50];

let total = numbers.reduce((prev = 0, current) => {
  return prev + current;
});

console.log('total::', total);
