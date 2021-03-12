// Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

// My solution
function find_paths(root, sum) {
    const allPaths = [];
    const currentPath = [];
  
    (function find_paths_recursive(root, sum) {
        if (root === null) return;
        currentPath.push(root.value);
    
        if (root.value === sum && !root.left && !root.right) {
            allPaths.push([].concat(currentPath));
        } else {
            find_paths_recursive(root.left, sum - root.value);
            find_paths_recursive(root.right, sum - root.value);
        }
        currentPath.pop();
    })(root, sum);

    return allPaths;
}

// Given solution
function find_paths(root, sum) {
    allPaths = [];
    find_paths_recursive(root, sum, new Deque(), allPaths);
    return allPaths;
}
  
  
function find_paths_recursive(currentNode, sum, currentPath, allPaths) {
    if (currentNode === null) {
        return;
    }
  
    // add the current node to the path
    currentPath.push(currentNode.val);
  
    // if the current node is a leaf and its value is equal to sum, save the current path
    if (currentNode.val === sum && currentNode.left === null && currentNode.right === null) {
        allPaths.push(currentPath.toArray());
    } else {
        // traverse the left sub-tree
        find_paths_recursive(currentNode.left, sum - currentNode.val, currentPath, allPaths);
        // traverse the right sub-tree
        find_paths_recursive(currentNode.right, sum - currentNode.val, currentPath, allPaths);
    }
    // remove the current node from the path to backtrack,
    // we need to remove the current node while we are going up the recursive call stack.
    currentPath.pop();
}

// Time complexity: O(n)
// Space complexity: O(n)