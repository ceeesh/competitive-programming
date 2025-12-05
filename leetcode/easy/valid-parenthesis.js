// Description: 

// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false


// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// My Solution:
function isValid(s) {
    const stack = [];

    const closing = {
        ")": "(",
        "}": "{",
        "]": "[",
    }

    for (let char of s) {
        if (char in closing) {

            if (stack[stack.length - 1] !== closing[char]) {
                return false
            }
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    return stack.length === 0
}

// My Explanation: Use a stack to keep track of opening brackets. For each closing bracket, check if it matches the last opening bracket in the stack. If it does, pop the stack; if not, return false. At the end, if the stack is empty, all brackets were matched correctly, so return true.