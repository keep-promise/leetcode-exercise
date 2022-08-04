// @algorithm @lc id=5 lang=javascript 
// @title longest-palindromic-substring
// @test("babad")="bab"
// @test("cbbd")="bb"
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  return longestPalindromeOn3(s);
};

var isPalindrome = function(str, start, end) {
  if (str[start] !== str[end]) return false;
  start ++;
  end --;
  if (end >= start) {
    return isPalindrome(str, start, end);
  }
  return true;
}

var isPalindrom2 = function(str) {
  return str.split('').reverse().join('') === str;
}

var longestPalindromeOn3 = function(s) {
  console.log('s', s)
  var len = s.length;
  var retstr = '';
  var first = 0;
  while (len > 0) {
    first = 0;
    while (first + len <= s.length) {
      var substr = s.substring(first, first + len);
      console.log('substr', substr)
      if (isPalindrom2(substr)) {
        len = 0;
        retstr = substr;
        break;
      }
      first ++;
    }
    len--;
  }
  return retstr;
};
