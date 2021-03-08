// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. 
// The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.

// My solution
const find_all_duplicates = function(nums) {
    duplicateNumbers = [];
    let i = 0;
    while (i < nums.length) {
        if (nums[i] !== i+1) {
            let j = nums[i] - 1;
            if (nums[i] !== nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            } else {
                duplicateNumbers.push(nums[i]);
                i++;
            }
        } else {
            i++;
        }
    }
    return duplicateNumbers;
};

// Given solution
function find_all_duplicates(nums) {
    let i = 0;
    while (i < nums.length) {
        j = nums[i] - 1;
        if (nums[i] != nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
        } else {
            i++;
        }
    }
  
    duplicateNumbers = [];
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            duplicateNumbers.push(nums[i]);
        }
    }
  
    return duplicateNumbers;
}

console.log(find_all_duplicates([3, 4, 4, 5, 5]));
console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]));

// Time complexity: O(n)
// Space complexity: O(1)