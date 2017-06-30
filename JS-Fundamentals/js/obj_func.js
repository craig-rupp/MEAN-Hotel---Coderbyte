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
			return ('The Seahawks were the squad');
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

//container object to keep greetings objects separate within language greetings

