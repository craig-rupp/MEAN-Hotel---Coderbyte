var person = new Object();

person["firstname"] = "Tony";
person['lastname'] = 'Montana';
var first_name = "firstname";

console.log(person[first_name]);

console.log(person);

person.address = {
	city : 'Seattle',
	state : 'Washington',
	zip_code: 99223,
	sports_teams: {
		Basketball : 'Gonzaga Bulldogs',
		Soccer : 'Seattle Sounders',
		football : function(){
			return 'The Seahawks were the squad';
		}
	}
};

function nWKid(object){
	console.log('The ' + object.address.sports_teams['Soccer'] + ' are the recent MLS Champs');
}

function nwHawks(object){
	console.log('In 2014, ' + object.address.sports_teams.football() + ' to be reckoned with');
}

nWKid(person);
nwHawks(person);

var greet = 'Hello';
var greet = 'Hola';

var english = {};
var spanish = {};

english.greet = 'Hello!';
spanish.greet = 'Hola!';
console.log(english);
console.log(spanish);

//Namespace container with multiple objects

//few deeper levels

var english_greetings = {
	greetings : {
		basic : 'hello',
		casual : 'sup',
		formal : 'Nice to meet you'
	}
};
var spanish_greetings = {
	greetings : {
		basic : 'hola',
		casual : 'Que pasa',
		formal : 'Mucho gusto'
	}
};

function language_greetings(object1, object2){
	console.log("It\'s much more fun to say " + object2.greetings.casual + ', then, ' + object1.greetings.casual);
}
language_greetings(english_greetings, spanish_greetings);

//container object to keep greetings objects separate within language greetings (faking namespaces)

var objectLiteral = {
	name : 'Craig Rupp',
	isAGonner: true
};
console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "name" : "Mesut Ozil", "position" : "Creator - No.10"}');

console.log(jsonValue);

function log(variable){
	console.log(variable);
}

log({
	skill : "Drink and know things"
});
log(function(){
	console.log("Logging a function the dynamic variable");
});

function pass(a){
	a();
}

pass(function(){
	console.log("Logging a function within a function");
});

//by value (primitives)
var a = 3;
var b;

b = a;

a = 2;
console.log(a + ",", b);

// by reference (all objects(including functions)) - when pointing by reference all variables
//pointing to type (like object below) will have all propertires updates if any property is mutated
var cr = {
	club : 'Arsenal'
};

var dr;
dr = cr;

cr.club = 'Sounders too'; //mutate
console.log(dr.club);

console.log(cr.club);

//by ref, as parameters
function changeAllegiance(obj){
	obj.club = "Schalke";
}
console.log(dr); //before function call
changeAllegiance(dr);
console.log(dr);
console.log(cr);

//equal operator sets up new memory space
cr = {club : 'Always Arsenal'};
console.log(cr);
console.log(dr);


//this 
console.log(this);

function a_this(){
	console.log(this);
	this.newVariabile = 'hello';
}
a_this();
console.log(newVariabile);

var object_literal = {
	name : 'The c object',
	log : function(){
		console.log(this.name + ', Original name property on object');
		var self_level = this;
		self_level.name = 'Craig\'s  object';
		var set_name = function(new_name){
			self_level.name = new_name;
			//this would point to global object, this is weird (unless declaring this with a variable like self_level)
		};
		set_name('Update Name property on Object Literal');
		console.log(this);
	}
	//this becomes the object that contains you
};
object_literal.log();









