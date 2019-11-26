//bubble sort - use when already know it is in sorts
// for small amount of numbers; when memory is less

//let a = [10, 5, 3, 21, 18, 4, 7];
let a = [1, 2, 3, 4, 5];

let k = 3;

function sort() {
  length = a.length;
  // let swap = true;
  for (let i = 0; i < length; i++) {
    //  if (swap) {
    let swap = false;
    for (j = 0; j < length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        swap = true;
        const temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
    console.log('completed iteration##', i + 1);
    // if (!swap) {
    //   break;
    // }
    // }
  }
}

sort();

console.log(a);

for (p = a.length - 1; p > a.length - k - 1; p--) {
  console.log(a[p]);
}
