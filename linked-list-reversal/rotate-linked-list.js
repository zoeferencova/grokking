// Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.

// My solution
const rotate = function(head, rotations) {
    // find tail
    let tail = head;
    while (tail.next !== null) {
        tail = tail.next;
    }
  
    let i = 0;
    while (i < rotations) {
        let next = head.next;
        tail.next = head;
        tail = head;
        tail.next = null;
        head = next;
        i++;
    }
    return head;
};

// Given solution
function rotate(head, rotations) {
    if (head === null || head.next === null || rotations <= 0) {
        return head;
    }
  
    // find the length and the last node of the list
    let last_node = head;
    let list_length = 1;
    while (last_node.next !== null) {
        last_node = last_node.next;
        list_length += 1;
    }
    last_node.next = head; // connect the last node with the head to make it a circular list
    rotations %= list_length; // no need to do rotations more than the length of the list
    skip_length = list_length - rotations;
    last_node_of_rotated_list = head;
    for (i = 0; i < skip_length - 1; i++) {
        last_node_of_rotated_list = last_node_of_rotated_list.next;
    }
  
    // 'last_node_of_rotated_list.next' is pointing to the sub-list of 'k' ending nodes
    head = last_node_of_rotated_list.next;
    last_node_of_rotated_list.next = null;
    return head;
}

// Time complexity: O(n)
// Space complexity: O(1)