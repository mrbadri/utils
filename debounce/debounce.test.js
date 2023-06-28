"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debounce_1 = __importDefault(require("./debounce")); // import debounce from where it's defined
jest.useRealTimers(); // Use real timers
describe("debounce function", () => {
    it("should call the passed function only once if called multiple times within the delay period", (done) => {
        const callback = jest.fn();
        const debounced = (0, debounce_1.default)(callback, 500);
        debounced("Hello");
        debounced("World");
        setTimeout(() => {
            expect(callback).toHaveBeenCalledTimes(1);
            expect(callback).toHaveBeenCalledWith("World");
            done();
        }, 1000); // wait for the debounced function to be called
    });
    it("should call the passed function twice if called with a delay more than the debounce time", (done) => {
        const callback = jest.fn();
        const debounced = (0, debounce_1.default)(callback, 500);
        debounced("Hello");
        setTimeout(() => debounced("World"), 600);
        setTimeout(() => {
            expect(callback).toHaveBeenCalledTimes(2);
            expect(callback).toHaveBeenNthCalledWith(1, "Hello");
            expect(callback).toHaveBeenNthCalledWith(2, "World");
            done();
        }, 1500); // wait for the debounced functions to be called
    });
});
