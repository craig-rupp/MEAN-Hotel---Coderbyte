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
			console.log('The Seahawks are the squad');
		}
	}
};
