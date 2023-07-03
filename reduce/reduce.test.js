"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exept_1 = __importDefault(require("../exept/exept"));
const reduce_1 = __importDefault(require("./reduce"));
describe("reduce function", () => {
    it("should return the correct result", () => {
        const fn = (accum, curr) => accum + curr;
        const result = (0, reduce_1.default)([1, 2, 3], fn, 0);
        (0, exept_1.default)(result).toBe(6);
    });
});
