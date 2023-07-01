import map from './map';

// Test Case 1: Test map function with a simple transformation
test('map function should transform the array correctly', () => {
  const arr = [1, 2, 3];
  const result = map(arr, (n) => n * 2);
  expect(result).toEqual([2, 4, 6]);
});

// Test Case 2: Test map function with a different transformation
test('map function should transform the array correctly', () => {
  const arr = [4, 5, 6];
  const result = map(arr, (n, i) => n + i);
  expect(result).toEqual([4, 6, 8]);
});

// Additional Test Cases...

// Test Case 3: Test map function with an empty array
test('map function should return an empty array when given an empty array', () => {
  const arr: number[] = [];
  const result = map(arr, (n) => n);
  expect(result).toEqual([]);
});

// Test Case 4: Test map function with negative numbers
test('map function should transform the array correctly when given negative numbers', () => {
  const arr = [-1, -2, -3];
  const result = map(arr, (n) => Math.abs(n));
  expect(result).toEqual([1, 2, 3]);
});
