import exept from "./exept.js"; 

describe('exept function', () => {
  it('should throw an error when toBe assertion fails', () => {
    const assertion = exept(5);
    expect(() => assertion.toBe(4)).toThrow("Not Equal");
  });

  it('should not throw an error when toBe assertion succeeds', () => {
    const assertion = exept(5);
    expect(() => assertion.toBe(5)).not.toThrow();
  });

  it('should throw an error when notToBe assertion fails', () => {
    const assertion = exept(5);
    expect(() => assertion.notToBe(5)).toThrow("Equal");
  });

  it('should not throw an error when notToBe assertion succeeds', () => {
    const assertion = exept(5);
    expect(() => assertion.notToBe(4)).not.toThrow();
  });
});
