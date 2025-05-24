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

function threeSum_better(arr) {
  const ans = new Set();
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    // tracks elements btw arr[i] and arr[j]
    // for every i reset this set
    const set = new Set();
    for (let j = i + 1; j < n; j++) {
      let third = -(arr[i] + arr[j]);
      if (set.has(third)) {
        let temp = [arr[i], arr[j], third];
        temp.sort((a, b) => a - b);
        // set checks ref if it is array, so stringify it
        ans.add(JSON.stringify(temp));
      }
      // before moving j, add that element to set
      set.add(arr[j]);
    }
  }
  return ans.map((arr) => JSON.parse(arr));
}

function threeSum_optimal(arr) {
  const n = arr.length;
  const ans = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    // if it is not first element & same as prev element skip taking it as first element
    if ((i > 0) & (arr[i] === arr[i - 1])) {
      continue;
    }
    let j = i + 1; // 2nd element is next of first
    let k = n - 1; // k at the end
    while (j < k) {
      const sum = arr[i] + arr[j] + arr[k];
      // triplet found
      if (sum === 0) {
        ans.push([arr[i], arr[j], arr[k]]);
        // don't pick elements that are already taken
        j++;
        k--;
        // remove duplicates
        while (j < k && arr[j] === arr[j - 1]) {
          j++;
        }
        while (j < k && arr[k] === arr[k + 1]) {
          k--;
        }
      }
      // increase sum value by increasing j
      else if (sum < 0) {
        j++;
      }
      // decrease sum value by decreasing k
      else {
        k--;
      }
    }
  }
  return ans;
}
// console.log(threeSum_optimal([-1, 0, 1, 2, -1, -4]));
