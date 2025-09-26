// Description: 

// Task:
// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false

// My Solution:
function twoArePositive(a, b, c) {
  let count = 0
  const arr = []
  arr.push(a);arr.push(b);arr.push(c)
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0) count += 1
  }
  return count == 2 ? true : false
}

// My Explanation: Created a counter to be used later as a checker if true or false, put all the numbers in array to loop thru it and check each numbers.
