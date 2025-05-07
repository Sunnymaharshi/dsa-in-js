function twoSum_brute(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    // i,j is checked, no need to check j,i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return [i, j];
      }
    }
  }
  return null;
}
// console.log(twoSum_brute([2, 1, 3, 9], 10));
function twoSum_better(arr, k) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(k - arr[i])) {
      return [i, map.get(k - arr[i])];
    }
    map.set(arr[i], i);
  }
  return null;
}
// console.log(twoSum_better([2, 1, 3, 9], 10));
function twoSum_optimal(arr, k) {
  let i = 0;
  let j = arr.length - 1;
  arr.sort((a, b) => a - b);
  while (i < j) {
    if (arr[i] + arr[j] === k) {
      return true;
    } else if (arr[i] + arr[j] < k) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}
// console.log(twoSum_optimal([2, 1, 3, 9], 10));

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
