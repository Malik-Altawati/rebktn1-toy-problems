'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a final-result callback.
 * Each of the tasks receives a task-specific callback that must be invoked when the task completes.
 * The final-result callback passed to asyncMap receives the results collected by the task-specfic callbacks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  }
 ],
  function(results){
    console.log(results); 
 });
 *
 *
 */


var asyncMap = function(tasks, cb) {
	var array = []
	
		var x = tasks.Map(task =>

		 return new Promise((resolve, reject) => {
        task();
        resolve(cb(task()));
    	})
	    .then(result => {
	        array.push(result)
	    });
			//
		console.log(array)
		//console.log(array)
		//return callback("result: ",array)
};



