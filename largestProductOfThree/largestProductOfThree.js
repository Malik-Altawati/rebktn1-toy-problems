/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40  [-5,-2,1,4] -> [-5, -2, 4]
*/

function largestProductOfThree(array) {

	array = array.sort(function(a,b){return a - b})
	var max = Math.max.apply(Math,array)
	

	var result;
	var temp ;

	var test = array;
	
    var checker = test.some(v => v < 0);

	if (checker === false) {

		result = array[array.length-1] * array[array.length-2] * array[array.length-3]

	}else{
				
			for(var i = 0; i < array.length; i++){
				
				if( Math.abs(array[i]) > max){
					temp= array[i]
				}
			}

			if(temp){
				result = array[0] * array[1] * array[array.length-1]
				}

			}
	return result
}
