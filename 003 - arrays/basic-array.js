// second largest in array
function largest2nd_brute(arr) {
  if (arr.length <= 1) {
    return null;
  }
  arr.sort((a, b) => a - b);
  let i = arr.length - 2; // 2nd element from last

  // check for duplicates
  while (i >= 0) {
    // skip all duplicates
    if (arr[i] === arr[arr.length - 1]) {
      i--;
    } else {
      return arr[i];
    }
  }
  return null;
}
function largest2nd_optimal(arr) {
  if (arr.length <= 1) {
    return null;
  }
  let large = arr[0];
  let large2 = -Infinity; // what if arr[0] is largest, that's why negative
  for (const ele of arr) {
    if (ele > large) {
      large2 = large;
      large = ele;
    } else if (ele < large && ele > large2) {
      large2 = ele;
    }
  }
  if (large2 === -Infinity) {
    return null;
  }
  return large2;
}
// console.log(largest2nd_brute([2, 2, 0, 1]));
// console.log(largest2nd_optimal([2, 2, 0, 1]));

function remove_duplicates_from_sorted_optimal(nums) {
  if (nums.length === 1) {
    return 1;
  }
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
    j++;
  }
  return i + 1;
}
// console.log(remove_duplicates_from_sorted_optimal([1, 2, 2, 3, 3, 3]));

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

function moveZeroestoEnd(arr) {
  // optimal 2 pointer approach
  let i = 0; // track zero's from left
  let j = arr.length - 1; // track non zeroes from right

  while (i < j) {
    while (arr[i] !== 0 && i < arr.length) {
      i++;
    }
    while (arr[j] === 0 && j >= 0) {
      j--;
    }
    if (i < j) {
      // swap zero from left with non-zero from right
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}
// console.log(moveZeroestoEnd([1, 2, 0, 0, 3]));

function unionOfSortedWithoutDup(arr1, arr2) {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      if (res.length === 0 || res[res.length - 1] !== arr1[i]) {
        res.push(arr1[i]);
      }
      i++;
    } else {
      if (res.length === 0 || res[res.length - 1] !== arr2[j]) {
        res.push(arr2[j]);
      }
      j++;
    }
  }
  while (i < arr1.length) {
    if (res[res.length - 1] !== arr1[i]) {
      res.push(arr1[i]);
    }
    i++;
  }
  while (j < arr2.length) {
    if (res[res.length - 1] !== arr2[j]) {
      res.push(arr2[j]);
    }
    j++;
  }
  return res;
}
// console.log(unionOfSortedWithoutDup([1, 3, 5, 5], [2, 2, 3]));
function intersectionOfSortedWithoutDup(arr1, arr2) {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      if (res.length === 0 || res[res.length - 1] != arr1[i]) {
        res.push(arr1[i]);
      }
      i++;
      j++;
    }
  }
  return res;
}
// console.log(intersectionOfSortedWithoutDup([1, 2, 2, 3], [1, 2, 4]));

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
