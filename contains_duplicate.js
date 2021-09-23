// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

var containsDuplicate = function(nums) {
    let storage = {}; //initialize object
    
    for (let i = 0; i < nums.length; i++) {
        if (storage[nums[i]] === undefined) { //check if int does not exist in object
            storage[nums[i]] = nums[i]; // store index in object
        } else {
            return true; // return true if value appears at least twice in array
        }
        
    }
    return false; // return false if every element is distinct
};

// Runtime: 72 ms
// Memory Usage: 47.1 MB