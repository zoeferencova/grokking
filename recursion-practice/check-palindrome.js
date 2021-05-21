// Write a function that takes a variable testVariable, which contains a string, and checks whether or not it is a palindrome.

// Solution
function isPalindrome(testVariable) {
    if (testVariable.length <= 1) return true;
  
    if (testVariable[0] !== testVariable[testVariable.length-1]) return false;
    
    return isPalindrome(testVariable.substr(1, testVariable.length-2));
}