// Given a string and a pattern, find all anagrams of the pattern in the given string.
// Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams: abc, acb, bac, bca, cab, cba
// Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

// My solution
const find_string_anagrams = (str, pattern) => {
	let windowStart = 0;
	const resultArray = [];
	const charMap = {};

	for (let i = 0; i < pattern.length; i++) {
		if (!(pattern[i] in charMap)) {
			charMap[pattern[i]] = 0;
		}
		charMap[pattern[i]] += 1;
	}

	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		const rightChar = str[windowEnd];
		if (rightChar in charMap) {
			charMap[rightChar] -= 1;
		}
		if (Object.values(charMap).find(count => count !== 0)) {
			if (windowEnd - windowStart + 1 >= pattern.length) {
				const leftChar = str[windowStart];
				if (leftChar in charMap) {
					charMap[leftChar] += 1
				}
				windowStart++;
			}
		} else {
            resultArray.push(windowStart);
            const leftChar = str[windowStart];
			charMap[leftChar] += 1;
			windowStart++;
		}
	}
	return resultArray;
}


// Given solution
function find_string_anagrams(str, pattern) {
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
  
    const resultIndices = [];
    // our goal is to match all the characters from the 'charFrequency' with the current window
    // try to extend the range [windowStart, windowEnd]
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (rightChar in charFrequency) {
        // decrement the frequency of matched character
        charFrequency[rightChar] -= 1;
        if (charFrequency[rightChar] === 0) {
          matched += 1;
        }
      }
  
      if (matched === Object.keys(charFrequency).length) { // have we found an anagram?
        resultIndices.push(windowStart);
      }
  
      // shrink the sliding window
      if (windowEnd >= pattern.length - 1) {
        leftChar = str[windowStart];
        windowStart += 1;
        if (leftChar in charFrequency) {
          if (charFrequency[leftChar] === 0) {
            matched -= 1; // before putting the character back, decrement the matched count
          }
          charFrequency[leftChar] += 1; // put the character back
        }
      }
    }
  
    return resultIndices;
}


console.log(find_string_anagrams('ppqp', 'pq'));
console.log(find_string_anagrams('abbcabc', 'abc'));

// Time complexity: O(N+M)
// Space complexity: O(M)
