// Description:
// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

// My Solution:

function longestCommonPrefix(strs) {
   
   if(!strs) return ""
   if(strs.length === 1) return strs[0]

   let prefix = strs[0]

   for(let i = 0; i < strs.length; i++){
    while(strs[i].indexOf(prefix) !== 0){
        prefix = prefix.substring(0, prefix.length - 1)

        if(prefix === "") return ""
    }
   }
   return prefix
}

// My Explanation: The function starts by checking if the input array is empty or has only one string. If it's empty, it returns an empty string; if it has one string, it returns that string as the longest common prefix. We initialize the prefix with the first string in the array. Then, we iterate through each string in the array and check if the current prefix is a prefix of that string using indexOf. If it's not, we shorten the prefix by removing the last character and repeat this process until we find a common prefix or the prefix becomes empty. Finally, we return the longest common prefix found.