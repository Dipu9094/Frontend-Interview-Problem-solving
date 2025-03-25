
// Problem: Given two arrays, return a new array containing only the common elements.
function arrayIntersection(arr1, arr2) {
    return arr1.filter((num) => arr2.includes(num));
}

console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
