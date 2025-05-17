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

function unionOfSortedWithoutDup(arr1, arr2) {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      if (res.length === 0 || res[res.length - 1] !== arr1[i]) {
        res.push(arr1[i]);
      }
      i++;
    } else {
      if (res.length === 0 || res[res.length - 1] !== arr2[j]) {
        res.push(arr2[j]);
      }
      j++;
    }
  }
  while (i < arr1.length) {
    if (res[res.length - 1] !== arr1[i]) {
      res.push(arr1[i]);
    }
    i++;
  }
  while (j < arr2.length) {
    if (res[res.length - 1] !== arr2[j]) {
      res.push(arr2[j]);
    }
    j++;
  }
  return res;
}
// console.log(unionOfSortedWithoutDup([1, 3, 5, 5], [2, 2, 3]));
function intersectionOfSortedWithoutDup(arr1, arr2) {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      if (res.length === 0 || res[res.length - 1] != arr1[i]) {
        res.push(arr1[i]);
      }
      i++;
      j++;
    }
  }
  return res;
}
// console.log(intersectionOfSortedWithoutDup([1, 2, 2, 3], [1, 2, 4]));
