// Description:

// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

// Examples (input -> output)
// "kata" -> false ('a' comes after 'k')
// "ant" -> true (all characters are in alphabetical order)
// Good luck :)

// My Solution:

function alphabetic(s) {
  const alphabet = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
    j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17,
    r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  }
  
  for(let i = 0; i < s.length - 1; i++){
    if(alphabet[s[i]] > alphabet[s[i + 1]]){
      return false
    }
  } 
  return true
}

// My Explanation: The function alphabetic checks if the input string is in alphabetical order by comparing the position of each character in the alphabet. It uses an object to map each letter to its corresponding position (1 for 'a', 2 for 'b', etc.). The function iterates through the string, comparing each character with the next one. If it finds any character that comes after a character with a higher position, it returns false. If it completes the loop without finding such a case, it returns true, indicating that the string is in alphabetical order.