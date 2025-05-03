/*
Time complexity
    Omega (Ω)
        best case scenario or lower bound
    Theta (θ)
        average case scenario or tightest bound 
        best of all worst case scenarios
    Big-Oh (O)
        worst case scenario or upper bound
    always use Big O for time complexity
    avoid constants
    avoid lower values 
Space complexity
    memory space
    always use Big O for space complexity
    Auxilary space + input space
    Auxilary space
        the space that u take to solve the problem
    input space
        the space that u take to store the input
        
Tips 
    never modify the input while solving problem
    most servers take 1s for 10^8 operations

Maths 
    log(y) base x 
        amount of times x needs to be multiplied by itself to result in y.
        to count the digits 
            u only need to divide by 10 until res is > 0
            log(n) base 10 
                returns power of 10 u need to get n
                Math.floor(log(n) + 1) gives count of digits
    modulus 
        by 10
            gives reminder when divided by 10
            gives last digit in the number 
            ex: 789 % 10 => 9
            to get all digits (reverse order)
                remove last digit 
                    divide by 10 and round it 
                modulus by 10 to get last digit
                repeat until u get 0 after dividing
                Time Complexity: log(n) base 10
            

        by n 
            gives reminder when divided by n 
            x % n => r (less than n)
    prime number 
        number that has exactly 2 factors (1 & itself)
        1 to n, if no number except(1 & n) can divide n without remainder 
        then n is a prime number
        to find all divisors 
            ex: 9
                1*8
                2*4  => sqrt(8)
                4*2
                8*1
                after sqrt(n) divisors are reverse of before sqrt(n)
            check divisors upto sqrt(n)
            add counter divisor for each with n/div 
        to check prime 
            we can just check divisors upto sqrt(n)
    GCD(greatest common divisor) or HCF (highest common factor)
        highest number that can divide both numbers without remainder 
        check divisors of min number 
        Euclidean Algorithm
            gcd(a,b) = gcd(a-b,b) where a > b 
            do this until a or b becomes 0, other one is gcd 
            modulus 
                instead of subtracting b from a until it can't 
                we can use a%b
                gcd(a,b) = gcd(a%b,b) where a>b
Hashing 
    precomputation (number hashing)
        to count occurrence of each number in an array 
        if numbers range are limited ex: 1-10
        we can created array of len 11 & store count in arr[num]
        for strings (a-z), we can use the array of len 26 to keep the count 
    Map 
        stores key value pairs 
        insertion and retrieval take O(1), very rarely O(n) due to internal collisions
        uses some hashing methods to store data 
        division method
            lets say we have array of max len 10 
            for every element we do num%10 to get the index to store it 
            if collison occurs, create new node (linked list) and add it the index
            this new element will be inserted in sorted order 
            if lot of numbers are added to same index, it will take O(n)

Sorting 
    Selection Sort
        select minimums & swap 
        1. start from i to n-2
            n-2 as no need to swap last element with itself
        2. search for min 
            range i to n-1 & swap with ith index 
            search min in right side as left is already sorted 
        code:
            for(i=0; i<=n-2; i++){
                min_idx = i;
                for(j=i; j<=n-1; j++){
                    if(arr[j]<arr[min_idx])
                        min_idx = j
                }
                swap(arr[i],arr[min_idx])
            }
        Time Complexity: O(n^2)

    Bubble Sort 
        adjacent swapping - push max elements to last by adjacent swaps
        1. start from i to n-1             
        2. swap adjacents  
            range i to n-1-i, swap adjacent elements (left side)
            max element will be moved to last index 
            right side will be sorted 
        Bubble Sort Optimized (best case)
            if array is already sorted 
            we can reduce time complexity by breaking loop if no swap is occurred 
            best for mostly sorted array
        code: 
            for(i=0; i<=n-1; i++){
                for(j=1; j<=n-1-i; j++){
                    if(arr[j]<arr[j-1])
                        swap(arr[j],arr[j-1])
                }                
            }
        Time Complexity: 
            O(n^2) for worst and average case
            O(n) for best case 
         
    Insertion Sort 
        always takes an element and inserts it in correct position
        1. for each element i (0 to n-1)
        2. swap it with prev elements until u can't swap 
            puts ith element in correct position
            remaining elements right shifts by 1
        code:
            for(i=0; i<=n-1; i++){
                j = i;
                while (j > 0 && arr[j] < arr[j - 1]) {
                    swap(arr[j],arr[j-1]);
                    j--;
                }                
            }
        if array is already sorted it never enters while loop
        Time Complexity: 
            O(n^2) for worst case and average case
            O(n) for best case
    
    Merge sort
        divide and merge 
        1. divide array until u have only 1 element left
            divide array into left and right
            recursively divide both sides until u can't 
        2. merge both sides after dividing 
            each side will have single element or sorted elements
            merge them in sorted order
        code:
            mergeSort(arr){
                if(arr.length<=1){
                    return arr;
                }
                mid = Math.floor(arr.length/2);
                left = mergeSort(arr.slice(0,mid));
                right = mergeSort(arr.slice(mid));
                return merge(left,right);
            }
            merge(left,right){
                res = []
                l=0
                r=0
                while(l<left.length && r<right.length){
                    if(left[l]<right[r]){
                        res.push(left[l])
                        l++
                    }
                    else {
                        res.push(right[r])
                        r++
                    }
                }
                res.concat(left.slice(l))
                res.concat(right.slice(r))
                return res;
            }
*/
