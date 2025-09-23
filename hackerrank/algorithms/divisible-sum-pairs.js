// Description:

// Given an array of integers and a positive integer , determine the number of  pairs where  and  +  is divisible by .

// Example

// ar = [1, 2, 3, 4, 5, 6]
// k = 5

// Three pairs meet the criteria: [1, 4], [2, 3] and [4, 6].

// Function Description

// Complete the divisibleSumPairs function in the editor below.

// divisibleSumPairs has the following parameter(s):

// int n: the length of array ar
// int ar[n]: an array of integers
// int k: the integer divisor
// Returns
// - int: the number of pairs

// Input Format

// The first line contains 2 space-separated integers, n and k.
// The second line contains n space-separated integers, each a value of arr[i].

// Constraints

// Sample Input

// STDIN           Function
// -----           --------
// 6 3             n = 6, k = 3
// 1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]

// Sample Output
//  5

// My Solution:
function divisibleSumPairs(n, k, ar) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                count++
            }
        }
    }
    return count
}
// My Explanation: We use two nested loops to iterate through all unique pairs of elements in the array. The outer loop picks the first element of the pair, and the inner loop picks the second element, ensuring that the second element always comes after the first to avoid duplicate pairs. For each pair, we check if the sum of the two elements is divisible by k using the modulus operator. If it is, we increment our count. Finally, we return the total count of such pairs.