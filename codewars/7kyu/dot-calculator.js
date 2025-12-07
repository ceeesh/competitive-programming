// Description:

// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""

// My Solution:

function dotCalculator(equation) {
  const splitStr = equation.split(" ")
  
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "//": (a, b) => a / b,
  }
  
  const result = operations[splitStr[1]](splitStr[0].length, splitStr[2].length)

  return ".".repeat(result)
}

// My Explanation: We split the input string into an array of three elements: the first number (as dots), the operator, and the second number (as dots). We then define an object that maps each operator to its corresponding arithmetic function. Using the lengths of the dot strings, we perform the operation and return a string of dots corresponding to the result. If the result is zero, we return an empty string.
