// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.


//
function vowelsBack(string){
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
				"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var rest = ["r", "s", "t", "u", "v", "w", "x", "y", "z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q"]

	// var vowels = ["o","u","i","a","e"]

	var newString =""
	var temp = ""
	string = string.toLowerCase()
	for(var i = 0; i < string.length; i++){
		if (string[i] === "c" || string[i] === "o"){
			for(var j = 0; j < alphabet.length; j++){
				if(string[i] === alphabet[j]){
						temp = alphabet[j-1]	
				}
			}
		}else if (string[i] === "d"){
			for(var j = 0; j < alphabet.length; j++){
				if(string[i] === alphabet[j]){
						temp = alphabet[j-3]	
				}
			}
		}else if (string[i] === "e"){
			for(var j = 0; j < alphabet.length; j++){
				if(string[i] === alphabet[j]){
						temp = alphabet[j-4]	
				}
			}
		} else if (alphabet.includes(string[i])){
			for(var j = 0; j < alphabet.length; j++){
				if(string[i] === alphabet[j]){
					if(alphabet[j+9] !== undefined){
						temp = alphabet[j+9]	
					} else{
							for(var r = 0; r < rest.length; r++){
									if(string[i] === rest[r]){
										temp = rest[r+9]	
									}	
							}
						
					}
				}
			}	
		}else{
			for(var j = 0; j < alphabet.length; j++){
				if(string[i] === alphabet[j]){
						temp = alphabet[j-5]	
				}
			}	
		}
	
		newString += temp
	}
	return newString
}

	