// Problem:
// Write a function to deeply clone an object.
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Usage:
const obj = { a: 1, b: { c: 2 } };
const clone = deepClone(obj);
clone.b.c = 42;
console.log(obj.b.c); // Output: 2 (original remains unchanged)
