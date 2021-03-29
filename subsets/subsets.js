// Given a set with distinct elements, find all of its distinct subsets.

// Solution
function find_subsets(nums) {
    const subsets = [];
    subsets.push([]);
    for (i = 0; i < nums.length; i++) {
        currentNumber = nums[i];
        const n = subsets.length;
        for (let j = 0; j < n; j++) {
            const newSubset = subsets[j].slice(0);
            newSubset.push(currentNumber);
            subsets.push(newSubset);
        }
    }
    return subsets;
}


console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3]);
result.forEach((subset) => {
    console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3]);
result.forEach((subset) => {
    console.log(subset);
});

// Time complexity: Since, in each step, the number of subsets doubles as we add each element to all the existing subsets, therefore, we will have a total of O(2^N)
// subsets, where ‘N’ is the total number of elements in the input set. And since we construct a new subset from an existing set, therefore, 
// the time complexity of the above algorithm will be O(N*2^N).

// Space complexity: All the additional space used by our algorithm is for the output list. Since we will have a total of O(2^N) subsets, 
// and each subset can take up to O(N) space, therefore, the space complexity of our algorithm will be O(N*2^N).