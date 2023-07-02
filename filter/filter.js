"use strict";
/**
 * Test:
 * npx jest ./filter/filter.test.ts
 *
 * Run:
 * node ./filter/filter.js
 *
 * Refrence:
 * https://leetcode.com/problems/filter-elements-from-array
 */
Object.defineProperty(exports, "__esModule", { value: true });
function filter(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i))
            filteredArr.push(arr[i]);
    }
    return filteredArr;
}
// EXAMPLE:
// const arr = [1, 2, 3, 4, 6];
// console.log(filter(arr, (item) => item % 2 === 0));
const arr = Array.from({ length: 10 }, (_, i) => _);
console.log(arr);
exports.default = filter;
