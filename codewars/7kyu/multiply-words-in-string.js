// Description: 

// You are to write a function that takes a string as its first parameter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string", 3, 5) 

function modifyMultiply (str,loc,num) {
  const newWords = []
  const words = str.split(" ")
  const targetWord = words[loc]
  
  for(let i = 0; i < num; i++){
    newWords.push(targetWord)
  }
  return newWords.join("-")
} 

// My Explanation: The function modifyMultiply takes a string of words, an integer loc, and another integer num as parameters. It first splits the input string into an array of words. It then retrieves the word at the index specified by loc. Next, it creates a new array and populates it with the target word repeated num times. Finally, it joins the elements of the new array with hyphens and returns the resulting string.