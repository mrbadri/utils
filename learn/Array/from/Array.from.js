"use strict";
/**
 * Run:
 * node .\learn\Array\from\Array.from.js
 *
 * Refrence:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 */
console.log(Array.from("Hello"));
// output: [ 'H', 'e', 'l', 'l', 'o' ]
console.log(Array.from("hello", (item) => "_" + item));
// output: [ '_h', '_e', '_l', '_l', '_o' ]
console.log(Array.from("hello", (item, i) => {
    console.log(item, i);
    return "test";
}));
// output: [ 'test', 'test', 'test', 'test', 'test' ]
const map = new Map([
    [1, 2],
    [2, 4],
    [4, 8],
]);
console.log(Array.from(map));
// output: [ [ 1, 2 ], [ 2, 4 ], [ 4, 8 ] ]
console.log(Array.from({ length: 5 }, (_, i) => ++i));
// output: [ 1, 2, 3, 4, 5 ]
