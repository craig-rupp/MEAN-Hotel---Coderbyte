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