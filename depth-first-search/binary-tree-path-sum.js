// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

// Solution
const hasPath = function(root, sum) {
    if (root === null) return false;
    if (root.left === null && root.right === null && root.value === sum) return true;
    return hasPath(root.left, sum - root.value) || hasPath(root.right, sum - root.value);
};

// Time complexity: O(n)
// Space complexity: O(n)