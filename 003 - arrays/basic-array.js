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
