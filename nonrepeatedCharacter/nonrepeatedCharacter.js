/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  string = string.split('')
 	var testing = {}
 	var j = 1
 	var Tester = 100
	var Least;

 	for (var i = 0 ; i < string.length; i++){

		 if(testing[string[i]] === undefined){
		 	testing[string[i]] = j
		 }else { 
		 	testing[string[i]] = testing[string[i]]+1
		 }
     }

	for (var key in testing){
		 if (testing[key] < Tester){
			Tester = testing[key]
			Least = key
		}
	}

return Least;
};
