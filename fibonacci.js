function fib(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
  
    return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  }
  
  console.log(fib(10)); // 55
  