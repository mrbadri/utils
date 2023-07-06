import argumentsLength from "./argumentsLength"

describe("argumentsLength function", ()=>{
  it(
    'get length of function argumants', ()=>{
      const len = argumentsLength(1,2,3,4);
      expect(len).toBe(4);
    }
  )
})