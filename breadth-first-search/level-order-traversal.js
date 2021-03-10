// Given a binary tree, populate an array to represent its level-by-level traversal. 
// You should populate the values of all nodes of each level from left to right in separate sub-arrays.

// Solution
const traverse = function(root) {
    const result = [];
    if (root === null) return result;
  
    const queue = new Deque();
    queue.push(root);
  
    while (queue.length) {
        const levelSize = queue.length;
        const currentLevel = [];
        for (let i=0; i < levelSize; i++) {
            let currentNode = queue.shift();
            currentLevel.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        result.push(currentLevel);
    }
    return result;
};

// Time complexity: O(n)
// Space complexity: O(n)