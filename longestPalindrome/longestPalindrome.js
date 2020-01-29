/*
Implement a function that finds the longest palindrome in a given string. 
For example, in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". 
Count whitespaces as valid characters. 
Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
*/





function helper(str) {
  var re = /[\W_]/g;

  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');

  return reverseStr === lowRegStr;
}

function longestPalindrome(string) {
  // your code here...
  if (string === "") return;

  var text = ""
  var array = []
  for (var i = 0; i < string.length; i++) {
    text += string[i]
    if (text.length > 1) {
      if (helper(text) === true) {
        array.push(text)
        text = ""
      }
    }

  }
  return array
}