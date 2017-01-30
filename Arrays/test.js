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
var filterRandom = randomLetters.split("");
console.log(filterRandom);
var filterRandomArray = filterRandom.filter(e => e === "a" || e === "e" || e === "i" || e === "o");
console.log(filterRandomArray);

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

let clubs = ['Arsenal', 'Chelsea', 'Crystal Palace', 'Tottenham', 'West Ham'];

let test = 0;
while(test < clubs.length){
	console.log(clubs[test]);
	test++;
}

let digits = [1, 5, 9, 11, 8, 15, 17];
let digitsTen = digits.filter(d => d % 3 === 0);
console.log(digitsTen);

let digitsMap = digits.map(d => d * d);
console.log("Should see : 1, 25, 81, 121, 64, 225, 289");
console.log(digitsMap);

console.log(digits);
var digitsSum = digits.reduce((a, b, c) => {
	console.log(a + " wow " + b);
	return a + b;
}, digits[0]);

var digitObject = digits.reduce((a, b, c) => {
	console.log(a, b);
	a[b] = b;
	return a;
}, {});

// [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
//   return accumulator + currentValue;
// });

var names = ['James', 'Jack', 'John', 'Craig', 'Collen'];

function filterNames(array){
	var jArray = array.filter(e => e[0] === "J");
	console.log(jArray);
}
filterNames(names);

let newNumbers = [1, 2, 3, 4, 5];
let newNumbersMap = 
	newNumbers
		.map(n => n * n)
		.filter(n => n % 2 === 0)
		.reduce((a, b ) => {
			return a + b;
		});
 console.log(newNumbersMap);

 newNumbers.reduce((a, b, c) => {
 	console.log(a, b, c);
 	return a + b;
 }, newNumbers[0]);

 var sum = newNumbers.reduce((a, b) => a + b, 0);
 console.log(sum);



