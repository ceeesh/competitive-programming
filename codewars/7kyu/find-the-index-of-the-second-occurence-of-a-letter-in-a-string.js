// Description:
// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, or if the letter occurs only once in the string, -1 should be returned.

// Examples:

// for inputs  "Hello world!!!", 'l'  ->  return 3
// for inputs  "Hello world!!!", 'A'  ->  return -1
// Good luck ;) And don't forget to rate this kata if you liked it.

// My Solution:

function secondSymbol(string, symbol) {
    const firstIndex = string.indexOf(symbol);
    if (firstIndex === -1) return -1;
    const secondIndex = string.indexOf(symbol, firstIndex + 1);
    return secondIndex;
}
// My Explanation: First we find the index of the first occurrence of the symbol using indexOf. We then check if the firstIndex is -1, which means the symbol is not present in the string at all, so we return -1. If the symbol is found, we then look for the second occurrence by calling indexOf again, but this time starting the search just after the first occurrence (firstIndex + 1). Finally, we return the index of the second occurrence, which will be -1 if it doesn't exist.
