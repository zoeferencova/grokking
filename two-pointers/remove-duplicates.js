// Given an array of sorted numbers, remove all duplicates from it. 
// You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

// My solution
const remove_duplicates = function(arr) {
    let pointer1 = 0, pointer2 = 1;
    while (pointer2 < arr.length) {
        while (arr[pointer1] === arr[pointer2]) {
            arr.splice(pointer2, 1)
        }
        pointer1++; 
        pointer2++;
    }
    return arr.length;
};

// Given solution
function remove_duplicates(arr) {
    // index of the next non-duplicate element
    let nextNonDuplicate = 1;
  
    let i = 1;
    while (i < arr.length) {
        if (arr[nextNonDuplicate - 1] !== arr[i]) {
            arr[nextNonDuplicate] = arr[i];
            nextNonDuplicate += 1;
        }
        i += 1;
    }
    return nextNonDuplicate;
}


console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));

// Time complexity: O(n)
// Space complexity: O(1)