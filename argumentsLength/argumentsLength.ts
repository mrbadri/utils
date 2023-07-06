/**
 * Test: 
 *  npx jest ./argumentsLength/argumentsLength.test.ts
 * 
 * Run: 
 * node .\argumentsLength\argumentsLength.js
 * 
 * Refrence: 
 * https://leetcode.com/problems/return-length-of-arguments-passed/description/
 */

function argumentsLength(...args: any[]): number {
  let len = 0;

  for (let i = 0; i < args.length; i++) {
    len++;
  }

  return len;
}

// EXAMPLE:
// argumentsLength(1, 2, 3);

export default argumentsLength;
