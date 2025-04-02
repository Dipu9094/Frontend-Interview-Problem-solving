function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        console.log(`Outer: ${outerValue}, Inner: ${innerValue}`);
    };
}

const newFunction = outerFunction("Hello");
newFunction("World"); // Output: Outer: Hello, Inner: World
