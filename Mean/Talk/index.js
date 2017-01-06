'use strict';
const filename = "index.js";
var hello = function(name){
	console.log(`Hello ${name} you're a scallywank`);
}

const intro = function(){
	console.log(`I'm a node file called ${filename}`);
}

module.exports = {
	hello : hello,
	intro : intro
};