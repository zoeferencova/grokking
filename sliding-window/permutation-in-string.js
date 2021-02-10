// 

// My solution
const find_permutation = (str, pattern) => {
    let windowStart = 0;
	const patternLetters = {};
	const stringLetters = {};
    
    pattern.split("").forEach(char => patternLetters[char] ? patternLetters[char] += 1 : patternLetters[char] = 1);

	for (let windowEnd = 0; windowEnd <= str.length; windowEnd++) {
		const rightChar = str[windowEnd];
		if (rightChar in patternLetters && (!(rightChar in stringLetters) || stringLetters[rightChar] < patternLetters[rightChar])) {
			if (!(rightChar in stringLetters)) {
				stringLetters[rightChar] = 1;
		    } else {
                stringLetters[rightChar] += 1;
            }

            if (Object.values(stringLetters).reduce((a, b) => a + b) === pattern.length) {
				return true;
			} 
        } else {
            const leftChar = str[windowStart];
            if (leftChar in stringLetters) {
                stringLetters[leftChar] -= 1;
            }
            windowStart++;
	    }
    }
    return false;
}
