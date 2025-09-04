// Description: 

// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

// My Solution: 

function unusedDigits(...nums) {
  const used = nums.join("").split("")
  
  const allNumbers = "0123456789".split("")
  
  const missing = allNumbers.filter(d => !used.includes(d))
  
  return missing.join("")
}

// My Explanation: we used spread operator to take all the arguments and join them into a single string. Then we split it into an array of individual characters (all used digits). We created an array of all digits from 0 to 9 to show all numbers. We then filtered this array and get only the unused digits by checking if they are not included in the used array. Lastly, we joined the missing digits into a single string.
