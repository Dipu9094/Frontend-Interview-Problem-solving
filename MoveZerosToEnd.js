function moveZeros(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        [arr[i], arr[count]] = [arr[count], arr[i]];
        count++;
      }
    }
    return arr;
  }
  
  console.log(moveZeros([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
  