/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/

// function characterFrequency(string){
// 	var temp = []
// 	var counter = 0
// 	string = string.split("")
// 	for(var i = 0; i < string.length;i++){
// 		for(var j = 0; j < string.length;j++){
// 			if(string[i] === string[j] ){
// 				counter++
// 			}
// 		}
// 		temp.push([string[i],counter])
// 		counter = 0
// 	}



// 	
// 	return temp
// }

//

 function characterFrequency(string){
	var obj ={};
	var arr = []
	for (var i = 0; i < string.length; i++) {

		if (!obj[string[i]]) {
			obj[string[i]] = 0
		}

		obj[string[i]]++
	}

	for(var key in obj){
		arr.push([key, obj[key]])
	}
  
  // if we change the index to zero, we can order based on the characters

	return arr.sort(function(a, b) {return a[1] - b[1];})
}
