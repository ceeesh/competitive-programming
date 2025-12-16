// Description: 

// 70. Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 
// Constraints:

// 1 <= n <= 45

// My Solution:

var climbStairs = function(n) {
    if (n <= 2) return n;
    
    let older = 1;   // Step 1 (further back)
    let newer = 2;   // Step 2 (closer)
    
    for (let i = 3; i <= n; i++) {
        let current = newer + older;  // Add them
        older = newer;                // Slide: newer becomes older
        newer = current;              // Slide: current becomes newer
    }
    
    return newer;
};

// My Explanation: The problem can be solved using a dynamic programming approach. The number of ways to reach the nth step is the sum of the ways to reach the (n-1)th step and the (n-2)th step, since from those steps you can take either 1 or 2 steps to reach the nth step. We initialize two variables, 'older' and 'newer', to represent the number of ways to reach the two previous steps. We then iterate from step 3 to n, updating these variables accordingly. Finally, we return the number of ways to reach the nth step, which is stored in 'newer'.