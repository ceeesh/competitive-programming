// Description:

// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

// Solution:
function stringTransformer(str) {
    let splitStr = str.split('');
    let result = ''
  
    for(let i = 0; i < splitStr.length; i++){
      if(splitStr[i] === splitStr[i].toLowerCase()){
        result += splitStr[i].toUpperCase();
      }else {
        result += splitStr[i].toLowerCase();
      }
    }
  return result.split(' ').reverse().join(' ');
}

// My explanation: splitted the strings into an array, checks if the current index or letter is lowercase and turns it into a uppercase (vice versa). Lastly split them by space and reverse (so mag baliktad yung mga words ng pwesto) and join by space to turn it into a string.