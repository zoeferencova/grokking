// Given a set of numbers that might contain duplicates, find all of its distinct subsets.

// Solution
const find_subsets = function(nums) {
    nums.sort((a, b) => a - b);
    subsets = [];
    subsets.push([]);
    let startIndex = 0, endIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        startIndex = 0;
        if (i > 0 && nums[i] === nums[i - 1]) startIndex = endIndex + 1;
        endIndex = subsets.length - 1;
        for (let j = startIndex; j <= endIndex; j++) {
            const newSubset = subsets[j].slice(0);
            newSubset.push(nums[i]);
            subsets.push(newSubset);
        }
    }
    return subsets;
};

console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3, 3]);
result.forEach((subset) => {
    console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3, 3]);
result.forEach((subset) => {
    console.log(subset);
});
  
// Time complexity: O(N * 2^N)
// Space complexity: O(N * 2^N)