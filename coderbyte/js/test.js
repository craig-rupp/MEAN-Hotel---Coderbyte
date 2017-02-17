//console.log('hello');
console.log('Longest String in Function');

var string = "Hello there Gooner";
var anotherString = "What the hellers";
var largest = 0;
var longString = "";
function longestString(str){
	var arrayOfStrings = str.split(" ");
	arrayOfStrings.forEach(function(el){
		if(el.length > largest){
			largest = el.length;
			longString = el;
		}
	});
	console.log(longString);
}
function forLongest(str){
	var forStrings = str.split(" ");
	for(var i = 0; i < forStrings.length; i++){
		if(forStrings[i].length > largest){
			largest = forStrings[i].length;
			longString = forStrings[i];
		}
	}
	console.log(longString);
}

//First Reverse CoderByte Challenge an string entered will reverse string
function FirstReverse(str) {
    
    var newstr = '';
    for(var i = str.length - 1; i >= 0; i--){
        newstr += str[i];
    }
  // code goes here  
  console.log(newstr); 
         
}
   
 
FirstReverse(anotherString);

//First Factorial CoderByte Challenge any number entered will return facotrial 4  = 24
function FirstFactorial(num) { 
    if(num === 0) {
        return 1;
    } else {
        return num * FirstFactorial(num - 1);
    }
  // code goes here  
  //return num; 

}
   
// keep this function call here 
//FirstFactorial(readline());

//Return next letter in alphabet from string, capitalize vowels
var test_string = "hello";
function nextNCapitalize(str) {
	var string = str.split('');
	for(var i = 0; i < string.length; i++){
		switch(string[i]) {
			case ' ':
			break;
			case 'z':
			string[i] = 'a';
			break;
			case 'Z':
			string[i] = 'A';
			break;
			default:
			string[i] = String.fromCharCode(1 + string[i].charCodeAt(0));
		}
		switch(string[i]){
			case 'a' : case 'e' : case 'i' : case 'o' : case 'u' :
			string[i] = string[i].toUpperCase();
		}
	}
	console.log(string.join(''));
}


nextNCapitalize(test_string);

function letterChanges(str) {
	var res = '';
	for (var i = 0; i < str.length; i++){
		var cur = str[i];
		if(cur == 'z'){
			cur = 'a';
		} else if(str.charCodeAt(i) >= 'a'.charCodeAt(0) && str.charCodeAt(i) <= 'z'.charCodeAt(0)) {
			cur = String.fromCharCode(str.charCodeAt(i) + 1);
		}
		if(cur == 'a' || cur == 'e' || cur == 'i' || cur == 'o' || cur == 'i'){
			cur = cur.toUpperCase();
		}
		res += cur;
	}
	console.log(res);
}
letterChanges('daughter');

//takes in numbers adds all integers in (4 = 1 + 2 + 3 + 4 = 10);
function simpleAdding(number) {
	var result = 0;
	for(var i = 1; i <= number; i++){
		result += i;
	}
	return result;
}

simpleAdding(4);

//capitalize each letter at start or after space (this is that == This Is That)
var testing = "this is that";
function letterCapitalize(str) {
	var letterArray = str.split(" ");
	console.log(letterArray);
	for(var i = 0; i < letterArray.length; i++){
		//console.log(letterArray[i].charAt(1));
		console.log(letterArray[i].slice(1));
		letterArray[i] = letterArray[i].charAt(0).toUpperCase() + letterArray[i].slice(1);
	}
	console.log(letterArray);
}

letterCapitalize(testing);

var symbols = "+D+===+s+";
var symbols_two = "+D+===+s+r";
function simpleSymbols(sym) {
	var sym_array = sym.toLowerCase().split("");
	for(var i = 0; i < sym_array.length; i++){
		if(sym_array[0] >= 'a' && sym_array[0] <= 'z' || sym_array[sym_array.length - 1] >= 'a' && sym_array[sym-array.length - 1] <= 'z'){
			return false;
		}
		else if(sym_array[i] >= 'a' && sym_array[i] <= 'z' && sym_array[i - 1] !== '+' && sym_array[i + 1] !== '+'){
			return false;
		}
	}
	console.log(true); 
}

simpleSymbols(symbols);
//simpleSymbols(symbols_two);

// if(sym_array[i] == '+' && sym_array[i + 1] >= 'a' && sym_array[i + 1] <= 'z' && sym_array[i + 2] == '+'){
// 	console.log(true);
// }

function moreSimpleSymbols(symb) {
	var symb_array = symb.toLowerCase().split("");
	for(var i = 0; i < symb_array.length; i++){
		if(symb_array[i] >= 'a' && symb_array[i] <= 'z'){
			if(i === 0 || i === symb_arr.length - 1){
				return false;
			}
			if(symb_array[i - 1] !== '+' && symb_array[i + 1] !== '+'){
				return false;
			}
		}
	}
	return true;
}

//Friday 2/17 first coderbyte challenge
function CheckNums(num1,num2) { 
    if(num2 > num1){
        return true;
    } else if (num1 > num2) {
        return false;
    } else if (num1 === num2){
        return -1;
    }
}












