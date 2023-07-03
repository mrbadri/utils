import exept from "../exept/exept";
import reduce from "./reduce";

describe("reduce function", () => {
  it("should return the correct result", () => {
    const fn = (accum: number, curr: number) => accum + curr;
    const result = reduce([1, 2, 3], fn, 0);
    exept(result).toBe(6)
  });
});
