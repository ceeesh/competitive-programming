// Description:
// Write a function that:

// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.

// My Solution:
function isIntArray(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return true;

  return arr.every(el => typeof el === 'number' && Number.isFinite(el) && el % 1 === 0);
}

// My Explanation: The function checks if the input is an array and if it's empty. If not, it verifies that all elements are finite numbers without decimals.