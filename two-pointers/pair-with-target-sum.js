// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// Two pointer approach
const pair_with_targetsum = function(arr, target_sum) {
    let pointer1 = 0, pointer2 = arr.length-1;
    while (pointer1 < pointer2) {
        let sum = arr[pointer1] + arr[pointer2];
        if (sum === target_sum) {
            return [pointer1, pointer2];
        } else if (sum < target_sum) {
            pointer1++;
        } else if (sum > target_sum) {
            pointer2--;
        }
    }
    return [-1, -1];
}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));

// Time complexity: O(n)
// Space complexity: O(1)

// Hash table approach
function pair_with_target_sum(arr, targetSum) {
    const nums = {}; // to store numbers and their indices
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (targetSum - num in nums) {
            return [nums[targetSum - num], i];
        }
        nums[arr[i]] = i;
    }
    return [-1, -1];
}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));

// Time complexity: O(n)
// Space complexity: O(n)