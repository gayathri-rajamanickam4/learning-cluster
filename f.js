let a = [3, 1, 6, 4, 5];

/*for (i = 0; i < a.length; i++) {
  for (j = i + 1; j < a.length; j++) {
    for (k = j + 1; k < a.length; k++) {
      console.log(a[i], a[j], a[k]);
    }
  }
}*/

function findTriplet(input) {
  let sq = [];
  for (let i = 0; i < input.length; i++) {
    sq.push(input[i] * input[i]);
  }

  let sortedSq = mergeSort(sq);

  console.log('sortedSq::', sortedSq);

  for (p = sortedSq.length - 1; p >= 2; p--) {
    let left = 0,
      right = p - 1;

    while (left <= right) {
      if (left === right) {
        //mid = true;
        break;
      }
      if (sortedSq[p] === sortedSq[left] + sortedSq[right]) {
        console.log(
          'triplets are::',
          Math.sqrt(sortedSq[p]),
          Math.sqrt(sortedSq[left]),
          Math.sqrt(sortedSq[right]),
        );
        break;
      }
      if (sortedSq[p] < sortedSq[left] + sortedSq[right]) {
        right--;
      } else if (sortedSq[p] > sortedSq[left] + sortedSq[right]) {
        left++;
      }
    }
  }
}

function mergeSort(sq) {
  if (sq.length <= 1) {
    return sq;
  }

  let left, right, mid;

  if (sq.length % 2 === 0) {
    mid = sq.length / 2;
    left = sq.slice(0, mid);
    right = sq.slice(mid);
  } else {
    mid = Math.floor(sq.length / 2);
    left = sq.slice(0, mid + 1);
    right = sq.slice(mid + 1);
  }

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [],
    leftIndex = 0,
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

findTriplet(a);

/**
 * 
 * 
 3 = 1
 {1,2,3}
 4 = 4
 1,2,3,4
{1,2,3}
{1,2,4},
{ 1,3,4}

{2,3,4}
{1,3,4}
{}
 5 =  9

{1,2,3}
{1,2,4}
{1,2,5}
{2,3,4}
{2,3,5}
{3,4,5}
{1,3,4}
{1,3,5}
{2,4,5}

 */
