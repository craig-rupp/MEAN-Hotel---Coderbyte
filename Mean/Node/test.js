'use strict';
//require takes in a string as arg
require('./instantHello');
//require looks for index(file) either in current folder or folder in this case called 'Talk'
var talk = require('../Talk');
const goodbye = require('../Talk/goodbye');
var question = require('../Talk/question');

talk.hello('Esteban');
talk.intro();
var meaningOfLife = question.ask("What is the meaning of life?");
console.log(meaningOfLife);
//function call defined by module.exports function in goodbye.js
goodbye();

