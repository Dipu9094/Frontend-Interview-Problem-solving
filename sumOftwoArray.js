function addTwoNumbers(arr1, arr2) {
    let carry = 0;
    let result = [];
    let i = arr1.length - 1;
    let j = arr2.length - 1;
  
    while (i >= 0 || j >= 0 || carry) {
      let sum = (arr1[i] || 0) + (arr2[j] || 0) + carry;
      carry = Math.floor(sum / 10);
      result.unshift(sum % 10);
      i--;
      j--;
    }
  
    return result;
  }
  
  console.log(addTwoNumbers([9, 9], [1])); // [1, 0, 0]
  