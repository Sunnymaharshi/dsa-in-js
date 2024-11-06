"""
* * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * * 
"""
def pattern1(n):
    for i in range(n):
        for j in range(n):
            print("*",end=" ")
        print()

# pattern1(5)

"""
* 
* * 
* * * 
* * * * 
* * * * * 
"""
def pattern2(n):
    for i in range(n):
        for j in range(i+1):
            print("*",end=" ")
        print()

# pattern2(5)

"""
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
"""
def pattern3(n):
    for i in range(n):
        for j in range(i+1):
            print(j+1,end=" ")
        print()

# pattern3(5)

"""
1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5 
"""
def pattern4(n):
    for i in range(n):
        for j in range(i+1):
            print(i+1,end=" ")
        print()

# pattern4(5)

"""
* * * * * 
* * * * 
* * * 
* * 
* 
"""
def pattern5(n):
    for i in range(n):
        for j in range(n-i):
            print("*",end=" ")
        print()

# pattern5(5)

"""
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 
"""
def pattern6(n):
    for i in range(n):
        for j in range(n-i):
            print(j+1,end=" ")
        print()

# pattern6(5)

"""
7. Star pyramid
    *    
   ***   
  *****  
 ******* 
*********
"""
def pattern7(n):
    for i in range(n):
        # spaces on left
        for j in range(n - i - 1):
            print(" ",end="")
        # stars
        for s in range(2*i + 1):
            print("*",end="")  
        # spaces on right          
        for k in range(n - i - 1):
            print(" ",end="")
        print()

# pattern7(5)

"""
8. Reverse Star pyramid
*********
 ******* 
  *****  
   ***   
    *    
"""
def pattern8(n):
    for i in range(n):
        # spaces on left
        for j in range(i):
            print(" ",end="")
        # stars
        for s in range(2*(n - i) - 1):
            print("*",end="")  
        # spaces on right          
        for k in range(i):
            print(" ",end="")
        print()

# pattern8(5)

"""
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
"""
def pattern9(n):
    # combine pattern 7 and 8
    pattern7(n)
    pattern8(n)

# pattern9(5)

"""
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
"""
def pattern10(n):
    for i in range(2*n - 1):
        stars = i + 1
        if i > n - 1:
            stars = 2*n - i - 1
        for j in range(stars):
            print("*",end="")
        print()
# pattern10(5)

"""
11. Binary Number Triangle
1
01
101
0101
10101
"""
def pattern11(n):
    row_start = 1
    for i in range(n):
        col = row_start
        for j in range(i+1):
            print(col,end="")
            col = 1 - col
        row_start = 1 - row_start
        print()
# pattern11(5)

"""
12. Number Crown
1        1
12      21
123    321
1234  4321
1234554321
"""
def pattern12(n):
    for i in range(1,n+1):
        # first numbers
        for j in range(1,i+1):
            print(j,end="")
        # spaces
        for s in range(1,2*(n-i)+1):
            print(" ",end="")
        # last numbers
        for k in range(i,0,-1):
            print(k,end="")        
        print()
# pattern12(5)

"""
13. Increasing Number Triangle
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
"""
def pattern13(n):
    num = 1
    for i in range(n):
        for j in range(i+1):
            print(num,end=" ")
            num = num + 1
        print()

# pattern13(5)

"""
14. Increasing Letter Triangle
A 
A B 
A B C 
A B C D 
A B C D E 
"""
def pattern14(n):
    for i in range(n):
        ch = 'A'
        for j in range(i+1):
            print(ch,end=" ")
            ch = chr(ord(ch)+1)
        print()
# pattern14(5)

"""
15. Reverse Letter Triangle
A B C D E 
A B C D 
A B C 
A B 
A 
"""
def pattern15(n):
    for i in range(n):
        ch = 'A'
        for j in range(n-i):
            print(ch,end=" ")
            ch = chr(ord(ch)+1)
        print()
# pattern15(5)

"""
16. Alpha-Hill
    A    
   ABA   
  ABCBA  
 ABCDCBA 
ABCDEDCBA
"""
def pattern16(n):
    for i in range(n):
        ch = 'A'
        for j in range(n-i-1):
            print(" ",end="")
        for m in range(2*i+1):
            print(ch,end="")
            if m < i:
                ch = chr(ord(ch)+1)
            else:
                ch = chr(ord(ch)-1)            
        for k in range(n-i-1):
            print(" ",end="")        
        print()
# pattern16(5)

"""
17. Alpha-Triangle
E 
D E 
C D E 
B C D E 
A B C D E 
"""
def pattern17(n):
    for i in range(n):
        for j in range(i+1,0,-1):
            letter = chr(ord('A')+n-j)
            print(letter,end=" ")
        print()
# pattern17(5)

"""
18. Symmetric-Void
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
"""
def pattern18(n):
    for i in range(n):
        for j in range(n-i):
            print("*",end="")
        for j in range(2*i):
            print(" ",end="")
        for k in range(n-i):
            print("*",end="")
        print()
    for i in range(n):
        for j in range(i+1):
            print("*",end="")
        for j in range(2*(n-i-1)):
            print(" ",end="")
        for k in range(i+1):
            print("*",end="")
        print()
        
# pattern18(5)
"""
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
"""
def pattern19(n):
    spaces = 2*n
    stars = 0
    for i in range(2*n-1):
        if(i<n):
            spaces = spaces-2
            stars = stars+1        
        else:
            spaces = spaces+2
            stars = stars-1
        for j in range(stars):
            print("*",end="")
        for s in range(spaces):
            print(" ",end="")
        for k in range(stars):
            print("*",end="")
        print()

# pattern19(5)

"""
20. Hollow Rectangle
*****
*   *
*   *
*   *
*****
"""
def pattern20(n):
    for i in range(n):
        for j in range(n):
            if i==0 or j==0 or i==n-1 or j==n-1:
                print("*",end="")
            else:
                print(" ",end="")
        print()

# pattern20(5)

"""
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
"""
def pattern21(n):
    for i in range(2*n-1):
        for j in range(2*n-1):
            # find distance from all sides
            top = i
            left = j
            right = (2*n - 2) - j
            down = (2*n - 2) - i
            val = n - min(top,left,right,down)
            print(val,end=" ")
        print()

# pattern21(5)