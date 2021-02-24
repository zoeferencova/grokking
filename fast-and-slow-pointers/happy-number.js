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

// Recursive approach
const find_happy_number_r = function(num) {
    let result = false;
    let array = num.toString().split('').map(n => n * n)
    let sum = array.reduce((a, b) => a + b)
    if (sum === 1){
        return true;
    // Cycle will always hit 4 if not a happy number
    } else if (sum === 4){
        return false;
    } else {
        result = find_happy_number_r(sum)
    }
    return result;
}

console.log(find_happy_number_r(23));
console.log(find_happy_number_r(12));


// Hash table approach
const find_happy_number_hash = function(num) {
    const seen = {};
    while (n !== 1 && !seen[num]) {
        seen[num] = true;
        num = find_square_sum_hash(num);
    }
    return n === 1 ? true : false;
}

const find_square_sum_hash = function(numString) {
    // Second argument 0 means that initial accumulator (sum)
    // value will be 0.
    return numString.toString().split("").reduce((sum, num) => {
        return sum + Math.pow(num, 2);
    }, 0)
}