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
*/
