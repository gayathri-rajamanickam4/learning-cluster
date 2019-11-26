function quickSort(arr, l, r) {
  if (l >= r) return arr;
  let midPos = Math.ceil((l + r) / 2);
  let pivot = arr[midPos];

  let left = l;
  let right = r;

  while (l <= r) {
    while (arr[l] < pivot) {
      l++;
    }

    while (arr[r] > pivot) {
      r--;
    }

    if (l <= r) {
      swap(arr, l, r);
      l++;
      r--;
    }
  }

  quickSort(arr, left, r);
  quickSort(arr, l, right);

  return arr;
}

function swap(arr, l, r) {
  const t = arr[l];
  arr[l] = arr[r];
  arr[r] = t;
}

let a = [1, 12, 5, 26, 14, 3, 7, 2];
a = quickSort(a, 0, a.length - 1);
console.log('ans::', a);
