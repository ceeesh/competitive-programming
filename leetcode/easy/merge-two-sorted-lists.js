// Description:

// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.


// Example 1:
// 1->2->4
// 1->3->4
// 1->1->2->3->4->4
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

// My Solution:

var mergeTwoLists = function(list1, list2) {
      // Step 1: Create a dummy node to simplify the code
    let dummy = new ListNode(0);
    let current = dummy;
    
    // Step 2: Loop while both lists have nodes
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            // list1's value is smaller, so attach it
            current.next = list1;
            list1 = list1.next;  // Move list1 forward
        } else {
            // list2's value is smaller (or equal), so attach it
            current.next = list2;
            list2 = list2.next;  // Move list2 forward
        }
        current = current.next;  // Move current forward
    }
    
    // Step 3: Attach remaining nodes (one list is now empty)
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }
    
    // Step 4: Return the merged list (skip the dummy node)
    return dummy.next;
};

// My Explanation: We create a dummy node to simplify the merging process. We then iterate through both lists, comparing the current nodes and attaching the smaller one to the merged list. Once we reach the end of one list, we attach the remaining nodes of the other list. Finally, we return the merged list, skipping the dummy node.