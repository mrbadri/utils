// RUN: 
// node --trace-uncaught .\exept\exept.js

type TExeptRetrun = {
  toBe: (input: any) => boolean;
  notToBe: (input: any) => boolean;
};

const exept = (value: any): TExeptRetrun => {
  const throwError = (str: string) => {
    throw str;
  };

  return {
    toBe: (input: any) => input === value || throwError("Not Equal"),
    notToBe: (input: any) => input !== value || throwError("Equal"),
  };
};



export default exept;