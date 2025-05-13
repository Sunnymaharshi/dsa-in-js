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

function majorityElement_optimal(arr) {
  let mj;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      mj = arr[i];
      count = 1;
    } else if (arr[i] === mj) {
      count++;
    } else {
      count--;
    }
  }
  // problem says majority element might not exists check mj count
  count = 0;
  for (const ele of arr) {
    if (ele === mj) {
      count++;
      if (count > Math.floor(arr.length / 2)) {
        return mj;
      }
    }
  }
  return null;
}
// console.log(majorityElement_optimal([3, 3, 4]));

function maxSubarraySum_optimal(arr) {
  let max = -Infinity;
  let sum = 0;
  // print subarray
  let startIndex = 0;
  let ans; // holds subarray start and end indexes
  for (let i = 0; i < arr.length; i++) {
    // starting new subarray
    if (sum === 0) {
      startIndex = i;
    }
    sum += arr[i];
    // update max & subarray indexes
    if (sum > max) {
      max = sum;
      ans = [startIndex, i];
    }
    // sum is negative, don't consider this sub array
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}
// console.log(maxSubarraySum_optimal([-1, 2, -3, -1, -1]));

function BuyandSell_1_optimal(arr) {
  let buy = arr[0];
  let profit = 0;
  for (let i = 1; i < arr.length; i++) {
    // sell & update max profit
    if (arr[i] > buy) {
      profit = Math.max(profit, arr[i] - buy);
    }
    // buy if it is cheap
    else if (arr[i] < buy) {
      buy = arr[i];
    }
  }
  return profit;
}
// console.log(BuyandSell_1_optimal([1, 0, 2, 3, 6]));

function rearrangeBySign_optimal(arr) {
  let res = new Array(arr.length);
  let pInd = 0;
  let nInd = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      res[nInd] = arr[i];
      nInd += 2;
    } else {
      res[pInd] = arr[i];
      pInd += 2;
    }
  }
  return res;
}
// console.log(rearrangeBySign_optimal([3, 1, -2, -5, 2, -4]));
function nextPermutation(arr) {
  function reverse(i, j) {
    while (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  let n = arr.length;
  let dip = -1;
  // find dip from right
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      dip = i;
      break;
    }
  }
  // given is last permutation, reverse to get 1st one
  if (dip === -1) {
    arr.reverse();
    return arr;
  }
  // find smallest element > dip element & swap
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > arr[dip]) {
      [arr[dip], arr[i]] = [arr[i], arr[dip]];
      break;
    }
  }

  // reverse elements after dip to get smallest number
  reverse(dip + 1, n - 1);
  return arr;
}
// console.log(nextPermutation([1, 2, 3]));

function findLeaders_optimal(arr) {
  let max = -Infinity;
  const leaders = [];
  // traverse from right to left and track max
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      leaders.push(arr[i]);
      max = arr[i];
    }
  }
  // reverse leaders if asked to persist order
  return leaders;
}
// console.log(findLeaders_optimal([2, 5, 3, 0, 1]));
function longestConsectiveSeq_better(arr) {
  arr.sort((a, b) => a - b);
  let last = -Infinity;
  let max = 0;
  let count = 0;
  for (let ele of arr) {
    if (ele - 1 === last) {
      count++;
      last = ele;
    }
    // restart the sequence
    else if (ele !== last) {
      count = 1;
      last = ele;
    }
    max = Math.max(max, count);
  }
  return max;
}
// console.log(longestConsectiveSeq_better([1, 0, 1, 2]));
function longestConsectiveSeq_optimal(arr) {
  const set = new Set(arr);
  let max = 0;
  for (const ele of set) {
    // for starting element of seq
    if (!set.has(ele - 1)) {
      let count = 1;
      let temp = ele;
      while (set.has(temp + 1)) {
        count++;
        temp++;
      }
      max = Math.max(max, count);
    }
  }
  return max;
}

function setMatrixZeroes_better(mat) {
  const [m, n] = [mat.length, mat[0].length];
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        rows[i] = 1;
        cols[j] = 1;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i] || cols[j]) {
        mat[i][j] = 0;
      }
    }
  }
  return mat;
}
// console.log(
//   setMatrixZeroes_better([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ])
// );

function setMatrixZeroes_optimal(mat) {
  let col0 = 1;
  const [m, n] = [mat.length, mat[0].length];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        mat[i][0] = 0;
        if (j !== 0) {
          mat[0][j] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (mat[i][j] !== 0) {
        if (mat[i][0] === 0 || mat[0][j] === 0) {
          mat[i][j] = 0;
        }
      }
    }
  }
  if (mat[0][0] === 0) {
    for (let j = 0; j < n; j++) {
      mat[0][j] = 0;
    }
  }
  if (col0 === 0) {
    for (let i = 0; i < m; i++) {
      mat[i][0] = 0;
    }
  }
  return mat;
}
// console.log(
//   setMatrixZeroes_optimal([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ])
// );
function rotateImage_optimal(mat) {
  const n = mat.length;
  // transpose matrix
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      // swap i,j with j,i
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }
  // reverse every row
  for (let i = 0; i < n; i++) {
    mat[i].reverse();
  }
  return mat;
}
// console.log(
//   rotateImage_optimal([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
