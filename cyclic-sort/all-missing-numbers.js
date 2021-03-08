// We are given an unsorted array containing numbers taken from the range 1 to ‘n’. 
// The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

// My solution
const find_missing_numbers = function(nums) {
    missingNumbers = [];
    let i = 0;
    while (i < nums.length) {
        let j = nums[i] - 1;
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
    }
  
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i+1) {
            missingNumbers.push(i+1)
        }
    }
  
    return missingNumbers;
};

// Time complexity: O(n)
// Space complexity: O(1)