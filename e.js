function split(arr) {
  if (arr.length <= 1) return arr;

  let left, right, mid;
  if (arr.length % 2 === 0) {
    mid = arr.length / 2;
    left = arr.slice(0, mid);
    right = arr.slice(mid);
  } else {
    mid = Math.floor(arr.length / 2);

    left = arr.slice(0, mid + 1);
    right = arr.slice(mid + 1);
  }

  return merge(split(left), split(right));
}

function merge(left, right) {
  let result = [],
    leftIndex = 0;
  rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let a = [10, 5, 3, 21, 18, 4, 7];
//let a = [1, 2, 3, 4, 5];

let k = 3;

let ans = split(a);

console.log('sorted::', ans);

console.log('element', ans[k - 1]);
