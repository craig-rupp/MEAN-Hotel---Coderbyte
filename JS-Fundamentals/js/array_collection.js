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