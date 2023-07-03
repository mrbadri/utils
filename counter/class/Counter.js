"use strict";
/**
 * Test:
 * npx jest .\counter\class\Counter.test.ts
 *
 * Run:
 * node .\counter\class\Counter.js
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Counter {
    constructor(init) {
        this.init = init;
        this.current = init;
    }
    increment() {
        return ++this.current;
    }
    decreament() {
        return --this.current;
    }
    reset() {
        this.current = this.init;
        return (this.current = this.init);
    }
}
// EXAMPLE
// const counter = new Counter(10);
// console.log(counter);
// counter.decreament();
// console.log(counter);
// counter.reset();
// console.log(counter);
// counter.increment();
// console.log(counter);
exports.default = Counter;
