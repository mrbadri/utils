"use strict";
/**
 * Run:
 * node --trace-uncaught .\exept\exept.js
 *
 * Refrence:
 * https://leetcode.com/problems/to-be-or-not-to-be/
 */
Object.defineProperty(exports, "__esModule", { value: true });
const exept = (value) => {
    const throwError = (str) => {
        throw str;
    };
    return {
        toBe: (input) => input === value || throwError("Not Equal"),
        notToBe: (input) => input !== value || throwError("Equal"),
    };
};
exports.default = exept;
