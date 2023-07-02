import filter from "./filter";

describe("filter function", () => {
  it("should filter array of number base on funtion input", () => {
    const arr = [1, 2, 3, 4, 6];
    expect(filter(arr, (item) => item % 2 === 0)).toEqual([2, 4, 6]);
  });
});
