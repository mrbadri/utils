"use strict";
function debounce(func, waitFor) {
    let timeoutId = null;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => func(...args), waitFor);
    };
}
const debouncedFunc = debounce((text) => console.log(text), 5000);
debouncedFunc('Hello');
debouncedFunc('World');
