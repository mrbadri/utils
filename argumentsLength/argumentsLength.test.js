"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const argumentsLength_1 = __importDefault(require("./argumentsLength"));
describe("argumentsLength function", () => {
    it('get length of function argumants', () => {
        const len = (0, argumentsLength_1.default)(1, 2, 3, 4);
        expect(len).toBe(4);
    });
});
