class Phone {
	constructor(n) {
		this.number = n;
	}
	call(){
		console.log(this.number + ", is making a call");
	}
}
var iPhone = class extends Phone{
	email(address){
		console.log(`I'm sending an email to ${address}`);
	}
	call(){
		console.log("Facetime Call");
		super.call();
	}
};

var c = new Phone (5092807133);
console.log(c);
c.call();
var IPhone = new iPhone(5092802881);
console.log(IPhone);
IPhone.call();
IPhone.email('craigrupp@utexas.edu');

var a = {
	n : 3,
	b : 15, 
	c : 24
};
for(var key in a){
	console.log(a[key]);
}
console.log(a.n, a.b, a.c, a['n'], a['b'], a['c']);

var d = {};
for (var key in a) {
	d[key] = a[key];
}
console.log(a, d);
d.c = 8;
console.log(a, d);

//You are given a function that takes an object as an argument. Make a copy of the object and return the copy.
//FOR IN LOOP allows looping through OBJECT 
function copyTheObject(obj){
    var newObj = {};
    for(var key in obj){
        newObj[key] = obj[key];
    }
    return newObj;
}















