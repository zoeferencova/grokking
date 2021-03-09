// Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

// My solution
class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
  
    get_list() {
        result = "";
        temp = this;
        while (temp !== null) {
            result += temp.value + " ";
            temp = temp.next;
        }
        return result;
    }
};
  
  
const reverse = function(head) {
    let first = head;
    let second = first.next;
    let temp = second.next;
    while (second !== null) {
        first.next = temp;
        second.next = head;
        head = second;
        second = temp;
        if (temp !== null) temp = temp.next;
    }
    return head;
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`)
  

// Given solution
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
  
    print_list() {
        let temp = this;
        while (temp !== null) {
            process.stdout.write(`${temp.value} `);
            temp = temp.next;
        }
        console.log();
    }
}
  
  
function reverse(head) {
    let current = head, previous = null;
    while (current !== null) {
        next = current.next; // temporarily store the next node
        current.next = previous; // reverse the current node
        previous = current; // before we move to the next node, point previous to the current node
        current = next; // move on the next node
    }
    return previous;
}


const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

process.stdout.write('Nodes of original LinkedList are: ');
head.print_list();
result = reverse(head);
process.stdout.write('Nodes of reversed LinkedList are: ');
result.print_list();

// Time complexity: O(n)
// Space complexity: O(1)