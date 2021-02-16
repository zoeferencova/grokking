// Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

function remove_element(arr, key) {
    let nextElement = 0; // index of the next element which is not 'key'
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== key) {
            arr[nextElement] = arr[i];
            nextElement += 1;
        }
    }
    return nextElement;
}

console.log(`Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);

// Time complexity: O(n)
// Space complexity: O(1)