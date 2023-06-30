function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number) {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<F>): void => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => func(...args), waitFor);
  };
}

const debounce2 = <F extends (...args: any[]) => any>(
  func: F,
  waitfor: number
) => {
  let setTimoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<F>): void => {
    if (setTimoutId) {
      clearTimeout(setTimoutId);
    }

    setTimoutId = setTimeout(() => {
      func(...args);
    }, waitfor);
  };
};

// EXAMPLE:
const debouncedFunc = debounce((text: string) => console.log(text), 5000);
debouncedFunc("Hello");
debouncedFunc("World");

const testFn = debounce2(console.log, 5000);
testFn('hiiii')
testFn('hiiii2')

export default debounce;
