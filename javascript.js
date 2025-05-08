/*
    creating multi-dimensional arrays
        new Array(row_len).fill(0).map(() => new Array(col_len).fill(0))
        *must not use arr.fill(new Array(col_len).fill(0))
            here new Array will run only once 
            same will be assigned for all elements in arr 

*/
const r5c3 = new Array(5).fill(0).map(() => new Array(3).fill(0));
console.log(r5c3);
