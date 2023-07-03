import Counter from "./Counter";

describe("Counter class", () => {
  it("test decreamenr", () => {
    const counter = new Counter(10);
    counter.decreament();

    expect(counter).toEqual({ init: 10, current: 9 });
  });
});
