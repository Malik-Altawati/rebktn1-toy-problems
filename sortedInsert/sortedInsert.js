/*
Sorted Insert

Given a sorted stack of integers (smallest integer at the top) and an element to insert, write a function – sortedInsert(stack, element) – which inserts the element into the correct position of the stack.

sortedInsert should manipulate the original stack and return the original stack.

The stack will have the methods:
  • isEmpty
  • peek
  • push
  • pop. 
  
You can also use count to view how many elements are in the stack. 
The stack implementation is available to view below.
*/

// the stack class is exposed here for reference, you may or may not utilize additional stacks in your algorithm.

var Stack = function (initialValue) {
  this.store = {};
  this.count = 0;

  if (initialValue !== undefined) {
    this.push(initialValue);
  }
};

Stack.prototype.isEmpty = function () {
  return !this.count;
};

Stack.prototype.peek = function () {
  return this.store[this.count];
};

Stack.prototype.push = function (val) {
  this.store[++this.count] = val;
};

Stack.prototype.pop = function () {
  if (!this.isEmpty()) {
    var tmp = this.store[this.count];
    delete this.store[this.count--];
    return tmp;
  }
};

// function sortedInsert(stack, element) {
//   // your code here...
//   //{1: 5, 2: 7, 3: 19, 4: 3}   
//   var newStack = {}
//   var i = 1
//   for (var key in stack) {
//     if (stack[key] < element) {
//       newStack[i] = stack[key]
//       i++
//     }
//   }
//   newStack[i] = element
//   var j = i + 1
//   for (var key in stack) {
//     if (stack[key] > element) {
//       newStack[j] = stack[key]
//       j++
//     }
//   }

//   return newStack
// }

function sortedInsert(stack, element) {
  var x = Object.values(stack)
  x.push(element)
  x.sort()
  for (var i = 1; i < x.length; i++) {
    stack[i] = x[i]
  }
  return stack
}
