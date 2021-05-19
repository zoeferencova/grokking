// Implement a function that takes a number testVariable and returns the square of the number. 
// Try using the following mathematical identity to solve this problem. (n-1)^2 = n^2 - 2n + 1.

// Using this formula, (n-1)^2 + 2n + 1 = n^2

// Basic solution
function findSquare(testVariable) {
    return testVariable * testVariable;
}

var testVariable = 5;
console.log(findSquare(testVariable));

// Recursive solution
function findSquare(testVariable) {
    // Base case
    if (testVariable == 0) {
        return 0;
    }
  
    // Recursive case
    // All values from the "+ (2 * testVariable) - 1" part get added to return value
    // after base case is met and returned (return 0) in backwards order (e.g. 0 + 1 + 3, ...)
    // (2 * testVariable's initial value) - 1 will be added to the final value last.
    else {
        return findSquare(testVariable - 1) + (2 * testVariable) - 1;
    }
}

// Driver Code
var testVariable = 5;
console.log(findSquare(testVariable));