import createCounter from './createCounter'; // replace './createCounter' with the actual path

describe('createCounter function', () => {
  it('should increment the counter', () => {
    const counter = createCounter(5);
    expect(counter.increment()).toEqual(6);
  });

  it('should decrement the counter', () => {
    const counter = createCounter(5);
    counter.increment(); // to make sure we are not at the initial value
    expect(counter.decrement()).toEqual(5);
  });

  it('should reset the counter', () => {
    const counter = createCounter(5);
    counter.increment(); // changing the initial value
    expect(counter.reset()).toEqual(5);
  });

  it('should maintain state between function calls', () => {
    const counter = createCounter(5);
    counter.increment();
    counter.increment();
    counter.decrement();
    expect(counter.reset()).toEqual(5);
    expect(counter.decrement()).toEqual(4);
  });
});

