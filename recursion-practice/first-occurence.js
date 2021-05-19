// Implement a function that takes an array arr, a testVariable containing the number to search and currentIndex 
// containing the starting index as parameters and outputs the index of the first occurrence of testVariable in arr. 
// If testVariable is not found in arr return −1.
// We want to search for a targetNumber from index currentIndex to the end of the array.

// Recursive solution
function firstIndex(arr, testVariable, currentIndex) {
    if (currentIndex === arr.length) {
        return -1;
    }

    if (arr[currentIndex] === testVariable) {
        return currentIndex;
    }
    
    return firstIndex(arr, testVariable, currentIndex + 1);
}

// Iterative solution
function firstIndex(arr, testVariable, currentIndex) { // returns the first occurrence of testVariable
    while (currentIndex < arr.length) { // Iterate over the array
        if (arr[currentIndex] == testVariable) {  // Return the current index if testVariable found
            return currentIndex;
        } 
        currentIndex += 1;
    }
}
