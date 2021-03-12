// Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. 
// Find the total sum of all the numbers represented by all paths.

// Solution
const find_sum_of_path_numbers = function(root) {
    let sum = 0;
    (function find_path_number(root, number) {
        if (root === null) return 0;
    
        number = number * 10 + root.value;
        if (!root.left && !root.right) return sum += number;
        
        find_path_number(root.left, number)
        find_path_number(root.right, number);
    })(root, 0);
    return sum;
};

// Time complexity: O(n)
// Space complexity: O(n)