// Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.

// My solution
const find_substring = function(str, pattern) {
    let windowStart = 0, smallestSubstring = "";
    const charMap = {};
    
    pattern.split("").forEach(char => charMap[char] ? charMap[char] += 1 : charMap[char] = 1);
                    
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (rightChar in charMap) {
            charMap[rightChar] -= 1;
            while (Object.values(charMap).every(val => val <= 0)) {
                const currentString = str.substr(windowStart, windowEnd - windowStart + 1);
                smallestSubstring = str;
                if (currentString.length < smallestSubstring.length) {
                    smallestSubstring = currentString;
                }
                const leftChar = str[windowStart];
                if (leftChar in charMap) {
                    charMap[leftChar] += 1;
                }
                windowStart++;
            }
        }
    }
    return smallestSubstring;
}

// Given solution
function find_substring(str, pattern) {
    let windowStart = 0,
      matched = 0,
      substrStart = 0,
      minLength = str.length + 1,
      charFrequency = {};
  
    for (i = 0; i < pattern.length; i++) {
      const chr = pattern[i];
      if (!(chr in charFrequency)) {
        charFrequency[chr] = 0;
      }
      charFrequency[chr] += 1;
    }
  
    // try to extend the range [windowStart, windowEnd]
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (rightChar in charFrequency) {
        charFrequency[rightChar] -= 1;
        if (charFrequency[rightChar] >= 0) { // Count every matching of a character
          matched += 1;
        }
      }
  
      // Shrink the window if we can, finish as soon as we remove a matched character
      while (matched === pattern.length) {
        if (minLength > windowEnd - windowStart + 1) {
          minLength = windowEnd - windowStart + 1;
          substrStart = windowStart;
        }
  
        const leftChar = str[windowStart];
        windowStart += 1;
        if (leftChar in charFrequency) {
          // Note that we could have redundant matching characters, therefore we'll decrement the
          // matched count only when a useful occurrence of a matched character is going out of the window
          if (charFrequency[leftChar] === 0) {
            matched -= 1;
          }
          charFrequency[leftChar] += 1;
        }
      }
    }
  
    if (minLength > str.length) {
      return '';
    }
    return str.substring(substrStart, substrStart + minLength);
}


console.log(find_substring('aabdec', 'abc'));
console.log(find_substring('abdbca', 'abc'));
console.log(find_substring('adcad', 'abc'));

// Time complexity: O(N + M) where ‘N’ and ‘M’ are the number of characters in the input string and the pattern respectively.

// Space complexity: O(M) since in the worst case, the whole pattern can have distinct characters which will go into the HashMap. 
// In the worst case, we also need O(N) space for the resulting substring, which will happen when the input string is a permutation of the pattern.