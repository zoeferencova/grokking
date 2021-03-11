// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

// Solution
const find_minimum_depth = function(root) {
    if (root === null) return 0;
  
    const queue = new Deque();
    queue.push(root);
    let minDepth = 0;
  
    while (queue.length) {
        const levelSize = queue.length;
        minDepth++;
    
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
    
            if (currentNode.left === null && currentNode.right === null) {
            return minDepth;
            } else {
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
            }
        }
    }
};

// Time complexity: O(n)
// Space complexity: O(n)