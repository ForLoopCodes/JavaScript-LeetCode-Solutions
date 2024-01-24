/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = [nums[0]]
    for (i = 0; i < nums.length - 1; i++) {
      sum[sum.length] = sum[i] + nums[i + 1]
    }
    return sum
};
