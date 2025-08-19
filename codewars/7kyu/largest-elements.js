// Description:

// Write a program that outputs the top n elements from a list.

// Example:

// k = 2; list = [7, 6, 5, 4, 3, 2, 1]
// ==> [6, 7]

// Solution:
function largest(n, array) {
  let sortedArr = array.sort((a,b) => b - a);
  const result = [];
  for(let i = 0; i < n; i++){
    result.push(sortedArr[i])
  }
  return result.sort((a,b) => a - b);
}
// My Explanation: we sorted the array from highest to lowest, so array becomes [7, 6.....1, 0] - next step is loop thru it based on n times, if n = 2, we only get the two highest digits from the sortedArr. Last step would be sort it again to numbers from lowest to highest
