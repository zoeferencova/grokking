// Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

// My solution
const backspace_compare = function(str1, str2) {
    const str1AfterBackspace = remove_backspaces(str1);
    const str2AfterBackspace = remove_backspaces(str2);
    if (str1AfterBackspace === str2AfterBackspace) return true;
    return false;
};
  
const remove_backspaces = function(string) {
    let first = 0;
    const arr = string.split("")
    for (let second=1; second < arr.length; second++) {
        while (arr[second] === "#") {
            arr.splice(first, 2);
            first--;
            second--;
        }
        first++;
    }
    return arr.join("");
}

// Given solution
function backspace_compare(str1, str2) {
    // use two pointer approach to compare the strings
    let index1 = str1.length - 1, index2 = str2.length - 1;
    while (index1 >= 0 || index2 >= 0) {
        let i1 = get_next_valid_char_index(str1, index1), i2 = get_next_valid_char_index(str2, index2);
        if (i1 < 0 && i2 < 0) { // reached the end of both the strings
            return true;
        }
        if (i1 < 0 || i2 < 0) { // reached the end of one of the strings
            return false;
        }
        if (str1[i1] !== str2[i2]) { // check if the characters are equal
            return false;
        }
        index1 = i1 - 1;
        index2 = i2 - 1;
    }
    return true;
  }
  
  
  function get_next_valid_char_index(str, index) {
    let backspaceCount = 0;
    while (index >= 0) {
        if (str[index] === '#') { // found a backspace character
            backspaceCount += 1;
        } else if (backspaceCount > 0) { // a non-backspace character
            backspaceCount -= 1;
        } else {
            break;
        }
        index -= 1; // skip a backspace or a valid character
    }
    return index;
}
  
console.log(backspace_compare('xy#z', 'xzz#'));
console.log(backspace_compare('xy#z', 'xyz#'));
console.log(backspace_compare('xp#', 'xyz##'));
console.log(backspace_compare('xywrrmp', 'xywrrmu#p'));

// Time complexity: The time complexity of the above algorithm will be O(M+N) where ‘M’ and ‘N’ are the lengths of the two input strings respectively.
// Space complexity: The algorithm runs in constant space O(1).