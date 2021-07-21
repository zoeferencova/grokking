// Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.
// Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. 
// This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.
// Write a function to return the next letter of the given ‘key’.

// My solution
const search_next_letter = function(arr, key) {
    if (key < arr[0] || key > arr[arr.length - 1]) return arr[0];
    
    let start = 0, end = arr.length - 1;
  
    while (start <= end) {
        const mid = Math.floor(start + (end - start)/2);
    
        if (arr[mid] === key) return mid === arr.length - 1 ? arr[0] : arr[mid + 1];
    
        if (arr[mid] < key) start = mid === arr.length - 1 ? 0 : mid + 1;
        
        if (arr[mid] > key) end = mid - 1;
    }
  
    return arr[end + 1];
};

console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f'))
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b'))
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm'))
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'h'))
  

// Given solution
function search_next_letter(letters, key) {
    const n = letters.length;
    if (key < letters[0] || key > letters[n - 1]) {
        return letters[0];
    }

    let start = 0;
    let end = n - 1;
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (key < letters[mid]) {
            end = mid - 1;
        } else { // key >= letters[mid]:
            start = mid + 1;
        }
    }
    // since the loop is running until 'start <= end', so at the end of the while loop, 'start === end+1'
    return letters[start % n];
}


console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f'));
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b'));
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm'));