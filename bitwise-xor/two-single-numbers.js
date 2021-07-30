// In a non-empty array of numbers, every number appears exactly twice except two numbers that appear only once. 
// Find the two numbers that appear only once.

// Solution
function find_single_numbers(nums) {
    // get the XOR of the all the numbers
    let n1xn2 = 0;
    nums.forEach((num) => n1xn2 ^= num);
  
    // get the rightmost bit that is '1'
    let rightmost_set_bit = 1;
    // & operator returns 0 if both bits are zero or different from each other (returns 1 only if both bits are 1)
    // << operator shifts 1 bit to the right for each num until both bits !== 0 
    while ((rightmost_set_bit & n1xn2) === 0) rightmost_set_bit = rightmost_set_bit << 1;

    let num1 = 0, num2 = 0;
    // nums now get partitioned based on whether they have a 1 in the 'rightmost_set_bit' bit
    // if so, xor the num with the other nums that have a 1 in that bit, otherwise xor with the others
    // after this, we will have 2 numbers such that num1 ^ num2 = n1xn2
    nums.forEach((num) => (num & rightmost_set_bit) !== 0 ? num1 ^= num : num2 ^= num);
    
    return [num1, num2];
}

console.log(`Single numbers are: ${find_single_numbers([1, 4, 2, 1, 3, 5, 6, 2, 3, 5])}`);
console.log(`Single numbers are: ${find_single_numbers([2, 1, 3, 2])}`);