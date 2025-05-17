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
