// Q1:
// What is diif between x++ and ++x;
/**
 * x++ (Postfix increment operator): This is a post-increment operator, which means that it increments the value of x after the current statement is processed. For instance, if you have var y = x++, the original value of x is assigned to y, and then x is incremented.

++x (Prefix increment operator): This is a pre-increment operator, which means that it increments the value of x before the current statement is processed. So if you have var y = ++x, the value of x is incremented first, and then the new value of x is assigned to y.
 */

let x = 5;
let y = x++; // y gets the current value of x (5), then x is incremented.
console.log(x); // prints 6
console.log(y); // prints 5

x = 5; // reset x
y = ++x; // x is incremented first, then y gets the new value of x (6)
console.log(x); // prints 6
console.log(y); // prints 6

// Q2:
// What are the advantages/disadvantages of using a switch statement over if-else statements?

// Q3:
// The main difference in terms of performance, readability, maintainability etc.

// Q4:
// What is Map in js 
