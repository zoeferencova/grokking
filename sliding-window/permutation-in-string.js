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

// Given solution
function find_permutation(str, pattern) {
    let windowStart = 0,
      matched = 0,
      charFrequency = {};
  
    for (i = 0; i < pattern.length; i++) {
      const chr = pattern[i];
      if (!(chr in charFrequency)) {
        charFrequency[chr] = 0;
      }
      charFrequency[chr] += 1;
    }
  
    // Our goal is to match all the characters from the 'charFrequency' with the current window
    // try to extend the range [windowStart, windowEnd]
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (rightChar in charFrequency) {
        // Decrement the frequency of matched character
        charFrequency[rightChar] -= 1;
        if (charFrequency[rightChar] === 0) {
          matched += 1;
        }
      }
  
      if (matched === Object.keys(charFrequency).length) {
        return true;
      }
  
      // Shrink the sliding window
      if (windowEnd >= pattern.length - 1) {
        leftChar = str[windowStart];
        windowStart += 1;
        if (leftChar in charFrequency) {
          if (charFrequency[leftChar] === 0) {
            matched -= 1;
          }
          charFrequency[leftChar] += 1;
        }
      }
    }
    return false;
}


console.log(`Permutation exist: ${find_permutation('oidbcaf', 'abc')}`);
console.log(`Permutation exist: ${find_permutation('odicf', 'dc')}`);
console.log(`Permutation exist: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`);
console.log(`Permutation exist: ${find_permutation('aaacb', 'abc')}`);

// Time complexity: O(N+M)
// Space complexity: O(N)