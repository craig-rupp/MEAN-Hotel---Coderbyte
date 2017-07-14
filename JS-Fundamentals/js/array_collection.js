console.log('Array info');

var asssorted_array = [
	1,
	false,
	{
		name : 'Kenny Powers',
		address : '323 Left Avenue'
	},
	function(name){
		var greeting = 'hello';
		console.log(greeting + ' ' + name);
	},
	'string'
];
console.log(asssorted_array);
asssorted_array[3](asssorted_array[2].name);

function greet(first_name, last_name, language, ...other){
	language = language || 'Deutch';
	if(arguments.length < 1 || arguments.length === 0){
		console.log('No arguments provided for this function');
		console.log('--------');
		return;
	}
	console.log(first_name);
	console.log(last_name);
	console.log(language);
	console.log(arguments);
	console.log('----------');
}
greet();
greet('Craig');
greet('Craig', 'Rupp');
greet('Craig', 'Rupp', 'Ingles');
greet('Craig', 'Rupp', 'Ingles', 'Lacazette', 'Goretzka', 'Lemar');

//don't have to pass all parameters, with ES6 can set defaul parameters ex (language = 'Deutch')
//or in this case just defining the variable

//function overloading
function basketballSpot(position, name, shoes){
	if(shoes == 'Nike' || shoes == 'UA'){
		console.log(name + ', plays the ' + position + ' spot and rocks ' + shoes + ' boots.');
	}
	if(shoes == 'Adidas' || shoes == 'Puma'){
		console.log(name + ', plays the ' + position + ' spot and rocks ' + shoes + ' boots.');
	}
}

function nikeSquad(position, name){
	basketballSpot(position, name, 'Nike');
}

function pumaSquad(position, name){
	basketballSpot(position, name, 'Adidas');
}

nikeSquad('Winger', 'Alexis Sanchez');
pumaSquad('10/Creator', 'Mesut Ozil'); 

//IIFE (immediately invoked function expression)
var pirate_ship = function(ship_name){
	return 'Be careful the ' + ship_name + ' is approaching';
}('Black Pearl');
console.log(pirate_ship);

var pg_13 = 'Paul George';

(function(global, player){
	console.log(pg_13 + ' just released his first signature sneaker');
	global.pg_13 = 'Soon to be a Laker';
}(window, pg_13));
console.log(pg_13); 

function new_greet(whattosay){
	return function(name){
		console.log(whattosay + ' ' + name);
	};
}

new_greet('Hola')('Joaquin');

var say_hello = new_greet('Bonjour');
say_hello('Olivier');

//closure example
function buildFunctions(){
	var arr = [];
	for(var i = 0; i < 3; i++){
		arr.push(
			function(){
				console.log(i);
			}
			//function only created here, invoked down below by referencing array indexes, will only reference last know 
			//memory variable which is 3, so each invoking only would be a 3
		);
	}
	return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();
//can only tell you right now what i is which would be 3, just pointing to spot in memory

// with ES6
function buildFunctionsES6(){
	var es_ar = [];
	for(var j = 0; j < 3; j++){
		let m = j;
		es_ar.push(
			function(){
				console.log(m);
			}
		);
	}
	return es_ar;
}
var new_fs = buildFunctionsES6();
new_fs[0]();
new_fs[1]();
new_fs[2]();

//with IIFE

function buildFunctionsIIFE2(){
	var iife_arr = [];
	for(var a = 0; a < 5; a++){
		iife_arr.push(
			(function(b){
				return function(){
					console.log(b);
				};
			}(a))
		);
	}
	return iife_arr;
}
var iife_invoked_closure = buildFunctionsIIFE2();
iife_invoked_closure[0]();
iife_invoked_closure[1]();
iife_invoked_closure[2]();
iife_invoked_closure[3]();
iife_invoked_closure[4]();

function chooseStart(team){
	return function(first, last){
		if(team == 'Lakers'){
			console.log(first + ' ' + last + ', plays for the ' + team);
		}
		if(team == 'Cavs'){
			console.log(first + ' ' + last + ', plays for the ' + team);
		}
	};
}

var Kobe_Bean = chooseStart('Lakers'); //Kobe_Bean will now hold the team 'Lakers' in a closure after execution context has run on first chooseStart call
var King_James = chooseStart('Cavs'); //King_Jame will now hold the team 'Cavs' in a closure 

Kobe_Bean('Kobe', 'Bryant');
King_James('LeBron', 'James');


var first_array = [27, 28, 31, 97, 64, 79];
var second_array = [45, 88, 97, 27, 31, 45, 24];

var matching_numbers = [];
var first_array_diff = [];
var second_array_diff = [];
//see if values match in array
first_array.forEach(function(element, index){
	console.log(element + ', ' + index);
	if(second_array.indexOf(first_array[index]) > -1 ){
		matching_numbers.push(first_array[index]);
		console.log(first_array[index] + ' found in second array');
		console.log(matching_numbers);
	} else {
		console.log('No matching index found in Second Array for : ' + first_array[index]);
		first_array_diff.push(first_array[index]);
		//console.log(first_array[index]);
		console.log(first_array_diff);
	}
	//if(second_array.indexOf())
});
console.log('Checking Second Array With Loop');
for(var a = 0; a < second_array.length; a++){
	if(first_array.indexOf(second_array[a]) > -1 ){
		continue;
	} else {
		console.log('No matching index found in First Array for : ' + second_array[a]);
		second_array_diff.push(second_array[a]);
		console.log(second_array_diff);
	}
}

function waitForIt(){
	var pause = 'Wait for It';
	console.log(pause);
	var there = 'there it is';
	setTimeout(function(){
		alert(there);
	}, 2500);
}
//waitForIt();

//call, apply, bind

var arsenal_Front3 = {
	left_wing : 'Alexis Sanchez',
	right_wing : 'Mesut Ozil',
	striker : 'Alexandre Lacazette',
	combined_3 : function(){
	var attack_force = 'Arsenal\'s front three consists of ' + this.left_wing + ' & ' + this.right_wing + ' on the flanks and ' + this.striker + ' leading the line. ';
	return attack_force;
	}
};

var logArsenal = function(legend){
	console.log(this.combined_3() + (legend ? legend : 'No legend provided'));
	console.log('Invoking function differently');
};

var logArsenalBind = logArsenal.bind(arsenal_Front3);
logArsenalBind();

logArsenal.call(arsenal_Front3, 'Thierry Henry');






