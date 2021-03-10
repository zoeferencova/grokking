// Given a binary tree, populate an array to represent its zigzag level order traversal. 
// You should populate the values of all nodes of the first level from left to right, 
// then right to left for the next level and keep alternating in the same manner for the following levels.

// Solution
const traverse = function(root) {
    const result = [];
    if (root === null) return result;
  
    const queue = new Deque();
    queue.push(root);
  
    let reverse = false;
  
    while (queue.length) {
        const levelSize = queue.length;
        const level = [];
    
        for (let i=0; i < levelSize; i++) {
            const currentNode = queue.shift();
            reverse ? level.unshift(currentNode.value) : level.push(currentNode.value);
    
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
    
        result.push(level)
        reverse = !reverse;
    }
    return result;
};

// Time complexity: O(n)
// Space complexity: O(n)