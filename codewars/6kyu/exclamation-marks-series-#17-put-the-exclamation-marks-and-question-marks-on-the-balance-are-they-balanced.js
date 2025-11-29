// Description:
// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

// My Solution:

function balance(left, right) {
  const getWeight = (direction) => {
    let weight = 0;
    for(let side of direction) {
      if(side === "!") weight += 2
      if(side === "?") weight += 3
    }
    return weight
  }
  const leftWeight = getWeight(left);
  const rightWeight = getWeight(right)
  return leftWeight > rightWeight ? "Left" : rightWeight > leftWeight ? "Right" : "Balance"
}
// My Explanation: We create a helper function getWeight that takes a string (direction) and calculates its weight by iterating through each character. If the character is an exclamation mark, we add 2 to the weight; if it's a question mark, we add 3. We then calculate the weights for both the left and right strings using this helper function. Finally, we compare the two weights and return "Left", "Right", or "Balance" based on which side is heavier or if they are equal.

// no refactor code
// function balance(left, right) {
//   let leftCount = 0;
//   let rightCount = 0;
  
//   const leftCheck = {
//     exclamation: 0,
//     question: 0
//   }
//   const rightCheck = {
//     exclamation: 0,
//     question: 0
//   }
  
//   for(let i = 0; i < left.length; i++){
//     if(left[i] === "!") leftCheck["exclamation"] = leftCheck["exclamation"] + 2
//      if(left[i] === "?") leftCheck["question"] = leftCheck["question"] + 3
//   }
  
//   for(let i = 0; i < right.length; i++){
//     if(right[i] === "!") rightCheck["exclamation"] = rightCheck["exclamation"] + 2
//      if(right[i] === "?") rightCheck["question"] = rightCheck["question"] + 3
//   }
  
//   for(const key in leftCheck) {
//     leftCount += leftCheck[key]
//   }
  
//    for(const key in rightCheck) {
//     rightCount += rightCheck[key]
//   }
  

//     return leftCount > rightCount ? "Left" : rightCount > leftCount ? "Right" : "Balance";
// }