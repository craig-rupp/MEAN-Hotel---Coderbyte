//console.log("hello");

let numbers = [1, 2, 3, 4, 5, 7, 9];
console.log(numbers);
console.log("Time to remove the snake Fabregas");

function removeFab(array){
	for(i = array.length; i > 0; i--){
		var element = array[i - 1];
		console.log(element + " at the " + (i - 1) + " index");
		if(element === 4){
			console.log("Is this Fab? " + element );
			array.splice(i - 1, 1);
		} else if(element === 7) {
			console.log("Alexis Sanchez baby " + "Arsenal's might number " + element);
		}
	}
console.log(numbers);
}

removeFab(numbers);

var randomLetters = "abcdefghijklmnop";
// console.log(randomLetters);
// var lettersArray = randomLetters.split("");
// console.log(lettersArray);

function removeVowels(string){
	var lowerCase = string.toLowerCase();
	var array = lowerCase.split("");
	var noVowelArray = [];
	var justVowelArray = [];
	console.log(array);
	array.forEach(function(element, index){
		if(element !== "a" && element !== "e" && element !== "i" && element !== "o" && element !== "u"){
			noVowelArray.push(element);
			
		} else {
			justVowelArray.push(element);
			
		}
	});
	console.log(noVowelArray);
	console.log(justVowelArray);
	// return {
	// 	justVowels : justVowelArray,
	// 	noVowels : noVowelArray
	// };
}


removeVowels(randomLetters);
//console.log(justVowelArray);
//console.log(noVowels);



