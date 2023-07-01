"use strict";
/**
 * Test:
 * npx jest ./map/map.test.ts
 *
 * Run:
 * node ./map/map.test.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
function map(arr, fn) {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp[i] = fn(arr[i], i);
    }
    return temp;
}
exports.default = map;
