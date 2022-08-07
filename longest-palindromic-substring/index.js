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

var longestPalindromeOn2 = function(s) {
  var dp = []; // 记录状态
  var max = 1; // 回文串最大长度
  var max_start = 0;

  for (let i = 0; i < s.length; i++) {
    dp.push([]);
  }

  for (let end = 0; end < s.length; end++) {
    for (var start = 0; start < end; start++) {
      if (s[start] === s[end]) {
        if (end - start <= 2 || dp[start+1][end-1]) {
          if (end - start + 1 > max) {
            max = end - start + 1;
            max_start = start;
          }
          dp[start][end] = true;
        }
      }
    }
  }
  return s.substring(max_start, max_start + max);
}
