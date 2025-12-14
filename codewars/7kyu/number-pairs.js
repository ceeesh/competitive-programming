// Description:

// In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.

// Note: Both arrays have the same dimensions.

// Example:
// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

// My Solution:

function getLargerNumbers(a, b) {
  const newArr = [];
  for(let i = 0; i < a.length; i++){
    if(a[i] >= b[i]){
      newArr.push(a[i])
    }else if(b[i] >= a[i]){
      newArr.push(b[i])
    }
  }
  return newArr
}

// My Explanation: We create a new array to store the larger numbers. We iterate through the arrays using a for loop, comparing the elements at each index. We push the larger of the two elements into the new array. Finally, we return the new array containing the larger numbers.

// Alternative Solution: 

function getLargerNumbers(a, b) {
  const newArr = []
  for(let i = 0; i < a.length; i++){
    newArr.push([a[i], b[i]])
  }
  const resultArr = []
  let counter = 0
  while(counter !== newArr.length){
    resultArr.push(Math.max(...newArr[counter]))
    counter += 1
  }
 
  return resultArr

}