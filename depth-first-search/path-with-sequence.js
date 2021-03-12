// Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.

// Solution
const find_path = function(root, sequence) {
    return (function find_path_inner(root, i) {
        if (root === null) return false;
        if (root.value !== sequence[i] || i > sequence.length) return false;
        if (!root.left && !root.right && i === sequence.length-1) return true;
    
        return find_path_inner(root.left, i + 1) || find_path_inner(root.right, i + 1);
    })(root, 0);
};

// Time complexity: O(n)
// Space complexity: O(n)