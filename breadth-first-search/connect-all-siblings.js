// Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.

// Solution
const connect_all_siblings = function(root) {
    if (root === null) return null;
  
    const queue = new Deque();
    queue.push(root);
  
    let previousNode = null;
    while (queue.length) {
        const currentNode = queue.shift();
    
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
        
        if (previousNode !== null) previousNode.next = currentNode;
        previousNode = currentNode;
    }
    return root;
};

// Time complexity: O(n)
// Space complexity: O(n)