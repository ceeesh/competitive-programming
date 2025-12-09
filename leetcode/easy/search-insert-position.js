// Description:

// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 
// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

// My Solution:
var searchInsert = function(nums, target) {
    if(nums.includes(target)) {
        return nums.indexOf(target)
    }
    const array = [...nums, target].sort((a, b) => a - b)
    return array.indexOf(target)
};

// My Explanation: First we check if the target is already in the array using includes function. If it is, we return its index using indexOf function. If not, we create a new array by spreading the original array and adding the target to it. Then we sort the new array in ascending order and return the index of the target in the sorted array using indexOf function.