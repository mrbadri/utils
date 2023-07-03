"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Counter_1 = __importDefault(require("./Counter"));
describe("Counter class", () => {
    it("test decreamenr", () => {
        const counter = new Counter_1.default(10);
        counter.decreament();
        expect(counter).toEqual({ init: 10, current: 9 });
    });
});
