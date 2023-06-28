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
exports.default = debounce;
// EXAMPLE:
// const debouncedFunc = debounce((text: string) => console.log(text), 5000);
// debouncedFunc('Hello');
// debouncedFunc('World');
