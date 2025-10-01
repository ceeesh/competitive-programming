// Description: 

// There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.

// The operation of drinking a full water bottle turns it into an empty bottle.

// Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.

 

// Example 1:


// Input: numBottles = 9, numExchange = 3
// Output: 13
// Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
// Number of water bottles you can drink: 9 + 3 + 1 = 13.
// Example 2:


// Input: numBottles = 15, numExchange = 4
// Output: 19
// Explanation: You can exchange 4 empty bottles to get 1 full water bottle. 
// Number of water bottles you can drink: 15 + 3 + 1 = 19.
 

// Constraints:

// 1 <= numBottles <= 100
// 2 <= numExchange <= 100

// My Solution:

var numWaterBottles = function(numBottles, numExchange) {
     // Start by drinking all initial bottles
    let totalDrunk = numBottles;
    let emptyBottles = numBottles;
    
    // Keep exchanging while we have enough empties
    while (emptyBottles >= numExchange) {
        // Calculate new bottles from exchange
        const newBottles = Math.floor(emptyBottles / numExchange);
        const remainingEmpty = emptyBottles % numExchange;
        
        // Drink the new bottles
        totalDrunk += newBottles;
        
        // Update empties: remaining + newly emptied
        emptyBottles = remainingEmpty + newBottles;
    }
    
    return totalDrunk;
};

// My Explanation:
// This solution simulates the bottle exchange process. We start by drinking all initial bottles and tracking them as empties.
// Then we loop: convert empties to new bottles (dividing by exchange rate), drink those new bottles, and update our empty count
// (leftover empties + newly drunk bottles). Continue until we can't afford another exchange.