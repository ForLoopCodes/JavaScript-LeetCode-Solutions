/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  out = []
  for (i = 0; i < nums.length; i++) {
    firstno = nums[i]
    for (j = i + 1; j < nums.length; j++) {
      secondno = nums[j]
      if (firstno + secondno === target) {
        return [i, j]
      }
    }
  }
};
