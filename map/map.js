"use strict";
/**
 * Test:
 * npx jest ./map/map.test.ts
 *
 * Run:
 * node ./map/map.test.ts
 *
 * Refrence:
 * https://leetcode.com/problems/apply-transform-over-each-element-in-array
 */
Object.defineProperty(exports, "__esModule", { value: true });
function map(arr, fn) {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp[i] = fn(arr[i], i);
    }
    return temp;
}
// EAMPLE
// const arr = map([1, 2, 3], (item) => item * 2);
// console.log(arr);
exports.default = map;
