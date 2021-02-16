// Given a string and a list of words, find all the starting indices of substrings in the given string that 
// are a concatenation of all the given words exactly once without any overlapping of words. 
// It is given that all words are of the same length.

// My solution
const find_word_concatenation = function(str, words) {
    const result_indices = [];
    let windowStart = 0;
    const wordLength = words[0].length; 
    const wordMap = {};
  
    words.forEach(word => wordMap[word] = 1);
  
    for (let windowEnd = wordLength-1; windowEnd <= str.length; windowEnd += wordLength) {
      const lastWord = str.substr(windowEnd - (wordLength-1), wordLength);
      const firstWord = str.substr(windowStart, wordLength);
      wordMap[lastWord] -= 1;
      if (Object.values(wordMap).every(value => value === 0)) {
        result_indices.push(windowStart);
        wordMap[firstWord] += 1;
        windowStart += wordLength;
      } else if (wordMap[lastWord] < 0) {
        windowStart += wordLength;
        wordMap[firstWord] += 1;
      }
    }
    return result_indices;
};

// Given solution
function find_word_concatenation(str, words) {
    if (words.length === 0 || words[0].length === 0) {
      return [];
    }
  
    wordFrequency = {};
  
    words.forEach((word) => {
      if (!(word in wordFrequency)) {
        wordFrequency[word] = 0;
      }
      wordFrequency[word] += 1;
    });
  
    const resultIndices = [],
      wordsCount = words.length;
    wordLength = words[0].length;
  
    for (i = 0; i < (str.length - wordsCount * wordLength) + 1; i++) {
      const wordsSeen = {};
      for (j = 0; j < wordsCount; j++) {
        next_word_index = i + j * wordLength;
        // Get the next word from the string
        word = str.substring(next_word_index, next_word_index + wordLength);
        if (!(word in wordFrequency)) { // Break if we don't need this word
          break;
        }
  
        // Add the word to the 'wordsSeen' map
        if (!(word in wordsSeen)) {
          wordsSeen[word] = 0;
        }
        wordsSeen[word] += 1;
  
  
        // no need to process further if the word has higher frequency than required
        if (wordsSeen[word] > (wordFrequency[word] || 0)) {
          break;
        }
  
        if (j + 1 === wordsCount) { // Store index if we have found all the words
          resultIndices.push(i);
        }
      }
    }
  
    return resultIndices;
}

console.log(find_word_concatenation('catfoxcat', ['cat', 'fox']));
console.log(find_word_concatenation('catcatfoxfox', ['cat', 'fox']));