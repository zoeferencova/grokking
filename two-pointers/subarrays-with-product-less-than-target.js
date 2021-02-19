// Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

// My solution
const find_subarrays = function(arr, target) {
    result = [];
    for (let i = 0; i < arr.length; i++) {
        let product = 1;
        let pointer = i;
        while (product < target) {
            product *= arr[pointer];
            if (product < target) result.push(arr.slice(i, pointer+1));
            pointer++;
        }
    }
    return result;
};

// Given solution
const Deque = require('./collections/deque'); //http://www.collectionsjs.com

function find_subarrays(arr, target) {
  let result = [],
    product = 1,
    left = 0;
  for (right = 0; right < arr.length; right++) {
    product *= arr[right];
    while ((product >= target && left < arr.length)) {
      product /= arr[left];
      left += 1;
    }
    // since the product of all numbers from left to right is less than the target therefore,
    // all subarrays from left to right will have a product less than the target too; to avoid
    // duplicates, we will start with a subarray containing only arr[right] and then extend it
    const tempList = new Deque();
    for (let i = right; i > left - 1; i--) {
      tempList.unshift(arr[i]);
      result.push(tempList.toArray());
    }
  }
  return result;
}


console.log(find_subarrays([2, 5, 3, 10], 30));
console.log(find_subarrays([8, 2, 6, 5], 50));

// Time complexity: The main for-loop managing the sliding window takes O(N) but creating subarrays can take up to O(N^2) in the worst case. 
// Therefore overall, our algorithm will take O(N^3).

// Ignoring the space required for the output list, the algorithm runs in O(N) space which is used for the temp list.