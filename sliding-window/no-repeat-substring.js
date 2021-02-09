// INPUT: "aabccbb"

// [A, A, B, C, C, B, B]

// VARS:

// Current letters (object)
// Max length
// Window start
// Window end

// Loop through array
// Add the letter to the object

// While any of the object’s values are > 1, slide window along
// 1. Increment window start
// 2. Decrement previous first window item from object, delete from object if zero

// Update max length to the max value between current max length and current length (end index - start index + 1)


// My solution
const nonRepeatSubstring = string => {
	const currentLetters = {};
	let maxLength = 0;
	let windowStart = 0;
	for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
		currentLetters[string[windowEnd]] ? currentLetters[string[windowEnd]] += 1 : currentLetters[string[windowEnd]] = 1;
		while (Object.values(currentLetters).find(letter => letter > 1)) {
			currentLetters[string[windowStart]] -= 1;
			if (currentLetters[string[windowStart]] === 0) {
				delete currentLetters[string[windowStart]];
			}
            windowStart++;
        }
        maxLength = Math.max(maxLength, (windowEnd - windowStart) + 1);		
	}
	return maxLength;
}

// Given solution

function non_repeat_substring(str) {
    let windowStart = 0,
      maxLength = 0,
      charIndexMap = {};
  
    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      // if the map already contains the 'rightChar', shrink the window from the beginning so that
      // we have only one occurrence of 'rightChar'
      if (rightChar in charIndexMap) {
        // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
        // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
        windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
      }
      // insert the 'rightChar' into the map
      charIndexMap[rightChar] = windowEnd;
      // remember the maximum length so far
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}
  
  
console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`);

// Time complexity: O(N) where N is the number of characters in the input string
// Space complexity: O(K) where K is the number of distinct characters in the input string. 
// This also means K <= N, because in the worst case, the whole string might not have any repeating character, so the entire string will be added to the HashMap. 
// Having said that, since we can expect a fixed set of characters in the input string (e.g., 26 for English letters), we can say that the algorithm runs in fixed space O(1); in this case, we can use a fixed-size array instead of the HashMap.