// Given a string, find if its letters can be rearranged in such a way that no two same characters come next to each other.

// Solution
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

const rearrange_string = function(str) {
  const frequencies = {};
  const stringArray = str.split("");
  stringArray.forEach(letter => frequencies[letter] ? frequencies[letter]++ : frequencies[letter] = 1);

  const maxHeap = new Heap(Object.keys(frequencies), null, ((a, b) => frequencies[a] - frequencies[b]));
  
  let result = "";
  
  while (result.length < str.length) {
    for (let i = 0; i < maxHeap.length; i++) {
      if (maxHeap.peek() === result[result.length-1]) return "";
      
      frequencies[maxHeap.peek()]--;
      result += maxHeap.pop();
    }

    for (letter in frequencies) maxHeap.push(letter);
  }

  return result;
};

console.log(`Rearranged string: ${rearrange_string("aappp")}`)
console.log(`Rearranged string: ${rearrange_string("Programming")}`)
console.log(`Rearranged string: ${rearrange_string("aapa")}`)

// Time complexity: O(N logN)
// Space complexity: O(N)