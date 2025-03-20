// Problem: Reverse a string without reverse() function 

function reverseString(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// Usage:
console.log(reverseString("hello")); // Output: "olleh"
