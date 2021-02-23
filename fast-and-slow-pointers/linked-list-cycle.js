// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

// My solution (same as given)
class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

const has_cycle = function(head) {
    let slow = head, fast = head;
    while (fast) {
        if (fast === slow) {
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return false
}

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)
  
// Time complexity: O(N)
// Space complexity: O(1)

// Similar problem: Given the head of a LinkedList with a cycle, find the length of the cycle.
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
  
  
function find_cycle_length(head) {
    let slow = head, fast = head;
  
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) { // found the cycle
            return calculate_cycle_length(slow);
        }
    }
    return 0;
}
  
  
function calculate_cycle_length(slow) {
    let current = slow, cycle_length = 0;
    while (true) {
        current = current.next;
        cycle_length += 1;
        if (current === slow) {
            break;
        }
    }
    return cycle_length;
}


const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

// Time complexity: O(N)
// Space complexity: O(1)