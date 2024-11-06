#include<iostream>
using namespace std;
/*
    Data Types 
        int 
            4 bytes  
            -2147483648 to 2147483647          
        long
            8 bytes
            -9223372036854775808 to 9223372036854775807
        long long 
            -(2^63) to (2^63)-1
        float 
            4 bytes
        double
            8 bytes 
        long double
            12 bytes
        string 
            takes only 1 word
            to take total line 
                getline(cin,str);
            length
                str.size()
        char
            to store single character 
            must use single quote
        array
            ex:int arr[3];
*/
/*
    pass by value
        value is copied and passed to function
*/
void passByValue(int num){
    num = 3;
}
/* 
    pass by reference
        address of varibale is passed to function
        add & before function parameter
        arrays are by default passed by reference, don't add &
        vectors, maps etc need & to pass by reference
*/ 
void passByRef(int &num){
    num = 3;
}

int main(){
    int n = 10;
    
    passByValue(n);
    cout<<n<<"\n";  // 10

    passByRef(n);
    cout<<n<<"\n";  // 3, since value of same address is changed


    return 0;
}
