// Implement a function that takes a string testVariable and returns the length of the string.

// Solution
function recursiveLength(testVariable) {
	if (testVariable === "") {
		return 0;
	}

	return 1 + recursiveLength(testVariable.substr(1));
}