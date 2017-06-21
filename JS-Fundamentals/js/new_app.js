// console.log('h3ll9 baller');

// var a = 'h3llo world';

// function b() {
// 	console.log('B fired, function ran');	
// }
// b();
// console.log(a);

// var c;
// c = 'cover me you';
// if(c === undefined){
// 	console.log('C has yet to have it\'s value set');
// } else {
// 	console.log(c);
// }

// function hello(){
// 	console.log('friend');
// }
// function wave(string){
// 	console.log('Hello ' + string + ' my dearest ');
// 	hello();
// }

// wave('Craig');

// function fundamental(){
// 	var myVar;
// 	console.log(myVar);
// }
// function test(){
// 	var myVar = 3;
// 	console.log(myVar);
// 	fundamental();
// }
// var myVar = 35;
// console.log(myVar);
// test();
// console.log(myVar);

// //scope for variable globalvar
// function second_invoke(){
// 	console.log(globalvar);
// }
// function first_invoke(){
// 	var globalvar = 3 + " first_invoke function call";
// 	second_invoke();
// }
// var globalvar = 24 + " for my man Kobe Bryant";
// first_invoke();
// //execution stack (global context globalvar = 24 + " for my man KB", first_invoke (variable changes), scope for second_invoke looks at global level for variable reference)


// function second_invoke_scope(){

// 	function scope_look(){
// 		console.log(thisVar);
// 	}
// 	var thisVar = "Craig you scallwag";
// 	scope_look();
// }
// var thisVar = "Craig you dog";
// second_invoke_scope();


//Asynch Scenario Code Ex
function waitThreeSeconds() {
	var ms = 3000 + new Date().getTime();
	while(new Date() < ms){}
	console.log('finished function three Seconds functions');
}

function clickHandler() {
	console.log('click event');
}

//listen for event click will be last function to be looked at
document.addEventListener('click', clickHandler());

waitThreeSeconds();
console.log('finished execution'); 







