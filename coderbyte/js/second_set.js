
var after = "after badly";
var laura = "Laura sobs";
var ba = "Boya";

function ABCheck(str){
	var new_str = str.toLowerCase().search(/a...b/);
	if(new_str){
		console.log(new_str);
		console.log((new_str > - 1) ? true : false);
	}
}
ABCheck(after);
ABCheck(laura);
ABCheck(ba);

function WordCount(str) { 
    var count = 0;
    var new_str = str.split(" ");
    for(var i = 0; i < new_str.length; i++){
        count = new_str.length;
    }
    return count;
}
   
// keep this function call here 
//WordCount(readline());

var first = "xooxxo";
var second = "xoo";
function ExOh(str) { 
    var new_str = str.toLowerCase().split("");
    var first_check = [];
    var second_check = [];
    for(var i = 0; i < new_str.length; i++){
        if(new_str[i] === 'x'){
            first_check.push(new_str[i]);
        } else {
            second_check.push(new_str[i]);
        }    
    }
    if(first_check.length === second_check.length){
        return true;
    }
        return false;
}

function checkOneWordBack(str){
	 var backwards = [];
	    for(var i = str.length - 1; i >= 0; i--){
	        backwards.push(str[i]);
	    }
	    backwards = backwards.join("");
	    if(backwards === str){
	        return true;
	    }
	    	return false;
}

function palindrome(str){
	str = str.replace(/\s+/g, "").toLowerCase();
	console.log(str);
	var second_string = str.split("").reverse().join("");
	console.log(second_string);
	return (str === second_string) ? true : false;
}

palindrome("eye");
palindrome("never odd or even");
palindrome("eye eye tiger");

var arithmetic = [5, 10, 15, 20];
var geometric = [2, 6, 18, 54];
var numbers = [1, 2, 3, 5];

function arithGeo(arr){
	var geo = true;
	var arith = true;
	var difference = arr[1] - arr[0];
	var ratio = arr[1] / arr[0];
	for(var i = 2; i < arr.length; i++){
		if((arr[i] - arr[i - 1]) !== difference){
			arith = false;
		}
	}
	if(arith === true){
		console.log("Arithmetic");
	}
	else {
		for(var j = 2; j < arr.length; j++){
			if((arr[j] / arr[j - 1]) !== ratio){
				geo = false;
			}
		}
		if(geo === true){
			console.log("Geometric");
		} else {
			console.log(-1);
		}
	}

}
arithGeo(geometric);
arithGeo(arithmetic);
arithGeo(numbers);

// Array Addition
// Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr
// and return the string true if any combination of numbers in the array can be added up to equal the largest
// number in the array, otherwise return the string false. 
// For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. 
// The array will not be empty, will not contain all the same elements, and may contain negative numbers. 



var falseCheck = [1,2,3,100];
var trueCheck = [3,5,-1,8,12];

function arrayAdd1(arr){
	arr.sort(function(a, b){
		return a - b;
	});
	console.log(arr);
	var topNumber = arr.pop();
	console.log(topNumber);
	function recursion(target, array){
		if(array.length === 0){
			return target === 0;
		}
		var n = array[0];
		array = array.slice(1);
		return recursion(target, array) || recursion(target - n, array);
	}
	return recursion(topNumber, arr);
}
arrayAdd1(falseCheck);

function arrayAddLoop(arr){
	arr.sort(function(a, b){
		return a - b;
	});
	var maxNumber = arr.pop();
	var total = 0;

	for(var i = 0; i < arr.length; i++){
		total += arr[i];
		console.log(arr[i] + " first loop");
		for(var j = 0; j < arr.length; j++){
			if(i != j){
				console.log(j + " which is not the same as array i " + i);
				total += arr[j];
				console.log(total + " running total");
				if(total === maxNumber){
					console.log(total, maxNumber);
					return true;
				}
			}
		}
		for(var k = 0; k < arr.length; k++){
			if(i != k){
				total -= arr[k];
				console.log(total + " total after k for loop");
				if(total == maxNumber){
					return true;
				}
			}
		}
		total = 0;
	}
	return false;
}
arrayAddLoop(falseCheck);


function LetterCount(string){
	var words = string.split(" ");
	console.log(words);
	//build table object so each word with a key & value pair, characters are key : value (how many times they've occurred)
	//e.g. {hello : {h : 1, e : 1, l : 2, o : 1 }}
	var table = {};

	//loop through each word
	for(var i = 0; i < words.length; i++){
		var this_word = words[i];
		table[this_word] = {};
		console.log(table);

		//key/value pair, will store highest letter count for each word
		table[this_word]["highest"] = 0;
		//loop through each character in word, store number of time each letter appears
		for(var c = 0; c < words[i].length; c++){
			//see if character exists in table
			var thisChar = this_word[c];
			console.log(thisChar);
			table[this_word][thisChar] === undefined ? table[this_word][thisChar] = 1 :
			table[this_word][thisChar] += 1;

			if(table[this_word][thisChar] > table[this_word]["highest"]){
				table[this_word]["highest"] =	 table[this_word][thisChar];	
			}
		}


	}

	var answer = {word : null, count : 1};
	// now determine what word has the highest number of repeating letters by accessing the "highest"
  	// property of each word in the table

  	for (var w in table) {
    if (table[w]["highest"] > answer["count"]) {
      answer["count"] = table[w]["highest"];
      answer["word"] = w;
      console.log(answer["word"]);
    }
  }
  console.log((answer["count"] === 1) ? -1 : answer["word"] );
	
}

LetterCount("world hello from coderbytee");









