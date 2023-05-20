// 1.d. Write a function called `longestIncreasingSubsequence` that takes an array
//  of numbers as input and returns the length of the longest increasing subsequence in the array.
//   A subsequence is a sequence that can be derived from another sequence
//  by deleting some or no elements without changing the order of the remaining elements.


function longestIncreasingSubsequence(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(1); // Initialize an array with length n and fill it with 1's
    
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }
    
    // Find the maximum value in the dp array
    let maxLength = 0;
    for (let i = 0; i < n; i++) {
      maxLength = Math.max(maxLength, dp[i]);
    }
    
    return maxLength;
  }
  
  // Example usage:
  const nums = [10, 9, 2, 5, 3, 7, 101, 18]; // Longest increasing subsequence: [2, 3, 7, 101]
  console.log(longestIncreasingSubsequence(nums)); // Output: 4
  
