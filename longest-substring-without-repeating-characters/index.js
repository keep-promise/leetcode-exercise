// @algorithm @lc id=3 lang=javascript 
// @title longest-substring-without-repeating-characters
// @test("abcabcbb")=3
// @test("bbbbb")=1
// @test("pwwkew")=3
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;
  const obj = {};
  let max = 0;
  for (let i = 0, j = 0; i < s.length; i ++) {
    const t = s[i];
    if (obj[t] !== undefined) {
      j = Math.max(j, obj[t] + 1);
    }
    obj[t] = i;
    max = Math.max(max, i - j + 1);
    console.log('==>>>', i, j, obj);
  }
  return max;
};
