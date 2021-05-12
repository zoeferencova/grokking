// Given a set of distinct numbers, find all of its permutations.
// Permutation is defined as the re-arranging of the elements of the set.

// Solution
const Deque = require('./collections/deque'); //http://www.collectionsjs.com

function find_permutations(nums) {
  const result = [], permutations = new Deque();
  permutations.push([]);
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const n = permutations.length;
    for (let p = 0; p < n; p++) {
      const oldPermutation = permutations.shift();
      for (let j = 0; j < oldPermutation.length + 1; j++) {
        const newPermutation = oldPermutation.slice(0);
        newPermutation.splice(j, 0, currentNumber); 
        newPermutation.length === nums.length ? result.push(newPermutation) : permutations.push(newPermutation);
      }
    }
  }
  return result;
}

console.log('Here are all the permutations:');
const result = find_permutations([1, 3, 5]);
result.forEach((permutation) => {
  console.log(permutation);
});

// Time complexity: O(N * N!)
// Space complexity: O(N * N!)

// Recursive solution
function generate_permutations(nums) {
    const result = [];
    generate_permutations_recursive(nums, 0, [], result);
    return result;
}
  
function generate_permutations_recursive(nums, index, currentPermutation, result) {
    if (index === nums.length) {
        result.push(currentPermutation);
    } else {
        // create a new permutation by adding the current number at every position
        for (let i = 0; i < currentPermutation.length + 1; i++) {
            newPermutation = currentPermutation.slice(0); // clone the permutation
            newPermutation.splice(i, 0, nums[index]); // insert nums[index] at index 'i'
            generate_permutations_recursive(nums, index + 1, newPermutation, result);
        }
    }
}

console.log('Here are all the permutations:');
const result = generate_permutations([1, 3, 5]);
    result.forEach((permutation) => {
    console.log(permutation);
});
