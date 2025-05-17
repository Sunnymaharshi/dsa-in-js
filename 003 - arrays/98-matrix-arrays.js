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

function spiralMatrix(mat) {
  let r = mat.length;
  let c = mat[0].length;
  let left = 0;
  let right = c - 1;
  let top = 0;
  let bottom = r - 1;
  const spiral = [];
  while (top <= bottom && left <= right) {
    // right traverse
    for (let i = left; i <= right; i++) {
      spiral.push(mat[top][i]);
    }
    // increment top to remove row from top
    top++;

    // bottom traverse
    for (let i = top; i <= bottom; i++) {
      spiral.push(mat[i][right]);
    }
    // decrement right to remove column from right
    right--;

    // here both top & right changes, check if they are valid

    // left traverse
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        spiral.push(mat[bottom][i]);
      }
    }
    // decrement bottom to remove row from bottom
    bottom--;

    // up traverse
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        spiral.push(mat[i][left]);
      }
    }
    // increase left to remove column from left
    left++;
  }
  return spiral;
}

// console.log(
//   spiralMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
