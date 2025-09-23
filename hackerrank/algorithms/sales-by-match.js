// Description:

// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example
// n = 7
// ar = [1,2,1,2,1,3,2]

// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, ar[i], the colors of the socks in the pile.

// Constraints

//  where 
// Sample Input

// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output

// 3
// Explanation

// sock.png

// There are three pairs of socks.

// My Solution:
function sockMerchant(n, ar) {
  const socks = {}
  let pairs = 0;
  
  for(let i = 0; i <ar.length; i++){
    socks[ar[i]] = (socks[ar[i]] || 0) + 1;
    if(socks[ar[i]] % 2 == 0){
        pairs += 1
    }
  }
  return pairs
}

// My Explanation: The function counts the number of pairs of socks with matching colors. It does this by keeping track of the number of socks of each color in the `socks` object. Whenever it finds an even count of a particular color, it increments the `pairs` counter