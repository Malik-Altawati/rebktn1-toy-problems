
/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
    this.array = []
    this.minimum = 100000000000000;
    this.minimumArray = []

  // add an item to the top of the stack
    this.push = function(value) {
      this.array.push(value)
      if(value < this.minimum){
        this.minimum = value
        this.minimumArray.push(value)
      }

    };

  // remove an item from the top of the stack
    this.pop = function() {
      var temp = this.array.pop()
       if(temp === this.minimum){
        this.minimumArray.pop()
        this.minimum = this.minimumArray[this.minimumArray.length-1]
       }
    };

  // return the number of items in the stack
    this.size = function() {
      return this.array.length
    };
  
  // return the minimum value in the stack
    this.min = function() {
      return this.minimum

    };

  };



