function leftRotateArrayBy1(arr) {
  let first = arr[0];
  let i = 0;
  while (i <= arr.length - 2) {
    arr[i] = arr[i + 1];
    i++;
  }
  arr[arr.length - 1] = first;
  return arr;
}
// console.log(leftRotateArrayBy1([1, 2, 3]));

function rightRotateArrayBy1(arr) {
  let n = arr.length;
  let last = arr[n - 1];
  let i = n - 1;
  while (i > 0) {
    arr[i] = arr[i - 1];
    i--;
  }
  arr[0] = last;
  return arr;
}
// console.log(rightRotateArrayBy1([1, 2, 3]));

function isArraySortedandRotated_brute(arr) {
  const original = arr.slice();

  for (const ele of arr) {
    const checkSorted = (array) => {
      let isSorted = true;
      for (let i = 1; i < original.length; i++) {
        if (array[i] < array[i - 1]) {
          isSorted = false;
          break;
        }
      }
      return isSorted;
    };
    // remove element and add to the end, undoing rotation
    original.shift();
    original.push(ele);
    // check if new array is sorted
    if (checkSorted(original)) {
      return true;
    }
  }
  return false;
}
// console.log(isArraySortedandRotated_brute([3, 4, 5, 1, 2]));

function isArraySortedandRotated_better(arr) {
  // [...arr,...arr] will have original array if arr is rotated
  // instead of new array we can use i%n to traverse same array again
  const n = arr.length;
  // edge case, since i is starting from 1
  if (n <= 1) {
    return true;
  }
  let i = 1;
  let count = 1;
  while (i < 2 * n) {
    // check if it is in non-decreasing order
    if (arr[i % n] >= arr[(i - 1) % n]) {
      count++;
    }
    // reset count (include current element to track)
    else {
      count = 1;
    }
    i++;
    // if non-decreasing array of len n is found, return true
    if (count === n) {
      return true;
    }
  }
  return false;
}
// console.log(isArraySortedandRotated_better([3, 4, 5, 1, 2]));

function isArraySortedandRotated_optimal(arr) {
  // check breaks (dips) in non-decreasing order
  let dip = 0;
  let i = 1;
  while (i < arr.length) {
    if (arr[i] < arr[i - 1]) {
      dip++;
    }
    if (dip > 1) {
      break;
    }
    i++;
  }
  if (dip === 0) {
    return true;
  }
  // check non-decreasing order at ends
  if (dip === 1) {
    return arr[0] >= arr[arr.length - 1];
  }
  return false;
}
// console.log(isArraySortedandRotated_optimal([2, 1, 3, 4]));

function leftRotateByK_brute(arr, k) {
  let n = arr.length;
  // rotating n times brings arr to original order
  k = k % n;
  // store first k elements
  let temp = arr.slice(0, k);
  // shift remaining elements (from kth index) to the first
  for (let i = k; i < n; i++) {
    arr[i - k] = arr[i];
  }
  // place first k elements at the end
  for (let i = 0; i < temp.length; i++) {
    arr[i + n - k] = temp[i];
  }
  return arr;
}
// console.log(leftRotateByK_brute([1, 2, 3, 4, 5], 2));
// output: [ 3, 4, 5, 1, 2 ]
function leftRotateByK_optimal(arr, k) {
  let n = arr.length;
  k = k % n;
  function reverse(i, j) {
    while (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  // reverse first k elements
  let i = 0;
  let j = k - 1;
  reverse(i, j);
  // reverse remaining n-k elements
  i = k;
  j = n - 1;
  reverse(i, j);
  // reverse total array
  i = 0;
  j = n - 1;
  reverse(i, j);
  return arr;
}
// console.log(leftRotateByK_optimal([1, 2, 3, 4, 5], 2));
// output: [ 3, 4, 5, 1, 2 ]

function rightRotateByK_brute(arr, k) {
  let n = arr.length;
  // rotating n times brings arr to original order
  k = k % n;
  // store last k elements
  let temp = arr.slice(-k);
  // shift first n-k elements to the last
  for (let i = 0; i < n - k; i++) {
    arr[n - i - 1] = arr[n - k - i - 1];
  }
  // place last k elements at first
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
  return arr;
}
// console.log(rightRotateByK_brute([1, 2, 3, 4, 5], 2));
// output: [ 4, 5, 1, 2, 3 ]

function rightRotateByK_optimal(arr, k) {
  let n = arr.length;
  k = k % n;
  function reverse(i, j) {
    while (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  // reverse last k elements
  let i = n - k;
  let j = n - 1;
  reverse(i, j);
  // reverse first n-k elements
  i = 0;
  j = n - k - 1;
  reverse(i, j);
  // reverse total array
  i = 0;
  j = n - 1;
  reverse(i, j);
  return arr;
}
// console.log(rightRotateByK_optimal([1, 2, 3, 4, 5], 2));
// output: [ 4, 5, 1, 2, 3 ]
