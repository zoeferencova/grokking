// Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. 
// The range of the ‘key’ will be the first and last position of the ‘key’ in the array.
// Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

// My solution
const find_range = function(arr, key) {
    let start = 0, end = arr.length - 1;
  
    while (start <= end) {
        const mid = Math.floor(start + (end - start)/2);
    
        if (arr[mid] < key) start = mid + 1;
    
        if (arr[mid] > key) end = mid -  1;
    
        if (arr[mid] === key) {
            let firstTarget = mid, lastTarget = mid;
    
            while (arr[firstTarget - 1] === key) firstTarget--;
    
            while (arr[lastTarget + 1] === key) lastTarget++;
    
            return [firstTarget, lastTarget]
        }
    }
    
    return [- 1, -1];
};

console.log(find_range([4, 6, 6, 6, 9], 6))
console.log(find_range([1, 3, 8, 10, 15], 10))
console.log(find_range([1, 3, 8, 10, 15], 12))
  

// Given solution
function find_range(arr, key) {
    result = [-1, -1];
    result[0] = binary_search(arr, key, false);
    if (result[0] !== -1) { // no need to search, if 'key' is not present in the input array
        result[1] = binary_search(arr, key, true);
    }
    return result;
}
  
// modified Binary Search
function binary_search(arr, key, findMaxIndex) {
    let keyIndex = -1;
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (key < arr[mid]) {
            end = mid - 1;
        } else if (key > arr[mid]) {
            start = mid + 1;
        } else { // key === arr[mid]
            keyIndex = mid;
            if (findMaxIndex) {
                start = mid + 1; // search ahead to find the last index of 'key'
            } else {
                end = mid - 1; // search behind to find the first index of 'key'
            }
        }
    }
    return keyIndex;
}


console.log(find_range([4, 6, 6, 6, 9], 6));
console.log(find_range([1, 3, 8, 10, 15], 10));
console.log(find_range([1, 3, 8, 10, 15], 12));