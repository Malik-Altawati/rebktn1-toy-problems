/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

// var binarySearch = function (array, target) {
// 	for(var i = 0 ; i < array.length; i++){
// 		if(array[i] === target){
// 			return i;
// 		}
// 	}
// 	return null;
// };

//

//binarySearch([1, 2, 3, 4, 5], 4);
var binarySearch = function (array, target) {
   var min = 0;
   var max = array.length - 1;
   var midPoint;
   //3
    while (max > min) {
        midPoint = Math.ceil((max + min)/2);        
        if (array[midPoint] === target) {
            return midPoint;
        }
        else if(array[midPoint] < target){
            min = midPoint++;
        }
        else {
            max = midPoint--;
        }
    }
    
    return null;
};




