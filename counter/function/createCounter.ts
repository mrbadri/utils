/**
 * Run:
 * node .\counter\function\createCounter.js
 *
 * Refrence:
 * https://leetcode.com/problems/counter-ii/
 */

type TCreateCounterReturn = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): TCreateCounterReturn {
  let val = init;

  return {
    increment: () => ++val,
    decrement: () => --val,
    reset: () => (val = init),
  };
}

// EXAMPLE:
// const counter = createCounter(5);
// console.log(counter.increment());// 6
// console.log(counter.reset()); // 5
// console.log(counter.decrement()); // 4

export default createCounter;
