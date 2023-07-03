/**
 * Run: 
 * node .\counter\class\Counter.js
 * 
 */

class Counter {
  init: number;
  current: number;

  constructor(init: number) {
    this.init = init;
    this.current = init;
  }

  increment(): number {
    return ++this.current;
  }

  decreament(): number {
    return --this.current;
  }

  reset(): number {
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

export default Counter;
