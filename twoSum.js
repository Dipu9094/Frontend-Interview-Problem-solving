function twoSum(nums, target) {
    const map = {};
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map[complement] !== undefined) {
        return [map[complement], i];
      }
      map[nums[i]] = i;
    }
  }
  
  console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
  