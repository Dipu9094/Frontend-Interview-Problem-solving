function first() {
    console.log("First");
}

function second() {
    first();
    console.log("Second");
}

second();
// Call Stack:
// 1. second() → Calls first()
// 2. first() executes → Logs "First"
// 3. first() is removed from stack
// 4. Logs "Second"
