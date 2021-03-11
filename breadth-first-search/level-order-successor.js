// Given a binary tree and a node, find the level order successor of the given node in the tree. 
// The level order successor is the node that appears right after the given node in the level order traversal.

// Solution
const find_successor = function(root, key) {
    if (root === null) return null;
  
    const queue = new Deque();
    queue.push(root);
  
    while (queue.length) {
        const levelSize = queue.length;
    
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
            
            if (currentNode.val === key) {
            return queue.shift();
            }
        }
    }
    return null;
};

// Time complexity: O(n)
// Space complexity: O(n)