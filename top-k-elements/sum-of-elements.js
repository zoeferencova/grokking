// Given an array, find the sum of all numbers between the K1’th and K2’th smallest elements of that array.

// Solution
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

const find_sum_of_elements = function(nums, k1, k2) {
  const minHeap = new Heap(nums, null, ((a, b) => b - a));

  for (let i = 0; i < k1; i++) {
    minHeap.pop();
  }

  let sum = 0;

  for (let i = 1; i < k2 - k1; i++) {
    sum += minHeap.pop();
  }

  return sum;
};


console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements([1, 3, 12, 5, 15, 11], 3, 6)}`)
console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements([3, 5, 8, 7], 1, 4)}`)

// Time complexity: O(N * logN)
// Space complexity: O(N)