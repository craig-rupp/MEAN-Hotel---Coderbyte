'use strict';
//const will not work duh
let answer = `Now that's a good question!`;

module.exports.ask = function(question){
	console.log(question);
	return answer;
}