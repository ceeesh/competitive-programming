// Description: 

// Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

// For example, assume the bill has the following prices: bill = [2, 4, 6]. Anna declines to eat item k = bill[2] which costs 6. If Brian calculates the bill correctly, Anna will pay 3. If he includes the cost of 6, he will calculate 6. In the second case, he should refund 3 to Anna.

// Function Description

// Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

// bonAppetit has the following parameter(s):

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill
// Input Format

// The first line contains two space-separated integers n and k, the number of items ordered and the -based index of the item that Anna did not eat.
// The second line contains  space-separated integers  where .
// The third line contains an integer, , the amount of money that Brian charged Anna for her share of the bill.

// My Solution:

function bonAppetit(bill, k, b) {
    const total = bill.reduce((acc, cur) => acc + cur, 0);
    
    // Anna's actual share (excluding the item she didn't eat)
    const annaActualShare = (total - bill[k]) / 2;
    
    // How much Brian charged Anna
    const brianCharged = b;
    // If Brian charged correctly, print "Bon Appetit"
    // Otherwise, print how much he should refund
    if (annaActualShare === brianCharged) {
        console.log("Bon Appetit");
    } else {
        console.log(brianCharged - annaActualShare);
    }
}

// My Explanation: We first calculate the total bill using the reduce method. Then, we compute Anna's actual share by subtracting the cost of the item she didn't eat (bill[k]) from the total and dividing by 2. We then compare Anna's actual share with the amount Brian charged her (b). If they are equal, we print "Bon Appetit". If not, we calculate the difference (brianCharged - annaActualShare) and print that amount, which represents how much Brian owes Anna.