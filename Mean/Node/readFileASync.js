//bring in file system module
var fs = require('fs');
var onFileLoad = function(){
	console.log('Got the file');
}
console.log(`Going to get the file`);
fs.readFile('readFileSync.js', onFileLoad);
// fs.readFile('readFileSync.js', function(){
// 	console.log('Got the file');	
// });
console.log('App continues');
