// @algorithm @lc id=7 lang=javascript 
// @title reverse-integer
// @test(123)=321
// @test(-123)=-321
// @test(120)=21
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var res = 0;
  while (x != 0) {
    // 取余
    let y = x % 10; // 余数（个位数）
    res = res * 10 + y;
    x = (x - y)/10;
  }

  if (Math.pow(2, 31) < res || Math.pow(2, 31) < -res) return 0;
  return res;
};
