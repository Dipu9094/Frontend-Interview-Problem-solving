console.log(x); // Undefined (not error)
var x = 10;

console.log(y); // ReferenceError (let & const are not hoisted the same way)
let y = 20;
