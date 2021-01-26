// My solution

const longest_substring_with_k_distinct = function(str, k) {
    const arr = str.split("");
    let longestSubstring = 0, currentSubstring = 0, letterCount = 0, letters = {}, start = 0;
    for(let end = 0; end < arr.length; end++) {
      if (letters[arr[end]] > 0) {
        letters[arr[end]] += 1;
      } else {
        letters[arr[end]] = 1;
        letterCount++;
      }
      currentSubstring++;
      if (letterCount > k) {
        longestSubstring = Math.max(longestSubstring, currentSubstring - 1);
        letters[arr[start]] -= 1;
        if (letters[arr[start]] === 0) {
          letterCount--;
        }
        start++;
        currentSubstring--;
      }
    }
    return longestSubstring;
};

// Given solution

function longest_substring_with_k_distinct(str, k) {
    let windowStart = 0,
      maxLength = 0,
      charFrequency = {};
  
    // in the following loop we'll try to extend the range [window_start, window_end]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (!(rightChar in charFrequency)) {
        charFrequency[rightChar] = 0;
      }
      charFrequency[rightChar] += 1;
      // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
      while (Object.keys(charFrequency).length > k) {
        const leftChar = str[windowStart];
        charFrequency[leftChar] -= 1;
        if (charFrequency[leftChar] === 0) {
          delete charFrequency[leftChar];
        }
        windowStart += 1; // shrink the window
      }
      // remember the maximum length so far
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
  
    return maxLength;
  }
  
  
  console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);
  console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);
  console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);

  // Time complexity: O(n) - The above algorithm’s time complexity will be O(N), where ‘N’ is the number of characters in the input string. The outer for loop runs for all characters, and the inner while loop processes each character only once; therefore, the time complexity of the algorithm will be O(N+N), which is asymptotically equivalent to O(N).
  // Space complexity: O(1)