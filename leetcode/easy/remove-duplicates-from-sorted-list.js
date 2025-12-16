// Description:

// 83. Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

// My Solution:

var deleteDuplicates = function (head) {
    let current = head

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }

    return head
};

// My Explanation: The function iterates through the linked list using a pointer 'current'. For each node, it checks if the value of the current node is equal to the value of the next node. If they are equal, it means there is a duplicate, so it skips the next node by adjusting the 'next' pointer of the current node to point to the node after the next one. If they are not equal, it simply moves the 'current' pointer to the next node. This process continues until all nodes have been checked, effectively removing duplicates from the sorted linked list. Finally, it returns the modified head of the list.

