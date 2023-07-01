"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = __importDefault(require("./map"));
// Test Case 1: Test map function with a simple transformation
test('map function should transform the array correctly', () => {
    const arr = [1, 2, 3];
    const result = (0, map_1.default)(arr, (n) => n * 2);
    expect(result).toEqual([2, 4, 6]);
});
// Test Case 2: Test map function with a different transformation
test('map function should transform the array correctly', () => {
    const arr = [4, 5, 6];
    const result = (0, map_1.default)(arr, (n, i) => n + i);
    expect(result).toEqual([4, 6, 8]);
});
// Additional Test Cases...
// Test Case 3: Test map function with an empty array
test('map function should return an empty array when given an empty array', () => {
    const arr = [];
    const result = (0, map_1.default)(arr, (n) => n);
    expect(result).toEqual([]);
});
// Test Case 4: Test map function with negative numbers
test('map function should transform the array correctly when given negative numbers', () => {
    const arr = [-1, -2, -3];
    const result = (0, map_1.default)(arr, (n) => Math.abs(n));
    expect(result).toEqual([1, 2, 3]);
});
