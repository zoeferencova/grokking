// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. 
// All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

// Solution
const find_happy_number = function(num) {
    let slow = num, fast = num;
    while (true) {
        slow = find_square_sum(slow);
        fast = find_square_sum(find_square_sum(fast));
        if (slow === fast) {
            break;
        }
    }
    return slow === 1;
};
  
function find_square_sum(num) {
    let sum = 0;
    while (num > 0) {
        digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}


console.log(`${find_happy_number(23)}`)
console.log(`${find_happy_number(12)}`)
  
// Time complexity: O(log(N))
// Space complexity: O(1)