// Given a string, find all of its permutations preserving the character sequence but changing case.

// Solution

const find_letter_case_string_permutations = function(str) {
    const permutations = [];
    permutations.push(str);
    for (let i = 0; i < str.length; i++) {
        if (isNaN(Number(str[i]))) {
            const n = permutations.length;
            for (let j = 0; j < n; j++) {
                const chars = [...permutations[j]];
                chars[i] === chars[i].toLowerCase() ? chars[i] = chars[i].toUpperCase() : chars[i] = chars[i].toLowerCase();
                permutations.push(chars.join(""));
            }
        }
    }
    return permutations;
};


console.log(`String permutations are: ${find_letter_case_string_permutations("ad52")}`)
console.log(`String permutations are: ${find_letter_case_string_permutations("ab7c")}`)
  
// Time complexity: O(N * 2^N)
// Space complexity: O(N * 2^N)