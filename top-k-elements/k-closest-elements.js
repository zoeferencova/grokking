// Given a sorted number array and two integers ‘K’ and ‘X’, find ‘K’ closest numbers to ‘X’ in the array. 
// Return the numbers in the sorted order. ‘X’ is not necessarily present in the array.

// My solution
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

const find_closest_elements = function(arr, K, X) {
  const minHeap = new Heap([], null, (a, b) => b - a);
  const maxHeap = new Heap([], null, (a, b) => a - b);
  const result = [];
  
  arr.forEach(num => num > X ? maxHeap.push(num) : minHeap.push(num));

  while (maxHeap.length + minHeap.length > K) {
    if (!maxHeap.length) {
      minHeap.pop();
    } else if (!minHeap.length) {
      maxHeap.pop();
    } else {
      maxHeap.peek() - X < X - minHeap.peek() ? minHeap.pop() : maxHeap.pop()
    }
  }

  while (maxHeap.length) minHeap.push(maxHeap.pop());
  while (minHeap.length) result.push(minHeap.pop())

  return result;
};

console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([5, 6, 7, 8, 9], 3, 7)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 6)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 10)}`)


// Given solution
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

function find_closest_elements(arr, K, X) {
  const index = binary_search(arr, X);
  let low = index - K,
    high = index + K;

  low = Math.max(low, 0); // 'low' should not be less than zero
  // 'high' should not be greater the size of the array
  high = Math.min(high, arr.length - 1);

  const minHeap = new Heap([], null, ((a, b) => b[0] - a[0]));
  // add all candidate elements to the min heap, sorted by their absolute difference from 'X'
  for (i = low; i < high + 1; i++) {
    minHeap.push([Math.abs(arr[i] - X), arr[i]]);
  }

  // we need the top 'K' elements having smallest difference from 'X'
  result = [];
  for (i = 0; i < K; i++) {
    result.push(minHeap.pop()[1]);
  }

  result.sort((a,b)=> a-b);
  return result;
}

function binary_search(arr, target) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (low > 0) {
    return low - 1;
  }
  return low;
}

console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([5, 6, 7, 8, 9], 3, 7)}`);
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 6)}`);
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 10)}`);

// Time complexity: O(logN + K * logK)
// Space complexity: O(K)