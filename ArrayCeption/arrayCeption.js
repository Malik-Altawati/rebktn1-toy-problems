// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0




function Arrayception(array) {
    var deep = 0
    var max = 0
    function check(array, deep) {
        array.forEach(function (item) {
            if (Array.isArray(item) && item.length > 0) {
                check(item, deep++)
            } else {
                result++
            }

            if (deep > max) {
                max = deep
            }
        })
    }
    check(array, deep)

    return max
}
