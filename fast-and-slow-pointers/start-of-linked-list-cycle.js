// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

// Solution
class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}
  
const find_cycle_start = function(head) {
    // Find cycle
    let fast = head;
    let slow = head;
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            break;
        }
    }
  
    // Find cycle length
    let current = slow, cycle_length = 0;
    while (true) {
        current = current.next;
        cycle_length++;
        if (current === slow) {
            break;
        }
    }
  
    // Move pointer2 cycle length ahead of pointer1
    let pointer1 = head, pointer2 = head;
    for (let i=0; i < cycle_length; i++) {
        pointer2 = pointer2.next;
    }
  
    // Find cycle start
    while (pointer1 !== pointer2) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
  
    return pointer1;
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

// Time complexity: O(N)
// Space complexity: O(1)