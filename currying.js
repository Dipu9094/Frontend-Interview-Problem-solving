// Transforming a function so it takes arguments one by one.



function multiply(a) {
    return function(b) {
      return a * b;
    }
  }
  
  console.log(multiply(3)(4)); // 12
  