/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  string1 = string1.split('')
  string2 = string2.split('')
  var result = ''
  
  for ( var i = 0 ; i < string1.length; i++){
  		for(var j = 0; j < string2.length; j++){
  			if (string1[i] === string2[j]){
  				result+= string1[i]
  				string1.splice(i,1)
  			}
  			
  		}
  }
return result
};

//

var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
 string1 = string1.split('')
 string2 = string2.split('')
 var result = ''
  
string1.forEach(function(element1){
	string2.forEach(function(element2){
		if (element1 === element2){
  			result+= element1
  		}
	})
})

  return result
};