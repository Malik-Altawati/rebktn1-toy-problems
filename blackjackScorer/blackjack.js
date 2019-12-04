/* Complete the function that determines the score of a hand in the card game Blackjack (aka 21).

The function receives an array of strings that represent each card in the hand ("2", "3", ..., "10", "J", "Q", "K" or "A") and should return the score of the hand (integer).
Scoring rules:

Number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.

Return the highest score of the cards that is less than or equal to 21. If there is no score less than or euqal to 21 return the smallest score more than 21.
Examples

["A"]                           ==>  11
["A", "J"]                      ==>  21
["A", "10", "A"]                ==>  12
["5", "3", "7"]                 ==>  15
["5", "4", "3", "2", "A", "K"]  ==>  25 */
//
// 
// Jack, Queen and King count as 10
// A = 11 or 1
// 

function blackJack(array){
	var sum = 0;
	var counter = 0

	array.forEach(function(element){
		if(element === 'A'){
			counter++
		}
	})


	for(var i = 0; i < array.length; i++){

		if (array[i] === 'J' || array[i] === 'Q' || array[i] === 'K'){
			array[i] = 10
		}
		if(counter > 1){
			if(array[i] === 'A'){
				array[i] = 1
			}
		} else {
			if(array[i] === 'A'){
				array[i] = 11
			}
		}

		array[i] = parseInt(array[i])

		if (array[i] <= 21 ){
			sum+= array[i]
			if (sum > 21){
				break;
			}
		}

	}
	return sum
}
