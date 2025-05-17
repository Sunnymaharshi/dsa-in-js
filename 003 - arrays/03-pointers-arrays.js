function moveZeroestoEnd(arr) {
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

function sortArray012_optimal(arr) {
  // left - 0s [0 to left-1]
  // mid  - 1s [left to mid -1]
  // unsorted [mid to right]
  // right- 2s [right+1 to n-1]
  let left = 0;
  let mid = 0;
  let right = arr.length - 1;
  while (mid <= right) {
    if (arr[mid] === 0) {
      // swap(arr[left],arr[mid]) swap(1,0)
      // since left is start of 1s, we increase left after swaping
      // since left to mid - 1 are 1s, we can increase mid
      [arr[left], arr[mid]] = [arr[mid], arr[left]];
      left++;
      mid++;
    } else if (arr[mid] === 1) {
      // leave, as 1s will be at middle
      mid++;
    } else {
      // swap(arr[mid],arr[right])
      // arr[right] is still part of unsorted so we don't increase mid
      [arr[mid], arr[right]] = [arr[right], arr[mid]];
      // after arr[right] swap, right part is sorted we decreasing right
      right--;
    }
  }
  return arr;
}
// console.log(sortArray012_optimal([2, 0, 1]));
