/**
 * Test: 
 * npx jest ./map/map.test.ts
 * 
 * Run: 
 * node ./map/map.test.ts
 */

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const temp: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    temp[i] = fn(arr[i], i);
  }

  return temp;
}

export default map;
