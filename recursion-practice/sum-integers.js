// Sum of Integers from 1 to n

// Solution
function sumTill(targetNumber) {
    // Base case
    if (targetNumber == 1) {
        return targetNumber;
    }
  
    // Recursive case
    else {
        return targetNumber + sumTill(targetNumber - 1);
    }
}