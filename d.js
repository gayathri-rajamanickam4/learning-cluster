let a = [10, 5, 7, 20, 15, 31, 12, 8];
let k = 3;

function split(b) {
  if (b.length > 1) {
    let right, left;
    if (b.length % 2 === 0) {
      splitlength = b.length / 2;
      left = b.slice(0, splitlength);
      console.log('left', left);
      //console.log('element::', b);
      right = b.slice(splitlength, b.length);
      console.log('right', right);
    } else {
      splitlength = Math.floor(b.length / 2);
      //  console.log('splitlength', splitlength);
      left = b.slice(0, splitlength + 1);
      console.log('left', left);
      // console.log('element::', b);
      right = b.slice(splitlength + 1, b.length);
      console.log('right', right);
    }
    return merge(split(left), split(right));
    // split(left); 10,5 || 7
    /**
     * 10, 5 || 7
     * 10  || 5
     * merge (10, 5)
     */
    // split(right);

    // split(b);
  } else {
    console.log('returned b::', b);
    return b;
  }
}

function merge(left, right) {
  console.log('left at merge', left);

  console.log('right at merge', right);

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

  console.log('result', result);

  console.log(right.slice(1));

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let ans = split(a);
console.log('ans:::::', ans[k - 1]);
