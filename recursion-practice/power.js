// Given a base and an exponent, the power of a number recursively.

// Solution
function power(base, exponent) {
    // Base case
    if (exponent == 0) {
        return 1;
    }
      
    // Recursive case
    else {
        return base * power(base, exponent - 1);
    }
}