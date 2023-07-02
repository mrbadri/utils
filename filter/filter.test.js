"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filter_1 = __importDefault(require("./filter"));
describe("filter function", () => {
    it("should filter array of number base on funtion input", () => {
        const arr = [1, 2, 3, 4, 6];
        expect((0, filter_1.default)(arr, (item) => item % 2 === 0)).toEqual([2, 4, 6]);
    });
});
