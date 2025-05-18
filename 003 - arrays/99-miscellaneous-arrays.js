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

function majorityElement_II_optimal(arr) {
  let cnt1 = 0;
  let cnt2 = 0;
  let ele1, ele2;
  let minCount = Math.floor(arr.length / 3) + 1;
  const ans = [];
  for (const n of arr) {
    // check if n is not taken by ele2
    if (cnt1 === 0 && n !== ele2) {
      cnt1 = 1;
      ele1 = n;
    }
    // check if n is not taken by ele1
    else if (cnt2 === 0 && n !== ele1) {
      cnt2 = 1;
      ele2 = n;
    } else if (n === ele1) {
      cnt1++;
    } else if (n === ele2) {
      cnt2++;
    } else {
      cnt1--;
      cnt2--;
    }
  }
  // check both elements count
  cnt1 = 0;
  cnt2 = 0;
  for (const n of arr) {
    if (n === ele1) {
      cnt1++;
    }
    if (n === ele2) {
      cnt2++;
    }
  }
  if (cnt1 >= minCount) {
    ans.push(ele1);
  }
  if (cnt2 >= minCount) {
    ans.push(ele2);
  }
  return ans;
}
// console.log(majorityElement_II_optimal([3, 2, 3]));

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

function pascalTriangleRow_optimal(n) {
  const row = [1];
  let ans = 1;
  for (let col = 1; col < n; col++) {
    ans = ans * (n - col);
    ans = ans / col;
    row.push(ans);
  }
  return row;
}
// console.log(pascalTriangleRow_optimal(5));
function pascalTriangle_optimal(n) {
  const ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(pascalTriangleRow_optimal(i + 1));
  }
  return ans;
}
// console.log(pascalTriangle_optimal(5));
