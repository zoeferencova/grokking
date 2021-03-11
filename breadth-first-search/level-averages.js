// Given a binary tree, populate an array to represent the averages of all of its levels.

// Solution
const find_level_averages = function(root) {
    result = [];
    if (root === null) return result;
  
    const queue = new Deque();
    queue.push(root);
  
    while (queue.length) {
        const levelSize = queue.length;
        let levelTotal = 0;
    
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            levelTotal += currentNode.value;
    
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        
        result.push(levelTotal/levelSize);
    }
  
    return result;
};

// Time complexity: O(n)
// Space complexity: O(1)