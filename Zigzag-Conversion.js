// @algorithm @lc id=6 lang=javascript 
// @title zigzag-conversion
// @test("PAYPALISHIRING",3)="PAHNAPLSIIGYIR"
// @test("PAYPALISHIRING",4)="PINALSIGYAHRPI"
// @test("A",1)="A"
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows <= 1) return s;
  let arr = [];
  let cirLen = 2 * numRows - 2;
  for (let i = 0; i < s.length;) {
    for(let j = 0; j < cirLen; j ++) {
      let index = j;
      if ( j == numRows) {
        index = numRows - 2;
      }
      if (j > numRows) {
        index = cirLen - j;
      }
      if (i + j >= s.length) {
        break;
      }
      console.log(i+j, index, s[i + j])
      arr[index] = (arr[index] || '') + s[i + j];
    }
    i = i + cirLen;
  }
  return arr.join('');
};
