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
// console.log(largest2nd_brute([2, 2, 0, 1]));

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
    }
    // check if ele is > large2
    else if (ele < large && ele > large2) {
      large2 = ele;
    }
  }
  if (large2 === -Infinity) {
    return null;
  }
  return large2;
}
// console.log(largest2nd_optimal([2, 2, 0, 1]));

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
