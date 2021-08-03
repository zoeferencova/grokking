// Given a string, sort it based on the decreasing frequency of its characters.

// My solution
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

const sort_character_by_frequency = function(str) {
  const frequencies = {};
  let letters = [];
  let result = "";

  str.split("").forEach(letter => {
    if (frequencies[letter]) {
      frequencies[letter]++
    } else {
      frequencies[letter] = 1;
      letters.push(letter);
    }
  });

  const maxHeap = new Heap(letters, null, (a, b) => frequencies[a] - frequencies[b]);

  while (maxHeap.length) {
    const currentLetter = maxHeap.pop()
    for (let i = 0; i < frequencies[currentLetter]; i++) {
      result += currentLetter;
    }
  }

  return result;
};

console.log(`String after sorting characters by frequency: ${sort_character_by_frequency("Programming")}`)
console.log(`String after sorting characters by frequency: ${sort_character_by_frequency("abcbab")}`)

const Heap = require('./collections/heap'); //http://www.collectionsjs.com


// Given solution
function sort_character_by_frequency(str) {
  // find the frequency of each character
  charFrequencyMap = {};
  for (i = 0; i < str.length; i++) {
    const chr = str[i];
    if (chr in charFrequencyMap) {
      charFrequencyMap[chr]++;
    } else {
      charFrequencyMap[chr] = 1;
    }
  }

  // add all characters to the max heap
  const maxHeap = new Heap([], null, ((a, b) => a[0] - b[0]));
  Object.keys(charFrequencyMap).forEach((key) => {
    maxHeap.push([charFrequencyMap[key], key]);
  });

  // build a string, appending the most occurring characters first
  const sortedString = [];
  while (maxHeap.length > 0) {
    [frequency, char] = maxHeap.pop();
    for (let i = 0; i < frequency; i++) {
      sortedString.push(char);
    }
  }
  return sortedString.join('');
}

console.log(`String after sorting characters by frequency: ${sort_character_by_frequency('Programming')}`);
console.log(`String after sorting characters by frequency: ${sort_character_by_frequency('abcbab')}`);

// Time complexity: O(N * logN)
// Space complexity: O(N)