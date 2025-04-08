function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = arr.filter((num) => num < pivot);
    let right = arr.filter((num) => num > pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
