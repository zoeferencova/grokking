// Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. 
// Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).

// My solution
const count_paths = function(root, S) {
    let count = 0, currentPath = [];
    (function count_paths_recursive(root) {
        if (root === null) return 0;
    
        currentPath.push(root.value);
        
        let sum = 0;
        for (i = currentPath.length - 1; i >= 0; i--) {
            sum += currentPath[i];
            if (sum === S) count++;
        }
        
        count_paths_recursive(root.left);
        count_paths_recursive(root.right);
    
        currentPath.pop();
    })(root);

    return count;
};

// Given solution
function count_paths(root, S) {
    return count_paths_recursive(root, S, new Deque());
  }
  
function count_paths_recursive(currentNode, S, currentPath) {
    if (currentNode === null) {
        return 0;
    }
  
    // add the current node to the path
    currentPath.push(currentNode.val);
    let pathCount = 0, pathSum = 0;
    // find the sums of all sub-paths in the current path list
    for (i = currentPath.length - 1; i >= 0; i--) {
        pathSum += currentPath[i];
      // if the sum of any sub-path is equal to 'S' we increment our path count.
        if (pathSum === S) {
            pathCount += 1;
        }
    }
    // traverse the left sub-tree
    pathCount += count_paths_recursive(currentNode.left, S, currentPath);
    // traverse the right sub-tree
    pathCount += count_paths_recursive(currentNode.right, S, currentPath);
  
    // remove the current node from the path to backtrack
    // we need to remove the current node while we are going up the recursive call stack
    currentPath.pop();
    return pathCount;
}

// Time complexity: O(n^2)
// Space complexity: O(n)