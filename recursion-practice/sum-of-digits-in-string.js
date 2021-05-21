// Implement a function that takes a variable testVariable, which contains a string of digits, and prints the sum of those digits.

// Solution
function sumDigits(testVariable) {
    if (testVariable === "") {
        return 0;
    }
  
    return parseInt(testVariable[0]) + sumDigits(testVariable.substr(1));
}