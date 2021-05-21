// Given an array of numbers, compute the average of those numbers recursively.

// My solution
function average(testVariable, currentIndex = 0) {
    if (currentIndex === testVariable.length-1) {
        return testVariable[currentIndex]/(currentIndex + 1);
    }

    testVariable[currentIndex + 1] = testVariable[currentIndex] + testVariable[currentIndex + 1]
    return average(testVariable, currentIndex + 1);
}

// Given solution
function average(testVariable, currentIndex = 0) {
	// Base Case
	if (currentIndex == testVariable.length - 1) { 
		return testVariable[currentIndex]
	}
	
  	// Recursive case1
	// When currentIndex is 0
	if (currentIndex == 0) { 
		return ((testVariable[currentIndex] + average(testVariable, currentIndex + 1)) / testVariable.length)
	}
	
  	// Recursive case2
	// Compute sum 
	return (testVariable[currentIndex] + average(testVariable, currentIndex + 1)) 
}