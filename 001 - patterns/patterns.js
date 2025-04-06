/*
1.
*****
*****
*****
*****
*****
*/
function pattern1(n = 5) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
// pattern1();

/*
2.
*
**
***
****
*****
*/
function pattern2(n = 5) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
// pattern2();

/*
3.
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
*/
function pattern3(n = 5) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write(j + 1 + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern3();

/*
4.
1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5 
*/
function pattern4(n = 5) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write(i + 1 + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern4();

/*
5.
*****
****
***
**
*
*/
function pattern5(n = 5) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
// pattern5();

/*
6.
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 
*/
function pattern6(n = 5) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      process.stdout.write(j + 1 + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern6();

/*
7. Star pyramid
    *    
   ***   
  *****  
 ******* 
*********
*/
function pattern7(n = 5) {
  for (let i = 0; i < n; i++) {
    // spaces on left
    for (let j = 0; j < n - i - 1; j++) process.stdout.write(" ");
    // stars
    for (let s = 0; s < 2 * i + 1; s++) process.stdout.write("*");
    // spaces on right
    for (let k = 0; k < n - i - 1; k++) process.stdout.write(" ");
    process.stdout.write("\n");
  }
}
// pattern7();

/*
8. Reverse Star pyramid
*********
 ******* 
  *****  
   ***   
    *    
*/
function pattern8(n = 5) {
  for (let i = 0; i < n; i++) {
    // spaces on left
    for (let j = 0; j < i; j++) process.stdout.write(" ");
    // stars
    for (let s = 0; s < 2 * (n - i) - 1; s++) process.stdout.write("*");
    // spaces on right
    for (let k = 0; k < i; k++) process.stdout.write(" ");
    process.stdout.write("\n");
  }
}
// pattern8();

/*
9.Diamond Star
    *    
   ***   
  *****  
 ******* 
*********
*********
 ******* 
  *****  
   ***   
    *      
*/
function pattern9(n = 5) {
  pattern7(n);
  pattern8(n);
}
// pattern9();

/*
10. Half diamond
*
**
***
****
*****
****
***
**
*
*/
function pattern10(n = 5) {
  for (let i = 0; i < 2 * n - 1; i++) {
    let stars = i + 1;
    if (i > n - 1) stars = 2 * n - i - 1;
    for (let j = 0; j < stars; j++) process.stdout.write("*");
    process.stdout.write("\n");
  }
}
// pattern10();

/*
11. Binary Number Triangle
1
01
101
0101
10101
*/
function pattern11(n = 5) {
  let row_start = 1;
  for (let i = 0; i < n; i++) {
    let col = row_start;
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write(col + "");
      col = 1 - col;
    }
    row_start = 1 - row_start;
    process.stdout.write("\n");
  }
}
// pattern11();

/*
12. Number Crown
1        1
12      21
123    321
1234  4321
1234554321
*/
function pattern12(n = 5) {
  for (let i = 1; i <= n; i++) {
    // first numbers
    for (let j = 1; j <= i; j++) process.stdout.write(j + "");
    // spaces
    for (let s = 1; s <= 2 * (n - i); s++) process.stdout.write(" ");
    // last numbers
    for (let k = i; k >= 1; k--) process.stdout.write(k + "");
    process.stdout.write("\n");
  }
}
// pattern12();

/*
13. Increasing Number Triangle
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
*/
function pattern13(n = 5) {
  num = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write(num + " ");
      num = num + 1;
    }
    process.stdout.write("\n");
  }
}
// pattern13();

/*
14. Increasing Letter Triangle
A 
A B 
A B C 
A B C D 
A B C D E
*/
function pattern14(n = 5) {
  for (let i = 0; i < n; i++) {
    let ch = "A";
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write(ch + " ");
      ch = String.fromCharCode(ch.charCodeAt() + 1);
    }
    process.stdout.write("\n");
  }
}
// pattern14();

/*
15. Reverse Letter Triangle
A B C D E 
A B C D 
A B C 
A B 
A 
*/
function pattern15(n = 5) {
  for (let i = 0; i < n; i++) {
    let ch = "A";
    for (let j = 0; j < n - i; j++) {
      process.stdout.write(ch + " ");
      ch = String.fromCharCode(ch.charCodeAt() + 1);
    }
    process.stdout.write("\n");
  }
}
// pattern15();

/*
16. Alpha-Hill
    A    
   ABA   
  ABCBA  
 ABCDCBA 
ABCDEDCBA
*/
function pattern16(n = 5) {
  for (let i = 0; i < n; i++) {
    let ch = "A";

    for (let j = 0; j < n - i - 1; j++) process.stdout.write(" ");
    for (let m = 0; m < 2 * i + 1; m++) {
      process.stdout.write(ch + "");
      if (m < i) ch = String.fromCharCode(ch.charCodeAt() + 1);
      else ch = String.fromCharCode(ch.charCodeAt() - 1);
    }
    for (let k = 0; k < n - i - 1; k++) process.stdout.write(" ");
    process.stdout.write("\n");
  }
}
// pattern16();

/*
17. Alpha-Triangle
E 
D E 
C D E 
B C D E 
A B C D E 
*/
function pattern17(n = 5) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j > 0; j--) {
      let ch = String.fromCharCode("A".charCodeAt() + n - j);
      process.stdout.write(ch + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern17();

/*
18. Symmetric-function
**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********
*/
function pattern18(n = 5) {
  // first symmetric
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) process.stdout.write("*");
    for (let s = 0; s < 2 * i; s++) process.stdout.write(" ");
    for (let k = 0; k < n - i; k++) process.stdout.write("*");
    process.stdout.write("\n");
  }
  // second symmetric
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) process.stdout.write("*");
    for (let s = 0; s < 2 * (n - i - 1); s++) process.stdout.write(" ");
    for (let k = 0; k < i + 1; k++) process.stdout.write("*");
    process.stdout.write("\n");
  }
}
// pattern18();

/*
19. Symmetric-Butterfly
*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *
*/
function pattern19(n = 5) {
  let spaces = 2 * n;
  let stars = 0;
  for (let i = 0; i < 2 * n - 1; i++) {
    if (i < n) {
      spaces = spaces - 2;
      stars++;
    } else {
      spaces = spaces + 2;
      stars--;
    }
    for (let j = 0; j < stars; j++) process.stdout.write("*");
    for (let s = 0; s < spaces; s++) process.stdout.write(" ");
    for (let k = 0; k < stars; k++) process.stdout.write("*");
    process.stdout.write("\n");
  }
}
// pattern19();

/*
20. Hollow Rectangle
*****
*   *
*   *
*   *
*****
*/
function pattern20(n = 5) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || j == 0 || i == n - 1 || j == n - 1)
        process.stdout.write("*");
      else process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
}
// pattern20();

/*
21. The Number
5 5 5 5 5 5 5 5 5 
5 4 4 4 4 4 4 4 5 
5 4 3 3 3 3 3 4 5 
5 4 3 2 2 2 3 4 5 
5 4 3 2 1 2 3 4 5 
5 4 3 2 2 2 3 4 5 
5 4 3 3 3 3 3 4 5 
5 4 4 4 4 4 4 4 5 
5 5 5 5 5 5 5 5 5 
*/
function pattern21(n = 5) {
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      // find distance from all sides
      let top = i;
      let left = j;
      let right = 2 * n - 2 - j;
      let down = 2 * n - 2 - i;
      let val = n - Math.min(Math.min(top, down), Math.min(left, right));
      process.stdout.write(val + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern21();
