// Write a function to return duplicate values from an array.


function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();
    for (let num of arr) {
        seen.has(num) ? duplicates.add(num) : seen.add(num);
    }
    return Array.from(duplicates);
}

// Usage:
console.log(findDuplicates([1, 2, 3, 4, 2, 5, 3]));
// Output: [2, 3]
