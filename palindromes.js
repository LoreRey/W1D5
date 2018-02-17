function isPalindrome(s) {
  if (s.indexOf(" ") !== -1) {
    s = s.split(" ").join("");
  }
  var stringReverse = s.split("").reverse().join("");
  return s == stringReverse;
}

module.exports = isPalindrome;