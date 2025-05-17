function longestSubarraySumK_better(arr, k) {
  // optimal if array has negatives also
  const prefix = new Map();
  let sum = 0;
  let maxLen = 0;
  // prefix sum, each index holds sum of all nums upto that index
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    // check if subarray[0 to i] has sum k
    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }
    // how much extra sum need to remove to get k
    let extra = sum - k;
    if (prefix.has(extra)) {
      // if u found subarray with sum as extra we can remove it
      let len = i - prefix.get(extra);
      maxLen = Math.max(maxLen, len);
    }
    // store only first occurrence of index
    // we need to check index with sum as left as possible, if 0s exists
    if (!prefix.has(sum)) {
      prefix.set(sum, i);
    }
  }
  return maxLen;
}
// console.log(longestSubarraySumK_better([2, 0, 0, 1, 3], 4));

function longestSubarraySumK_optimal(arr, k) {
  let i = 0;
  let j = 0;
  let sum = arr[0];
  let maxLen = 0;
  while (j < arr.length) {
    // increase i until sum <= k
    while (i <= j && sum > k) {
      sum -= arr[i];
      i++;
    }
    if (sum === k) {
      maxLen = Math.max(maxLen, j - i + 1);
    }
    // increase j
    j++;
    if (j < arr.length) {
      sum += arr[j];
    }
  }
  return maxLen;
}
// console.log(longestSubarraySumK_optimal([1, 0, 0, 1, 3], 4));

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

function countSubarraySumK(arr, k) {}
