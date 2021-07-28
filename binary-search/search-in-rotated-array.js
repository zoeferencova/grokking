// Given an array of numbers which is sorted in ascending order and also rotated by some arbitrary number, find if a given ‘key’ is present in it.
// Write a function to return the index of the ‘key’ in the rotated array. If the ‘key’ is not present, return -1. 
// You can assume that the given array does not have any duplicates.

// My solution
const search_rotated_array = function(arr, key) {
    const max = find_max_index(arr);
  
    let start = max + 1, subset_length = arr.length;
  
    while (subset_length > 0) {
        let mid = Math.floor(start + subset_length/2);
        if (mid > subset_length) mid = mid - subset_length;
    
        if (arr[mid] === key) return mid;
    
        if (arr[mid] < key) {
            mid === arr.length - 1 ? start = 0 : start = mid + 1;
            subset_length /= 2;
        } else {
            mid === 0 ? end = arr.length - 1 : end = mid - 1;
            subset_length /= 2;
        }
    }
    
    return -1;
}
  
const find_max_index = function (arr) {
    let start = 0, end = arr.length - 1;
  
    while (start < end) {
        const mid = Math.floor(start + (end - start)/2);
    
        if (mid === arr.length - 1) {
            if (arr[mid] > arr[0]) return mid;
        } else if (arr[mid] > arr[mid + 1]) {
            return mid;
        }
    
        arr[start] > arr[mid] ? end = mid : start = mid + 1;
    }
}

console.log(search_rotated_array([10, 15, 1, 3, 8], 15))
console.log(search_rotated_array([4, 5, 7, 9, 10, -1, 2], 10))


// Given solution
function search_rotated_array(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] === key) {
            return mid;
        }
    
        if (arr[start] <= arr[mid]) { // left side is sorted in ascending order
            if (key >= arr[start] && key < arr[mid]) {
                end = mid - 1;
            } else { // key > arr[mid]
                start = mid + 1;
            }
        } else { // right side is sorted in ascending order
            if (key > arr[mid] && key <= arr[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    // we are not able to find the element in the given array
    return -1;
}

console.log(search_rotated_array([10, 15, 1, 3, 8], 15));
console.log(search_rotated_array([4, 5, 7, 9, 10, -1, 2], 10));

