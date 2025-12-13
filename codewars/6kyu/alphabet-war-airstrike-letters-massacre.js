// Description: 

// Introduction
// There is a war...between alphabets!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters called airstrike to help them in war - dashes and dots are spread throughout the battlefield. Who will win?

// Task
// Write a function that accepts a fight string which consists of only small letters and * which represents a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, and when the right side wins return Right side wins!. In other cases, return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3 
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3 
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.
// The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );

// Example (Input --> Output)
// "s*zz"           --> "Right side wins!"
// "*zd*qm*wp*bs*"  --> "Let's fight again!"
// "zzzz*s*"        --> "Right side wins!"
// "www*www****z"   --> "Left side wins!"

// My Solution:

function alphabetWar(fight){
  const left = {w: 4, p: 3, b: 2, s: 1}
  const right = {m: 4, q: 3, d: 2, z: 1}
  
  const battlefield = fight.split("")
  
  for(let i = 0; i < battlefield.length; i++){
    if(battlefield[i] === "*"){
      if(i > 0 && battlefield[i - 1] !== "*"){
        battlefield[i - 1] = "_"
      }
      if(i < battlefield.length - 1 && battlefield[i + 1] !== "*"){
        battlefield[i + 1] = "_"
      }
    }
  }
  
  let leftCount = 0;
  let rightCount = 0;
  
  for(let i = 0; i < battlefield.length; i++){
    const char = battlefield[i]
    
    if(left[char]) leftCount += left[char]
    if(right[char]) rightCount += right[char]
  }
  
  return leftCount > rightCount ? "Left side wins!" : rightCount > leftCount ? "Right side wins!" : "Let's fight again!"
}

// My Explanation: First, we define the power of each letter for both sides using objects. Then, we split the fight string into an array of characters to represent the battlefield. We iterate through the battlefield array and check for bombs ('*'). When we find a bomb, we replace the adjacent letters with underscores ('_') to indicate they have been destroyed. After processing the bombs, we initialize counters for both sides and iterate through the modified battlefield array again. For each letter, we check if it belongs to the left or right side and add its power to the respective counter. Finally, we compare the total power of both sides and return the appropriate result based on which side has a higher score or if it's a tie.