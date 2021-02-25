//Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.
// Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. 
// The algorithm should have O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.

// My solution
class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  }
  
  
const is_palindromic_linked_list= function(head) {
    let fast = head;
    let slow = head;
    let slowTarget = 0;
  
    // Find midpoint
    while (fast.value !== fast.next.next.value) {
        fast = fast.next;
        slowTarget++;
    }
  
    fast = fast.next.next.next;
  
    // Move pointers to compare values
    while (fast.next !== null) {
        for (let i = 1; i <= slowTarget; i++) {
            slow = slow.next;
        }
    
        if (fast.value === slow.value) {
            fast = fast.next;
            slowTarget--;
        } else {
            return false;
        }
    }
    return true;
};
  
  
head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)

head.next.next.next.next.next = new Node(2)
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)

// Given solution
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
  
  
function is_palindromic_linked_list(head) {
    if (head === null || head.next === null) {
        return true;
    }
  
    // find middle of the LinkedList
    let slow = head,fast = head;
    while ((fast !== null && fast.next !== null)) {
        slow = slow.next;
        fast = fast.next.next;
    }
  
    headSecondHalf = reverse(slow); // reverse the second half
    // store the head of reversed part to revert back later
    copyHeadSecondHalf = headSecondHalf;
  
    // compare the first and the second half
    while ((head !== null && headSecondHalf !== null)) {
        if (head.value !== headSecondHalf.value) {
            break; // not a palindrome
        }
    
        head = head.next;
        headSecondHalf = headSecondHalf.next;
    }
    reverse(copyHeadSecondHalf); // revert the reverse of the second half
  
    if (head === null || headSecondHalf === null) { // if both halves match
        return true;
    }
  
    return false;
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

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);

head.next.next.next.next.next = new Node(2);
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);