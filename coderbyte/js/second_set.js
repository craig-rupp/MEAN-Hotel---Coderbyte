
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

var letterCount = "Today, is the greatest day ever";

function letterSimilarCount(str){
	//array of words
	var words = str.toLowerCase().split(" ");

	//table object will contain each word with a key and value pair 
	//e.g. {hello: {h: 1, e: 1, l: 2, o: 1}}
	var table = {};

	for(var i = 0; i < words.length; i++){
		//grab each words put in object
		var thisWord = words[i];
		table[thisWord] = {};

		// create a key/value pair that will store
    	// the highest letter count for each word
    	table[thisWord]["highest"] = 0;

    	for(var c = 0; c < words[i].length; c++){
    		var thisChar = thisWord[c];
    		table[thisWord][thisChar] === undefined ? table[thisWord][thisChar] = 1 : table[thisWord][thisChar] += 1;

    		if(table[thisWord][thisChar] > table[thisWord]["highest"]){
    			table[thisWord]["highest"] = table[thisWord][thisChar];
    		}
    	}
	}


}

letterSimilarCount(letterCount);









