// Given an array of numbers which is sorted in ascending order and is rotated ‘k’ times around a pivot, find ‘k’.
// You can assume that the array does not have any duplicates.

// My solution
const count_rotations = function(arr) {
    let start = 0, end = arr.length - 1, max;
    
    while (start <= end) {
        const mid = Math.floor(start + (end - start)/2);
    
        if (mid === arr.length - 1) {
            if (arr[mid] > arr[0]) max = mid;
        } else if (arr[mid] > arr[mid + 1]) {
            max = mid;
        }
    
        arr[start] > arr[mid] ? end = mid : start = mid + 1;
    }
  
    return max === arr.length - 1 ? 0 : max + 1;
};

console.log(count_rotations([10, 15, 1, 3, 8]))
console.log(count_rotations([4, 5, 7, 9, 10, -1, 2]))
console.log(count_rotations([1, 3, 8, 10]))


// Given solution
function count_rotations(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        mid = Math.floor(start + (end - start) / 2);
    
        // if mid is greater than the next element
        if (mid < end && arr[mid] > arr[mid + 1]) {
            return mid + 1;
        }
    
        // if mid is smaller than the previous element
        if (mid > start && arr[mid - 1] > arr[mid]) {
            return mid;
        }
    
        if (arr[start] < arr[mid]) { // left side is sorted, so the pivot is on right side
            start = mid + 1;
        } else { // right side is sorted, so the pivot is on the left side
            end = mid - 1;
        }
    }
    return 0; // the array has not been rotated
}

console.log(count_rotations([10, 15, 1, 3, 8]));
console.log(count_rotations([4, 5, 7, 9, 10, -1, 2]));
console.log(count_rotations([1, 3, 8, 10]));
