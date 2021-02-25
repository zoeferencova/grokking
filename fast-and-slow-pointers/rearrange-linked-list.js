// Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList 
// are inserted alternately to the nodes from the first half in reverse order. 
// So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.
// Your algorithm should not use any extra space and the input LinkedList should be modified in-place.

// My solution
class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
    
    print_list() {
        result = "";
        temp = this;
        while (temp !== null) {
            result += temp.value + " ";
            temp = temp.next;
        }
        console.log(result);
    }
}
  
const reorder = function(head) {
    const middle = find_middle(head);
    let firstHead = head;
    let secondHead = reverse(middle);
    while (firstHead !== null && secondHead !== null) {
        let temp = firstHead.next;
        firstHead.next = secondHead;
        firstHead = temp;
    
        temp = secondHead.next;
        secondHead.next = firstHead;
        secondHead = temp;
    }
  
    if (firstHead !== null) {
        firstHead.next = null;
    }
  
    return head;
}
  
const find_middle = function(head) {
    let fast = head, slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
} 
  
const reverse = function(head) {
    let first = head;
    let second = first.next;
    while (second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }
    head.next = null;
    return first;
}

head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
head.next.next.next.next.next = new Node(12)
reorder(head)
head.print_list()
  
  

// Given solution
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
  
  
    print_list() {
        temp = this;
        while (temp !== null) {
            process.stdout.write(`${temp.value} `);
            temp = temp.next;
        }
        console.log();
    }
}
  
function reorder(head) {
    if (head === null || head.next === null) {
        return;
    }
  
    // find middle of the LinkedList
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
  
    // slow is now pointing to the middle node
    headSecondHalf = reverse(slow); // reverse the second half
    headFirstHalf = head;
  
    // rearrange to produce the LinkedList in the required order
    while (headFirstHalf !== null && headSecondHalf !== null) {
        temp = headFirstHalf.next;
        headFirstHalf.next = headSecondHalf;
        headFirstHalf = temp;
    
        temp = headSecondHalf.next;
        headSecondHalf.next = headFirstHalf;
        headSecondHalf = temp;
    }

    // set the next of the last node to 'null'
    if (headFirstHalf !== null) {
        headFirstHalf.next = null;
    }
}
  
  
function reverse(head) {
    let prev = null;
    while (head !== null) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}


var head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);
reorder(head);
head.print_list();