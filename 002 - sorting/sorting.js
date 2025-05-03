// Selection sort - select min & swap

function selection_sort(arr = [4, 5, 2, 3, 1]) {
  // 0 to n-2 as no need to swap last element with itself
  for (let i = 0; i <= arr.length - 2; i++) {
    // assume first element is min
    let min_idx = i;

    // search min in right side (left is sorted) i to n-1
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[min_idx]) min_idx = j;
    }

    // swap first element in unsorted with min element
    // pushes min to left
    [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
  }
  console.log(arr);
}
// selection_sort();

// Bubble sort - adjacent swapping
function bubble_sort(arr = [4, 5, 2, 3, 1]) {
  for (let i = 0; i <= arr.length - 1; i++) {
    let didSwap = 0;
    // adjacent swaps in left side (1 to n-1-i) (right is sorted)
    for (let j = 1; j <= arr.length - 1 - i; j++) {
      // swap adjacents if not sorted - pushes max to the right
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        didSwap = 1;
      }
    }
    // best case - already sorted
    if (!didSwap) {
      break;
    }
  }
  console.log(arr);
}
// bubble_sort();

// Insertion sort - insert each element in correct position
function insertion_sort(arr = [4, 5, 2, 3, 1]) {
  for (let i = 0; i <= arr.length - 1; i++) {
    // swap ith element to left until u can't
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
  console.log(arr);
}
// insertion_sort();

function mergeSort(arr) {
  // single element in the array
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  // merge left and right sorted arrays
  return merge(left, right);
}
function merge(left, right) {
  const sorted_arr = [];
  let l = 0;
  let r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      sorted_arr.push(left[l]);
      l++;
    } else {
      sorted_arr.push(right[r]);
      r++;
    }
  }
  const remainingLeft = left.slice(l);
  const remainingRight = right.slice(r);
  return sorted_arr.concat(remainingLeft).concat(remainingRight);
}

console.log(mergeSort([4, 5, 2, 3, 1, 0]));
