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
 	var temp = []
 	var counter = 0
 	string = string.split("")
 	for(var i = 0; i < string.length;i++){
 		for(var j = 0; j < string.length;j++){
 			if(string[i] === string[j] ){
 				counter++
 			}
 		}
 		temp.push([string[i],counter])
 		counter = 0
 	}

 	var obj = {}
 	for(var i = 0; i < temp.length; i++){
 		obj[temp[i][0]] = temp[i][1]
 	}

 	var final = []
 	for(var key in obj){
 		final.push([key,obj[key]])
 	}


 	return final.sort();
}
