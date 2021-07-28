// Find the maximum value in a given Bitonic array. 
// An array is considered bitonic if it is monotonically increasing and then monotonically decreasing. 
// Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

// My solution
const find_max_in_bitonic_array = function(arr) {
    let start = 0, end = arr.length - 1;
    
    while (start < end) {
        const mid = Math.floor(start + (end - start)/2);
    
        if (arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) return arr[mid];
    
        arr[mid] < arr[mid+1] ? start = mid : end = mid;
    
        if (end === 1) return arr[0];
    
        if (start === arr.length - 2) return arr[arr.length - 1];
    }
};

console.log(find_max_in_bitonic_array([1, 3, 8, 12, 4, 2]))
console.log(find_max_in_bitonic_array([3, 8, 3, 1]))
console.log(find_max_in_bitonic_array([1, 3, 8, 12]))
console.log(find_max_in_bitonic_array([10, 9, 8]))
  

// Given solution
function find_max_in_bitonic_array(arr) {
    let start = 0, end = arr.length - 1;

    while (start < end) {
        const mid = Math.floor(start + (end - start) / 2);
        
        arr[mid] > arr[mid + 1] ? end = mid : start = mid + 1;
    }
    
    return arr[start];
}


console.log(find_max_in_bitonic_array([1, 3, 8, 12, 4, 2]));
console.log(find_max_in_bitonic_array([3, 8, 3, 1]));
console.log(find_max_in_bitonic_array([1, 3, 8, 12]));
console.log(find_max_in_bitonic_array([10, 9, 8]));