function reverseWords(sentence) {
    return sentence
        .split(" ")
        .map((word) => word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseWords("Hello world")); // Output: "olleH dlrow"
