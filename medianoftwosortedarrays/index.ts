// @algorithm @lc id=4 lang=javascript 
// @title median-of-two-sorted-arrays
// @test([1,3],[2])=2.00000
// @test([1,2],[3,4])=2.50000
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const nums3 = nums1.concat(nums2);
    nums3.sort();
    const n = nums3.length;
    const n1 = Math.floor(n/2)
    if (n % 2 == 1) {
      return nums3[n1];
    }
    const n2 = n1 - 1;
    return (nums3[n1] + nums3[n2]) / 2;
};
