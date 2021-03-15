// Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.

// Solution
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class SlidingWindowMedian {
    constructor() {
        this.maxHeap = new Heap([], null, ((a, b) => a - b));
        this.minHeap = new Heap([], null, ((a, b) => b - a));
    }

    find_sliding_window_median(nums, k) {
        const result = [];
        for (let i=0; i < nums.length; i++) {
        if (this.maxHeap.length === 0 || nums[i] <= this.maxHeap.peek()) {
            this.maxHeap.push(nums[i]);
        } else {
            this.minHeap.push(nums[i]);
        }

        this.rebalanceHeaps();

        if (i - k + 1 >= 0) { 
            if (this.maxHeap.length === this.minHeap.length) {
            result.push((this.maxHeap.peek() + this.minHeap.peek())/2);
            } else { 
            result.push(this.maxHeap.peek());
            }

            const windowStart = nums[i - k + 1];
            if (windowStart <= this.maxHeap.peek()) {
            this.maxHeap.delete(windowStart); // delete from heap
            } else {
            this.minHeap.delete(windowStart); // delete from heap
            }

            this.rebalanceHeaps();
        }
        }
        return result;
    }

    rebalanceHeaps() {
        if (this.maxHeap.length > this.minHeap.length + 1) {
        this.minHeap.push(this.maxHeap.pop());
        } else if (this.maxHeap.length < this.minHeap.length) {
        this.maxHeap.push(this.minHeap.pop());
        }
    }
};

var slidingWindowMedian = new SlidingWindowMedian()
result = slidingWindowMedian.find_sliding_window_median(
  [1, 2, -1, 3, 5], 2)

console.log(`Sliding window medians are: ${result}`)

slidingWindowMedian = new SlidingWindowMedian()
result = slidingWindowMedian.find_sliding_window_median(
  [1, 2, -1, 3, 5], 3)
console.log(`Sliding window medians are: ${result}`)

// Time complexity: O(n * k)
// Space complexity: O(k)