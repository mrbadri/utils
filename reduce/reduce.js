"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reduce(nums, fn, init) {
    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i]);
    }
    return init;
}
// EXAMPLE:
// const fn = (accum: number, curr: number) => accum + curr;
// const result = reduce([1, 2, 3], fn, 0);
// console.log(result);
exports.default = reduce;
