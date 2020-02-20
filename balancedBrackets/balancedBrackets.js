
/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

//"[{]}"
// 

var isBalanced = function(str) {

	if(str.includes("[{]") || str.includes("[}]") ||str.includes("{[}") || str.includes("{]}")){
		return false 
	}

	str=str.split("")

	var parenthesis_counter = 0; var curly_brackets_counter = 0; var square_brackets_counter = 0;

	for(var i = 0; i < str.length; i++){
	
		if(parenthesis_counter < 0 || curly_brackets_counter < 0 || square_brackets_counter < 0){break;}

		if(str[i] === "("){parenthesis_counter++ }else if(str[i] === ")"){parenthesis_counter--}

		if(str[i] === "{"){curly_brackets_counter++}else if(str[i] === "}"){curly_brackets_counter--}

		if(str[i] === "["){square_brackets_counter++}else if(str[i] === "]"){square_brackets_counter--}

	}
		
	if(parenthesis_counter != 0 || curly_brackets_counter != 0 || square_brackets_counter != 0){return false }else{
	 return true
	}	

};
