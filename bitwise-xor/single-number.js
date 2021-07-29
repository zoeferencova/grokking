// In a non-empty array of integers, every number appears twice except for one, find that single number.

// Solution
function find_single_number(arr) {
    let x = arr[0]
    for (let i = 1; i < arr.length; i++) {
        x ^= arr[i]
    }
    return x;
}

console.log(find_single_number([1, 4, 2, 1, 3, 2, 3]));

