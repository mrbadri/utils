/**
 * Test:
 * npx jest ./map/map.test.ts
 *
 * Run:
 * node ./map/map.test.ts
 *
 * Refrence:
 * https://leetcode.com/problems/apply-transform-over-each-element-in-array
 */

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const temp: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    temp[i] = fn(arr[i], i);
  }

  return temp;
}

// EAMPLE
// const arr = map([1, 2, 3], (item) => item * 2);
// console.log(arr);

export default map;
