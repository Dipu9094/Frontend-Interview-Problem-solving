function* count() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const counter = count();
  console.log(counter.next().value); // 1
  console.log(counter.next().value); // 2
  console.log(counter.next().value); // 3
  console.log(counter.next().done);  // true
  