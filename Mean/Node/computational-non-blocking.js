var child_process = require('child_process');
console.log(1);

//The child_process.spawn() method spawns the child process asynchronously, without blocking the Node.js event loop. 
//not blocking the rest of the process 
var newProcess = child_process.spawn('node', ['fibonnaci.js'], {
	stdio : 'inherit'
});

console.log(3);