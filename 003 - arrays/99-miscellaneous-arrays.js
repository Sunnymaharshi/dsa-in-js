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
// console.log(longestConsectiveSeq_optimal([1, 0, 1, 2]));

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
