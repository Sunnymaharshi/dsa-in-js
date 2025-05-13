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
        not a stable sort
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
        stable sort 
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
        stable sort 
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
        stable sort
        divide and merge 
        1. divide array until u have only 1 element left
            divide array into left and right
            recursively divide both sides until u can't 
        2. merge both sides after dividing 
            each side will have single element or sorted elements
            merge them in sorted order
        Time Complexity:
            Best,Average & worst case: O(nlogn)
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
    Quick Sort 
        not a stable sort
        it is also a divide and conquer approach
        1.select a pivot element 
        2.partition the array 
            all elements less than pivot are on one side
            all elements greater than pivot are on other side
            means placing the pivot in it's position in sorted array
            *can use extra left and right arrays for this or inplace logic
        3.recursively sort sub arrays 
        Time Complexity:
            Best & Average case: O(nlogn)
                when pivot divides array into two roughly equal halves
            Worst case: O(n^2)
                when pivot is smallest or highest element repeatedly 
                resulting in unbalanced partitions
        code:
            quickSort(arr, left = 0, right = arr.length - 1) {                    
                if (left < right) {
                    const pivotindex = partition(arr, left, right);
                    quickSort(arr, left, pivotindex - 1);
                    quickSort(arr, pivotindex + 1, right);
                }
            }
            in-place partition logic:
                first element is pivot
                first index(i), last index (j)
                while i<j
                    with i 
                        find first element > pivot from left
                    with j 
                        find first element < pivot from right
                    move element < pivot to left and element > pivot to right
                    swap(i,j) if i < j
                    repeat while i < j 
                now i>j 
                    all elements right to j are > pivot 
                    all elements left to j including j are < pivot
                swap(low,j), now move pivot element to jth position             
                return j (pivotindex)
            partition(arr, low, high) {
                const pivot = arr[low];
                let i = low;
                let j = high;
                while (i < j) {
                    while (arr[i] <= pivot && i < high) {
                        i++;
                    }
                    while (arr[j] > pivot && j > low) {
                        j--;
                    }
                    if (i < j) {
                        swap(arr[i],arr[j])
                    }
                }
                swap(arr[low],arr[j])
                return j;
            }
Arrays
    2nd largest in an array 
        brute force
            sort array 
            check for duplicates
                start from n-2
                go to left until ele != arr[n-1]
        optimal 
            large = arr[0]
            large2 = -Infinity
            for(ele of arr){
                if(ele > large){
                    // move current large to second large
                    large2 = large;
                    // make current ele as large 
                    large = ele;
                }
                else if(ele < large && ele > large2){
                    // ele less than large and greater than 2nd largest
                    large2 = ele
                }
            }
    remove duplicates from sorted array 
        brute force 
            add all elements to a set 
            take elements from set and add to the array 
        optimal (two pointer approach)
            i = 0 // tracks last unique element
            j = 1 // tracks next element to be added
            while(j<arr.length){
                if(arr[j] != arr[i]){
                    // increase i & add new element
                    i++;
                    arr[i] = arr[j]
                    j++;
                }
            }
    leftRotateArrayBy1
        code: 
            first = arr[0];
            i = 0;
            while (i <= arr.length - 2) {
                arr[i] = arr[i + 1];
                i++;
            }
            arr[arr.length - 1] = first;
    RotateArrayByK places 
        if rotation happens by arr.length times 
            array will come to it's original order 
        so we can rotate arr by (K % arr.length) times 
        brute force 
            left rotate
                k = k%n
                store first k elements in temp
                    temp = arr.slice(0,k)
                shift remaining elements to the left 
                    for (let i = k; i < n; i++) {
                        arr[i - k] = arr[i];
                    }
                now place first k elements at the end
                    for (let i = 0; i < temp.length; i++) {
                        arr[i + n - k] = temp[i];
                    }
            right rotate 
                k = k%n
                store last k elements in temp
                    temp = arr.slice(-k)
                shift first n-k elements to the last
                    for (let i = 0; i < n - k; i++) {
                        arr[n - i - 1] = arr[n - k - i - 1];
                    }
                place last k elements at first
                    for (let i = 0; i < temp.length; i++) {
                        arr[i] = temp[i];
                    }
            Time Complexity: 
                O(k) for temp, O(n-k) & O(k)
                O(n+k)
        optimal (no extra space)
            left rotate 
                1.reverse first k elements
                2.reverse last (n-k) elements 
                3.reverse total array
            right rotate 
                1.reverse last k elements
                2.reverse first (n-k) elements
                3.reverse total array
            Time Complexity: 
                O(n+k)
    check if array is sorted and rotated (including 0 rotations)
        brute force
            i (0 to n-1)
                take first i elements and place at the end 
                check if it is non decreasing 
            Time Complexity:
                O(n^2)
        better (sliding window or pointer)
            *concatenate array with itself arr2 = [...arr,...arr]
            *arr2 will have original array if it is rotated 
            *instead of arr2, we can use i%n to traverse same array again 
            if (n <= 1) {
                return true;
            }
            let i = 1;
            let count = 1;
            while (i < 2 * n) {
                // check if it is in non-decreasing order
                if (arr[i % n] >= arr[(i - 1) % n]) {
                    count++;
                }
                // reset count (include current element to track)
                else {
                    count = 1;
                }
                i++;
                if (count === n) {
                    return true;
                }
            }
            return false;
            Time Complexity:
                O(2*n)
        optimal 
            check breaks (dips) in non-decreasing order 
            if array is sorted 
                0 breaks in non-decreasing order 
            if array is sorted & rotated 
                only 1 break in non-decreasing order 
                check non-decreasing order at ends 
                    arr[0]>=arr[n-1]
                ex:[2,1,3,4] dip 1 but it is not sorted 
            dip = 0;
            i = 1;
            while (i < arr.length) {
                if (arr[i] < arr[i - 1]) {
                    dip++;
                }
                if (dip > 1) {
                    break;
                }
                i++;
            }
            if (dip === 0) {
                return true;
            }
            if (dip === 1) {
                return arr[0] >= arr[arr.length - 1];
            }
            return false;
            Time Complexity:
                O(n)
    Move zeros to the end 
        brute force 
            store non zero elements in seperate array 
            add these at start of original array 
            fill remaining with 0s 
        optimal (2 pointer approach)
            i tracks 0s from left 
            j track non zero's from right 
            while(i<j){
                // go to first 0 from left
                while (arr[i] !== 0 && i < arr.length) {
                    i++;
                }
                // go to first non zero from right
                while (arr[j] === 0 && j >= 0) {
                    j--;
                }
                if (i < j) {
                    // swap zero from left with non-zero from right
                    swap(arr[i],arr[j])
                }
            }
        Time Complexity:
            O(n)
    union of two sorted arrays (without duplicates)
        optimal (two pointer approach)
        similar to mergeSort merge function
        code:
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
        Time Complexity:
            O(n+m)    
    intersectionOfSorted 
        code: 
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
        Time complexity:
            O(n+m)
    missing number in [0...n]
        given array with nums 0 to n 
        find missing number in that range 
        bruteforce 
            for i = 0 to n  
                check if i exists 
                if not return i 
            Time complexity:
                O(n^2)
        better 
            hash array 
                length n+1, fill -1 
            traverse array mark element index in hash 
            return index which has -1
            Time complexity:
                O(n)
        optimal-1 
            sum of n natural numbers is n*(n+1)/2 
            return n*(n+1)/2 - sum(arr)
            Time complexity:
                O(n)
        optimal-2 
            XOR
                same number xor is 0
                0xor0 = 0, 1xor1 = 0
            we have index 0 to n-1 in array
            xor indices(including length) and numbers 
            code: 
                res = arr.length;
                for (let i = 0; i < nums.length; i++) {
                    res ^= i;
                    res ^= nums[i];
                }
            Time complexity:
                O(n)
    longest subarray with sum K (0s & positives)
        bruteforce
            create all sub arrays and check sum and update max length 
            Time Complexity: O(n^2)
        better (optimal if array has negatives, 0s & positives)
            prefix sum hash table
                at each index holds sum of all nums upto that index 
            traverse the array with prefix sum hash
                hash<sum,index>
                x = sum upto i;
                check if extra sum (x-k) is present in previous prefixes 
                check k-x in prefix, let prefix[x-k] = j 
                we remove subarray upto j, then j+1 to i has sum k 
                store only first occurrence of index for a sum
                we sum already exists, we should not update it's index 
                we need to go as left as possible to get longest subarray
                *edge case if we update at every occurrence
                    [2,0,0,3] 3
                    prefix[2] will be 2 [2,0,0]
                    so we get only [3] as longest subarray instead of [0,0,3]
            code:
                const prefix = new Map();
                let sum = 0;
                let maxLen = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                    if (sum === k) {
                        maxLen = Math.max(maxLen, i + 1);
                    }
                    let extra = sum - k;
                    if (prefix.has(extra)) {
                        let len = i - prefix.get(extra);
                        maxLen = Math.max(maxLen, len);
                    }
                    if (!prefix.has(sum)) {
                        prefix.set(sum, i);
                    }
                }
            Time Complexity:
                O(n*logn)
                worst case(map): O(n^2)
        optimal (sliding window or two pointer)
            *array has only 0s & positives
            i,j tracks longest subarray of sum<=k 
            increase i unitl sum <= k (shrink arr)
            check sum is k or not 
            increase j
            code:
                let i = 0;
                let j = 0;
                let sum = arr[0];
                let maxLen = 0;
                while (j < arr.length) {
                    while (i <= j && sum > k) {
                        sum -= arr[i];
                        i++;
                    }
                    if (sum === k) {
                        maxLen = Math.max(maxLen, j - i + 1);
                    }
                    // increase j
                    j++;
                    if (j < arr.length) {
                        sum += arr[j];
                    }
                }
            Time Complexity:
                O(2n)
    two sum 
        any two elements with sum k 
        bruteforce
            for every element i 
                for every other element after i
                    because if i and j is checked
                    no need to check j and i again 
                    check if both sum is k 
            Time Complexity:
                O(n^2)
        better (hashing)
            store all numbers in a map<num,i>
            for every number 
                check if k-num exists in map 
            Time Complexity:
                O(n) if map takes O(1)
        optimal (2 pointer approach)
            this way u can't return indexes as arr is modified by Sort 
            to get indexes also, we need store index along with number
            i from left 
            j from right 
            while i<j
                if arr[i] + arr[j] === k 
                    return [i,j]
                else if arr[i]+arr[j] < k 
                    i++;
                else 
                    j--;
            Time Complexity:
                O(nlogn + n) without extra space 
    sort array of 0s, 1s & 2s 
        bruteforce
            sort array 
            Time Complexity: O(nlogn)
        better 
            counting sort 
                count 0s 1s & 2s 
                Time Complexity:
                    O(2*n)
        optimal (3 pointers approach)
            dutch national flag algorithm rules:
            left - 0s [0 to left-1]
            mid  - 1s [left to mid -1]
            unsorted [mid to right]
            right- 2s [right+1 to n-1]
            code: 
                left = 0, mid = 0;
                right = n-1;
                while (mid <= right) {
                    if (arr[mid] === 0) {
                        swap(arr[left], arr[mid]);
                        left++;
                        mid++;
                    } else if (arr[mid] === 1) {                    
                        mid++;
                    } else {
                        swap(arr[mid],arr[right]);
                        right--;
                    }
                }
            Time Complexity:
                O(n)     
    majority element 
        element that appears more than n/2 time 
        brute 
            for each element
                check count of element in array
                check if count > n/2
            Time Complexity:
                O(n^2)
        better1 
            use map to store the count of each element
            Time Complexity:
                O(n) if map takes O(1)
        better2
            if element occurs more than n/2 times it will 
            occupy arr[n/2] when sorted 
            sort array and return arr[n/2]
        optimal
            Moore's voting algorithm
            finds the majority element but does not keep exact count
            1. assume mj = first element as majority & count=1
                if element appears more than n/2 times 
                    it's count will be >=1
                    if count is 0 
                        no element appeared >n/2 times till now
                if(count==0){
                    take current element as majority
                    count=1
                }
                else{
                    count++ if mj appears again 
                    count-- if some other element appears
                }
                after loop ends mj holds majority element in arr
            2. if problem say majority might not exists 
                check count of mj 
            Time Complexity: 
                O(n)
    maxSubarraySum 
        bruteforce
            check sum of all sub arrays 
            Time Complexity: O(n^2)
        optimal
            kadane's algorithm
            sum that tracks subarray sum 
            take elements into the subarray 
                update sum with max
                if sum > 0
                    take more elements into the subarray
                if sum < 0
                    remove the subarray entirely
                    start creating new subarray
                    *because adding anything to -ve subarray will decrease sum 
            code:
                max = -infinity 
                sum = 0
                // print subarray
                let startIndex = 0;
                let ans;
                for (let i = 0; i < arr.length; i++) {
                    // starting new subarray
                    if (sum === 0) {
                        startIndex = i;
                    }
                    sum += arr[i];
                    if (sum > max) {
                        max = sum;
                        ans = [startIndex, i];
                    }
                    // sum is negative, don't consider this subarray
                    if (sum < 0) {
                        sum = 0;
                    }
                }
            Time Complexity: 
                O(n)
    Best Time to Buy & Sell Stock - 1
        bruteforce
            for every element i
                for every element after i 
                    check profit 
            Time Complexity:
                O(n^2)
        optimal
            let buy = arr[0];
            let profit = 0;
            for (let i = 1; i < arr.length; i++) {
                // sell & update max profit
                if (arr[i] > buy) {
                    profit = Math.max(profit, arr[i] - buy);
                }
                // always buy at cheaper price
                else if (arr[i] < buy) {
                    buy = arr[i];
                }
            } 
        Time Complexity:
            O(n)
    rearrange array elements by sign 
        input array has equal +ve's & -ve's
        rules 
            Every consecutive pair of integers have opposite signs
            For all integers with the same sign, the order is preserved.
            The rearranged array begins with a positive integer.
            positives at even indexes 
            negatives at odd indexes
        brute 
            store +ve's & -ve's in different arrays 
            for(i 0 to n/2){
                arr[2*i] = pos[i];
                arr[2*i+1] = neg[i]
            }
            Time Complexity:
                O(n) - 2 passes 
                space - O(n) 
        optimal
            res = new Array(n)
            let pInd = 0;
            let nInd = 1;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < 0) {
                    res[nInd] = arr[i];
                    nInd += 2;
                } else {
                    res[pInd] = arr[i];
                    pInd += 2;
                }
            }
            Time Complexity:
                O(n) - 1 pass 
                space - O(n)
        input array does not have equal +ve's & -ve's
        brute 
            if(pos.len > neg.len)
                for(i = 0 to neg.len){
                    arr[2*i] = pos[i];
                    arr[2*i+1] = neg[i]
                }
                ind = 2*neg.len
                for(j = neg.len to pos.len){
                    arr[ind] = pos[j]
                    ind++
                }
            else 
                do reverse of above 
            Time Complexity:
                O(2*n)
                space - o(n)
    next permutation 
        brute 
            generate all permutations in sorted order 
            return next permutation of given input 
            Time Complexity:
                O(n*n!)
        optimal 
            next permutation 
                it is slightly greater than given 
                we keep prefix same as mush as possible 
                change at end to get next greater permutation
            1.find dip - longest prefix
                dip = from right left, decrease in value 
                means we can get greater value at dip 
                [2,1,5,3] dip is at element 1(index 1)                
            2.if dip is not found 
                given is last permutation
                reverse it to get next permutation
            3.if dip is present 
                find smallest but > dip element & swap 
                reverse elements after dip to get least number 
            Time Complexity:
                O(3*n)
    find leaders in array 
        everything on right of leader is smaller
        bruteforce
            for every element
                check all elements after it are smaller  
        optimal
            track max from right 
            leaders stored from right to left order in arr 
            code:
                max = -infinity
                for i n-1 to 0
                    if(arr[i]>max){
                        max = arr[i]
                        leaders.push(arr[i])
                    } 
            Time Complexity:
                O(n)
    longest consecutive sequence 
        5(1,2,3,4,5) in [4,5,1,2,3]
        brute 
            for every element
                check consecutive numbers in the arr  
            Time Complexity:
                O(n^2)
        better 
            sort array & track longest sequence
            arr.sort((a, b) => a - b);
            let last = -Infinity;
            let max = 0;
            let count = 0;
            for (let ele of arr) {
                if (ele - 1 === last) {
                    count++;
                    last = ele;
                }
                // restart the sequence
                else if (ele !== last) {
                    count = 1;
                    last = ele;
                }
                max = Math.max(max, count);
            }
            Time Complexity:
                O(nlogn + n)
        optimal
            store all elements in set 
            only start checking from start number in sequence
                for start, start - 1 does not exists 
            code:
                const set = new Set(arr);
                let max = 0;
                for (const ele of set) {
                    // for starting element of seq
                    if (!set.has(ele - 1)) {
                    let count = 1;
                    let temp = ele;
                    while (set.has(temp + 1)) {
                        count++;
                        temp++;
                    }
                    max = Math.max(max, count);
                    }
                }
            Time Complexity:
                O(3n)
                space O(n)
    set matrix zeros 
        if zero found, make it's row and col 0s 
        brute 
            traverse matrix 
                *if zero found make it's row & col -1
            make all -1's to 0s 
            Time Complexity:
                O((m*n)*(m+n) + m*n)
        better 
            mark cols & rows that need to be 0s in seperate arrays 
            traverse matrix and make 0s
            Time Complexity:
                O(2(m*n))
                space O(n+m)
        optimal 
            instead of extra arrays to mark rows & cols
            use first row and first col 
                since row0 and col0 overlaps 
                *use col0 variable for col  
            *do not update first row & first col at beginning
                for every element we check them
                if they get updated at first it will cause incorrect 0s 
            traverse elements other than first row and first col 
                update 0s as per first row & first col 
            update first row since first row depends on mat[0][0]
                which we can't update first by using col0 
            update first col at end at it depends on external variable
            Time Complexity:
                O(2(m*n))
    Rotate image 90deg 
        rotate matrix 90deg clockwise 
        bruteforce
            create new matrix 
            move first row to last column 
            2nd row to 2nd last column so on 
                i,j -> j,n-1-i
            Time Complexity:
                O(m*n)
                space O(m*n)
        optimal
            transpose the matrix (rows->cols)
                diagonal stays same
                swap elements with opposite row & col element
            reverse every row 
            code:
                // transpose matrix
                for (let i = 0; i < n - 1; i++) {
                    for (let j = i + 1; j < n; j++) {
                    // swap i,j with j,i
                    [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
                    }
                }
                for (let i = 0; i < n; i++) {
                    mat[i].reverse();
                }
            Time Complexity:
                O(n^2)           
*/
