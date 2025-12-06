// Description: 
// Unscramble the eggs.

// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

// Example
// unscrambleEggs("Beggegeggineggneggeregg")  =>  "Beginner"
// //             "B---eg---in---n---er---"
// Kata is supposed to be for beginners to practice reggular eggspressions, so commenting would be appreciated.

// My Solution:

function unscrambleEggs(word) {
return word.replace(/egg/g, "")
  
}

// My Explanation: // The function unscrambleEggs takes a string as input and uses the replace method with a regular expression to remove all occurrences of "egg" from the string, effectively unscrambling it. The regular expression /egg/g matches all instances of "egg" in the string, and the replace method replaces them with an empty string.

// start of the expression "/"
// "egg" is the substring we want to remove
// "/g" is a flag that indicates we want to replace all occurrences, not just the first one