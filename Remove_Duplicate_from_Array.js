function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1])); // Output: [1, 2, 3, 4]
