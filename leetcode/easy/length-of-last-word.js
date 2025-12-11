// Description:

// 58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 
// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

// My Solution: Refactored 
var lengthOfLastWord = function(s) {
    const tryArr = s.split(" ").filter((word) => word !== " " && word !== "")
    return tryArr[tryArr.length - 1].length
}

// My Explanation: First we split the string into an array of words using the split function with space as the delimiter. Then we filter out any empty strings or strings that are just spaces using the filter function. Finally, we return the length of the last word in the filtered array by accessing the last element using tryArr.length - 1 and getting its length property.

// Previous Solution:
var lengthOfLastWord = function(s) {
    const cleanArr = s.split(" ")
    const newArr = []
    
    for(let i = 0; i < cleanArr.length; i++){
        if(cleanArr[i] !== ' ' && cleanArr[i] !== ''){
            newArr.push(cleanArr[i]) ;
        }
    }

    return newArr[newArr.length - 1].length
}