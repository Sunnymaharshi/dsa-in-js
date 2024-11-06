#include<iostream>
using namespace std;
/*
1.
*****
*****
*****
*****
*****
*/
void pattern1(int n){
    for(int i=0; i < n; i++){
        for(int j=0; j<n; j++){
            cout<<"*";
        }
        cout<<"\n";
    }
}

/*
2.
*
**
***
****
*****
*/
void pattern2(int n){
    for(int i=0; i < n; i++){
       for(int j=0; j< i + 1; j++){
            cout<<"*";
        }
        cout<<"\n"; 
    }
}

/*
3.
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
*/
void pattern3(int n){
    for(int i=0; i < n; i++){
       for(int j=0; j< i + 1; j++){
            cout<<j+1<<" ";
        }
        cout<<"\n"; 
    }
}

/*
4.
1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5 
*/
void pattern4(int n){
    for(int i=0; i < n; i++){
       for(int j=0; j< i + 1; j++){
            cout<<i+1<<" ";
        }
        cout<<"\n"; 
    }
}

/*
5.
*****
****
***
**
*
*/
void pattern5(int n){
    for(int i=0; i < n; i++){
       for(int j=0; j< n - i; j++){
            cout<<"*";
        }
        cout<<"\n"; 
    }
}

/*
6.
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 
*/
void pattern6(int n){
    for(int i=0; i < n; i++){
       for(int j=0; j< n - i; j++){
            cout<<j+1<<" ";
        }
        cout<<"\n"; 
    }
}

/*
7. Star pyramid
    *    
   ***   
  *****  
 ******* 
*********
*/
void pattern7(int n){
    for(int i=0; i < n; i++){
        // spaces on left
        for(int j=0; j< n - i - 1; j++)
            cout<<" ";        
        // stars
        for(int s=0; s < 2*i+1; s++)
            cout<<"*";
        // spaces on right
        for(int k=0; k< n - i - 1; k++)
            cout<<" ";        
        cout<<"\n"; 
    }
}

/*
8. Reverse Star pyramid
*********
 ******* 
  *****  
   ***   
    *    
*/
void pattern8(int n){
    for(int i=0; i < n; i++){
        // spaces on left
        for(int j=0; j< i; j++)
            cout<<" ";        
        // stars
        for(int s=0; s < 2*(n-i)-1; s++)
            cout<<"*";
        // spaces on right
        for(int k=0; k< i; k++)
            cout<<" ";        
        cout<<"\n"; 
    }
}

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
void pattern9(int n){    
    pattern7(n);
    pattern8(n);
}

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
void pattern10(int n){
    for(int i=0; i < 2*n - 1; i++){
        int stars = i + 1;
        if(i > n-1)
            stars = 2*n - i -1;
        for(int j=0; j < stars; j++)
            cout<<"*";     
        cout<<"\n";
    }
}

/*
11. Binary Number Triangle
1
01
101
0101
10101
*/
void pattern11(int n){
    int row_start = 1;
    for(int i=0; i < n; i++){
        int col = row_start;
        for(int j=0; j<i+1; j++){
            cout<<col;
            col = 1 - col;
        }
        row_start = 1 - row_start;
        cout<<endl;
    }
}

/*
12. Number Crown
1        1
12      21
123    321
1234  4321
1234554321
*/
void pattern12(int n){
    
    for(int i=1; i <= n; i++){
        // first numbers
        for(int j=1; j<=i; j++)
            cout<<j;
        // spaces
        for(int s=1; s<=2*(n-i); s++)
            cout<<" ";
        // last numbers
        for(int k=i; k>=1; k--)
            cout<<k;
        cout<<endl;
    }
}

/*
13. Increasing Number Triangle
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
*/
void pattern13(int n){
    int num = 1;
    for(int i=0; i<n; i++){
        for(int j=0; j<i+1; j++){
            cout<<num<<" ";
            num = num + 1;
        }
        cout<<endl;
    }
}

/*
14. Increasing Letter Triangle
A 
A B 
A B C 
A B C D 
A B C D E
*/
void pattern14(int n){    
    for(int i=0; i<n; i++){
        char ch = 'A';
        for(int j=0; j<i+1; j++){
            cout<<ch<<" ";
            ch = ch + 1;
        }
        cout<<endl;
    }
}

/*
15. Reverse Letter Triangle
A B C D E 
A B C D 
A B C 
A B 
A 
*/
void pattern15(int n){    
    for(int i=0; i<n; i++){
        char ch = 'A';
        for(int j=0; j<n-i; j++){
            cout<<ch<<" ";
            ch = ch + 1;
        }
        cout<<endl;
    }
}

/*
16. Alpha-Hill
    A    
   ABA   
  ABCBA  
 ABCDCBA 
ABCDEDCBA
*/
void pattern16(int n){    
    for(int i=0; i<n; i++){
        char ch = 'A';

        for(int j=0; j<n-i-1; j++)
            cout<<" ";
        for(int m=0; m<2*i+1; m++){
            cout<<ch;
            if(m<i)
                ch = ch + 1;
            else
                ch = ch - 1;
        }
        for(int k=0; k<n-i-1; k++)
            cout<<" ";
        cout<<endl;
    }
}
/*
17. Alpha-Triangle
E 
D E 
C D E 
B C D E 
A B C D E 
*/
void pattern17(int n){    
    for(int i=0; i<n; i++){
        for(int j=i+1; j>0; j--){
            char ch = 'A'+n-j;
            cout<<ch<<" ";
        }
        cout<<endl;
    }
}
/*
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
*/
void pattern18(int n){  
    // first symmetric
    for(int i=0; i<n; i++){
        for(int j=0; j<n-i; j++)
            cout<<"*";
        for(int s=0;s<2*i;s++ )
            cout<<" ";
        for(int k=0; k<n-i; k++)
            cout<<"*";
        cout<<endl;
    }
    // second symmetric
    for(int i=0; i<n; i++){
        for(int j=0; j<i+1; j++)
            cout<<"*";
        for(int s=0;s<2*(n-i-1);s++ )
            cout<<" ";
        for(int k=0; k<i+1; k++)
            cout<<"*";
        cout<<endl;
    }
}
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
void pattern19(int n){
    int spaces = 2*n;
    int stars = 0;
    for(int i=0; i<2*n-1; i++){
        if(i<n){
            spaces = spaces-2;
            stars++;
        }
        else{
            spaces = spaces+2;
            stars--;
        }
        for(int j=0; j<stars; j++)
            cout<<"*";
        for(int s=0; s<spaces; s++)
            cout<<" ";
        for(int k=0; k<stars; k++)
            cout<<"*";
        cout<<endl;
    }
}

/*
20. Hollow Rectangle
*****
*   *
*   *
*   *
*****
*/
void pattern20(int n){
    for(int i=0; i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0 || j==0 || i==n-1 || j==n-1)
                cout<<"*";
            else
                cout<<" ";            
        }
        cout<<endl;
    }
}

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
void pattern21(int n){
    for(int i=0;i<2*n-1;i++){
        for(int j=0;j<2*n-1;j++){
            // find distance from all sides
            int top = i;
            int left = j;
            int right = (2*n-2) - j;
            int down = (2*n-2) - i;
            int val = n - min(min(top,down),min(left,right));
            cout<<val<<" ";
        }
        cout<<endl;
    }
}
int main(){

    int n = 5;
    // pattern1(n);
    // pattern2(n);
    // pattern3(n);
    // pattern4(n);
    // pattern5(n);
    // pattern6(n);
    // pattern7(n);
    // pattern8(n);
    // pattern9(n);
    // pattern10(n);
    // pattern11(n);
    // pattern12(n);
    // pattern13(n);
    // pattern14(n);
    // pattern15(n);
    // pattern16(n);
    // pattern17(n);
    // pattern18(n);
    // pattern19(n);
    // pattern20(n);
    // pattern21(n);

    return 0;
}