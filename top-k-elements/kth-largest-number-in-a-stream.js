// Design a class to efficiently find the Kth largest element in a stream of numbers.
// The class should have the following two things:
// The constructor of the class should accept an integer array containing initial numbers from the stream and an integer ‘K’.
// The class should expose a function add(int num) which will store the given number and return the Kth largest number.

// Solution
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class KthLargestNumberInStream {
  constructor(nums, k) {
    this.minHeap = new Heap([], null, ((a, b) => b - a));
    this.k = k;

    nums.forEach(num => this.minHeap.push(num));
  }

  add(num) {
    this.minHeap.push(num);

    while (this.minHeap.length > this.k) {
      this.minHeap.pop();
    }

    return this.minHeap.peek();
  }
};

kthLargestNumber = new KthLargestNumberInStream([3, 1, 5, 12, 2, 11], 4);
console.log(`4th largest number is: ${kthLargestNumber.add(6)}`)
console.log(`4th largest number is: ${kthLargestNumber.add(13)}`)
console.log(`4th largest number is: ${kthLargestNumber.add(4)}`)

// Time complexity: O(logK)
// Space complexity: O(K)