// Given a sorted array of numbers, find if a given number ‘key’ is present in the array. 
// Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. 
// You should assume that the array can have duplicates.

// Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

// Solution
function binary_search(arr, key) {
    let start = 0, end = arr.length - 1, isAscending = arr[start] < arr[end];
    
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
    
        if (key === arr[mid]) return mid;

        if (isAscending) {
            key < arr[mid] ? end = mid - 1 : start = mid + 1;
        } else {
            key > arr[mid] ? end = mid - 1 : start = mid + 1;
        }
    }
  
    return -1;
}

// Time complexity: O(logN)
// Space complexity: O(1)

