// Given a binary tree, connect each node with its level order successor. 
// The last node of each level should point to a null node.

// Solution
const connect_level_order_siblings = function(root) {
    if (root === null) return null;
  
    const queue = new Deque();
    queue.push(root);
  
    while (queue.length) {
        let levelSize = queue.length, previousNode = null;
    
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
            
            if (previousNode) previousNode.next = currentNode;
            previousNode = currentNode;
        }
    }
    return root;
};

// Time complexity: O(n)
// Space complexity: O(n)