// 2.d. Write a function called `findMaximumSubarray` that takes an array of integers 
// as input and returns the maximum sum of any contiguous subarray within the input array.

function findMaximumSubarray(nums) {
    if (nums.length === 0) {
      return 0;
    }
  
    let maxSum = nums[0];
    let currentSum = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      currentSum = Math.max(nums[i], currentSum + nums[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log(findMaximumSubarray(arr));
  


