// @algorithm @lc id=1 lang=javascript 
// @title two-sum
// @test([2,7,11,15],9)=[0,1]
// @test([3,2,4],6)=[1,2]
// @test([3,3],6)=[0,1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const n = nums.length;
    for(let i = 0; i < n -1; i ++) {
      for(let j = i + 1; j < n; j ++) {
        if (nums[i] + nums[j] === target) {
          return [i, j]
        }
      }
    }
    return [];
};
