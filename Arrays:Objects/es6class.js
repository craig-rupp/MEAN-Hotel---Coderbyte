console.log("Hello");

class Stark {
	constructor(a) {
		console.log("Constructing", a);
		this.name = `${a} Stark - Warden of the North`;
	}
}

var Eddard = new Stark('Eddard');
console.log(Eddard);