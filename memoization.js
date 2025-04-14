function memoize(fn) {
    const cache = {};
    return function (...args) {
      const key = JSON.stringify(args);
      if (cache[key]) return cache[key];
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  }
  
  const slowAdd = (a, b) => {
    console.log("Calculating...");
    return a + b;
  };
  
  const fastAdd = memoize(slowAdd);
  console.log(fastAdd(2, 3)); // Calculating... 5
  console.log(fastAdd(2, 3)); // 5 (no log this time)
  