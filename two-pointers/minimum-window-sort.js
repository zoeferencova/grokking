// Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

// My solution
const shortest_window_sort = function(arr) {
    let first = 0, last = arr.length-1;
    while (first + 1 < last - 1) {
        if (arr[first] < arr[first+1] && arr[first+1] < arr[last-1]) {
            first++;
        } else {
            return arr.slice(first-1, last).length;
        }
        if (arr[last] > arr[last-1] && arr[last-1] > arr[first+1]) {
            last--;
        } else {
            return arr.slice(first, last+1).length;
        }
    }
    return arr[first] < arr[last] ? 0 : arr.length;
};

// Given solution
function shortest_window_sort(arr) {
    let low = 0, high = arr.length - 1;

    // find the first number out of sorting order from the beginning
    while ((low < arr.length - 1 && arr[low] <= arr[low + 1])) {
        low += 1;
    }
  
    if (low === arr.length - 1) { // if the array is sorted
        return 0;
    }
  
    // find the first number out of sorting order from the end
    while (high > 0 && arr[high] >= arr[high - 1]) {
        high -= 1;
    }
  
    // find the maximum and minimum of the subarray
    let subarrayMax = -Infinity, subarrayMin = Infinity;
    for (k = low; k < high + 1; k++) {
        subarrayMax = Math.max(subarrayMax, arr[k]);
        subarrayMin = Math.min(subarrayMin, arr[k]);
    }
  
    // extend the subarray to include any number which is bigger than the minimum of the subarray
    while (low > 0 && arr[low - 1] > subarrayMin) {
        low -= 1;
    }
    // extend the subarray to include any number which is smaller than the maximum of the subarray
    while (high < arr.length - 1 && arr[high + 1] < subarrayMax) {
        high += 1;
    }
  
    return high - low + 1;
}
  
console.log(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12]));
console.log(shortest_window_sort([1, 3, 2, 0, -1, 7, 10]));
console.log(shortest_window_sort([1, 2, 3]));
console.log(shortest_window_sort([3, 2, 1]));

// Time complexity: O(N)
// Space complexity: O(1)