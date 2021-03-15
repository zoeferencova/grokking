// Find the path with the maximum sum in a given binary tree. Write a function that returns the maximum sum.
// A path can be defined as a sequence of nodes between any two nodes and doesn’t necessarily pass through the root. The path must contain at least one node.

// Solution
const find_maximum_path_sum = function(root) {
    let maxSum = -Infinity;
    (function find_sum(root) {
        if (root === null) return 0;
    
        let leftSum = find_sum(root.left);
        let rightSum = find_sum(root.right);
    
        leftSum = Math.max(0, leftSum);
        rightSum = Math.max(0, rightSum)
    
        const currentSum = leftSum + rightSum + root.value;
        maxSum = Math.max(currentSum, maxSum);
    
        return Math.max(leftSum, rightSum) + root.value;
    })(root);
  
    return maxSum;
};

// Time complexity: O(n)
// Space complexity: O(n)