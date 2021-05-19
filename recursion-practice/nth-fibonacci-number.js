// Implement a function that takes a variable testVariable and finds the number that is placed at that index in the Fibonacci sequence.

// Recursive solution
function fibonacci(index) {
    if (index <= 1) return index;
  
    return fibonacci(index - 1) + fibonacci(index - 2);
}

// Iterative solution
function fibonacci(testVariable) {
    var fn0 = 0;
    var fn1 = 1;
      
    for (let i = 0; i < testVariable; i++) {
        var temp = fn0 + fn1;
    
        // Setting variables for next iteration
        fn0 = fn1;
        fn1 = temp;
    }
    return fn0;
}