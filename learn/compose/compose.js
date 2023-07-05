"use strict";
/**
 * Refrence:
 * https://leetcode.com/problems/function-composition
 */
Object.defineProperty(exports, "__esModule", { value: true });
function compose(functions) {
    return function (x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            const fn = functions[i];
            x = fn(x);
        }
        return x;
    };
}
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
exports.default = compose;
