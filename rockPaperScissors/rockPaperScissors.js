
// * Write a function that generates every sequence of throws a single
// * player could throw over a three-round game of rock-paper-scissors.
// *
// * Your output should look something like:
// *   ["RRR",
// *    "RRP",
// *    "RRS",
// *    "RPR",
// *    ...etc...
// *   ]
// *
// * Extra credit:
// *   - Make your function return answers for any number of rounds.
// *
// * Example:
// * rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
// *


var rockPaperScissors = function( n ) {
  var RPS = ['R', 'P', 'S'];
  var results = [];
  var finalOutput = []
  
  var output = function(array, currentRound) {
    for(var i = 0; i < RPS.length; i++){ array.push(RPS[i]);

      if(currentRound === n){ results.push(array.slice());
       }else{ output(array, currentRound + 1);
      } 
      array.pop();
     }
   }
  output([], 1);

  
  for(var i = 0; i < results.length; i++) finalOutput.push(results[i].join(""))

  return finalOutput
}
///