"use strict";
/**
 * Run:
 * node .\counter\function\createCounter.js
 *
 * Refrence:
 * https://leetcode.com/problems/counter-ii/
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createCounter(init) {
    let val = init;
    return {
        increment: () => ++val,
        decrement: () => --val,
        reset: () => (val = init),
    };
}
// EXAMPLE:
// const counter = createCounter(5);
// console.log(counter.increment());// 6
// console.log(counter.reset()); // 5
// console.log(counter.decrement()); // 4
exports.default = createCounter;
