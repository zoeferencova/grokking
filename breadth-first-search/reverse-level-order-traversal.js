// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. 
// You should populate the values of all nodes in each level from left to right in separate sub-arrays.

// Solution
const traverse = function(root) {
    result = [];
    if (root === null) return result;
  
    const queue = new Deque();
    queue.push(root);
  
    while (queue.length) {
      const levelSize = queue.length;
      const level = [];
  
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();
        level.push(currentNode.value);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
      result.unshift(level);
    }
    return result;
}

// Time complexity: O(n)
// Space complexity: O(1)