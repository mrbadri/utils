"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exept_js_1 = __importDefault(require("./exept.js"));
describe('exept function', () => {
    it('should throw an error when toBe assertion fails', () => {
        const assertion = (0, exept_js_1.default)(5);
        expect(() => assertion.toBe(4)).toThrow("Not Equal");
    });
    it('should not throw an error when toBe assertion succeeds', () => {
        const assertion = (0, exept_js_1.default)(5);
        expect(() => assertion.toBe(5)).not.toThrow();
    });
    it('should throw an error when notToBe assertion fails', () => {
        const assertion = (0, exept_js_1.default)(5);
        expect(() => assertion.notToBe(5)).toThrow("Equal");
    });
    it('should not throw an error when notToBe assertion succeeds', () => {
        const assertion = (0, exept_js_1.default)(5);
        expect(() => assertion.notToBe(4)).not.toThrow();
    });
});
