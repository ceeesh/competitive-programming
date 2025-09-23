// Description:

// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we made for your code:

// Function have to count words and not spaces. You have to be sure that you doing it right
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
// Doublecheck that words with chars like -, ', ` are counted right.

// My Solution:

// function countWords(str) {
  
//   str = str.trim();

//   if (str.length === 0) return 0;

//   const words = str.split(/\s+/);

//   return words.length;
// }

// My Explanation: The function first trims any leading or trailing whitespace from the input string. If the resulting string is empty, it returns 0. Otherwise, it splits the string into an array of words using a regular expression that matches one or more whitespace characters as the delimiter. Finally, it returns the length of the array, which represents the number of words in the string.