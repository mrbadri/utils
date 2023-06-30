"use strict";
// RUN: 
// node --trace-uncaught .\exept\exept.js
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
