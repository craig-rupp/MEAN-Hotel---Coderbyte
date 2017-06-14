console.log('h3ll9 baller');

var a = 'h3llo world';

function b() {
	console.log('B fired, function ran');	
}
b();
console.log(a);

var c;
c = 'cover me you';
if(c === undefined){
	console.log('C has yet to have it\'s value set');
} else {
	console.log(c);
}

function hello(){
	console.log('friend');
}
function wave(string){
	console.log('Hello ' + string + ' my dearest ');
	hello();
}

wave('Craig');

function my_dawg(string){
	console.log(`That\'s my favorite {string} ` + string );
}
function what_name(){
	my_dawg(Shali);
}
var Shali = 'Shali';
what_name();

