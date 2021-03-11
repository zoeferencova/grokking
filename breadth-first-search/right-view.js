// Given a binary tree, return an array containing nodes in its right view. 
// The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.

// Solution
const tree_right_view = function(root) {
    result = [];
    if (root === null) return result;
  
    const queue = new Deque();
    queue.push(root);
  
    while (queue.length) {
        let levelSize = queue.length, level = [];
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            level.push(currentNode.value);
    
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        result.push(level[levelSize-1]);
    }
    return result;
};

// Time complexity: O(n)
// Space complexity: O(n)