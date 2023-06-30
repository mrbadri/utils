"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(func, waitFor) {
    let timeoutId = null;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => func(...args), waitFor);
    };
}
const debounce2 = (func, waitfor) => {
    let setTimoutId = null;
    return (...args) => {
        if (setTimoutId) {
            clearTimeout(setTimoutId);
        }
        setTimoutId = setTimeout(() => {
            func(...args);
        }, waitfor);
    };
};
// EXAMPLE:
const debouncedFunc = debounce((text) => console.log(text), 5000);
debouncedFunc("Hello");
debouncedFunc("World");
const testFn = debounce2(console.log, 5000);
testFn('hiiii');
testFn('hiiii2');
exports.default = debounce;
