 // Description:

// Your task is to implement a function that takes two inputs, x and y, and returns the value of x raised to the power of y.

// Simple, right? But you are NOT allowed to use Math.pow();

// Both x and y will be natural numbers (non-negative integers) in range 0 <= x,y <= 13.

// Special Case: For this challenge, 0^0 is defined to be 1.

// My Solution:

function power(x, y) {
  // Special case: 0^0 = 1
  if (x === 0 && y === 0) return 1;
  
  // Any number to the power of 0 is 1
  if (y === 0) return 1;
  
  // 0 to any positive power is 0
  if (x === 0) return 0;
  
  // Calculate x^y by multiplying x by itself y times
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
  }
  
  return result;
}

// My Explanation: Start with 1, then multiply it by x exactly y times to get x^y.