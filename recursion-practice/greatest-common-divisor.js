// Implement a function that takes two numbers, testVariable1 and testVariable2 and returns their greatest common divisor.

// Solution
function gcd(testVariable1, testVariable2) {
    // Base case
    if (testVariable1 == testVariable2) {
        return testVariable1;
    }
  
    // Recursive case
    if (testVariable1 > testVariable2) {
        return gcd(testVariable1 - testVariable2, testVariable2);
    }
  
    else {
        return gcd(testVariable1, testVariable2 - testVariable1);
    }
}