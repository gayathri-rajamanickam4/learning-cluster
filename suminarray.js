function findPair(arr, sum) {
  let s = new Set();
  for (n of arr) {
    let another = sum - n;
    if (s.has(another)) {
      console.log(n, another);
    }
    s.add(n);
  }
}

a = [5, 1, 4, 2, 3, 3];
sum = 6;
findPair(a, sum);
