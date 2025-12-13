// Description:

// Vampire Numbers
// Our loose definition of Vampire Numbers can be described as follows:

// 6 * 21 = 126
// # 6 and 21 would be valid 'fangs' for a vampire number as the 
// # digits 6, 1, and 2 are present in both the product and multiplicands

// 10 * 11 = 110
// # 110 is not a vampire number since there are three 1's in the
// # multiplicands, but only two 1's in the product
// Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.

// My Solution:

function vampireTest(a, b) {
    
  const product = a * b;
  
  const fangDigits = (String(a) + String(b)).split("").sort().join("")

  const productDigits = String(product).split("").sort().join("")
  
  return productDigits === fangDigits
}

// My Explanation: First we calculate the product of the two fangs. Then we convert both fangs and the product to strings, split them into individual characters, sort those characters, and join them back into strings. Finally, we compare the sorted strings of the fangs and the product. If they are equal, it means the product is a valid vampire number, so we return true; otherwise, we return false.