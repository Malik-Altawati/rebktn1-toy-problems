/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

  
var deepEquals = function(apple, orange) {
  var arr1 = []
  var arr2 = []
  var output1 = ""
  var output2 = ""

  
  for (var key in apple){
    arr1.push(key,apple[key])
      for(var keys in apple[key]){
        arr1.push(keys,apple[key][keys])
      }
  }

  for (var key in orange){
    arr2.push(key,orange[key])
      for(var keys in orange[key]){
        arr2.push(keys,orange[key][keys])
      }
  }

  var result1 = arr1.filter(function(element1){
    return (typeof(element1) === "number" || typeof(element1) === "string")
  })

   var result2 = arr2.filter(function(element2){
    return (typeof(element2) === "number" || typeof(element2) === "string")
  })


  result1.forEach(function(element1){
    output1+= element1
  })
    result2.forEach(function(element2){
    output2+= element2
  })

  return output1 === output2
}

///


