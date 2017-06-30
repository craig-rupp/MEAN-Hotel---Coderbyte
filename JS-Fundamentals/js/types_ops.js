var a = 3 + 4;
console.log(a);
// + 

// function + (a, b){
// 	//return a + b;
// }

var bool = 4 < 7;
console.log(bool);

// > is an operator that is a special type of function and the parameters are the two characters where the 
//variable will hold a result

var precedence = 1 + 3 * 5;
console.log(precedence);

var ab = 2, ba = 3, ac = 4;
ab = ba = ac;
console.log(ab);
console.log(ba);
console.log(ac);

// ba = ac ()

//assignment associativity is right to left

function greeting(name){
	name = name || '<Your Name Here>';
	console.log('Hello there ' + name);
}
greeting();
