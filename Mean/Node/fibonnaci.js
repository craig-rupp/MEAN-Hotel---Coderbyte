var recursive = function(n){
	if(n <= 2){
		return 1;
	} else {
		return recursive(n - 1) + recursive(n - 2);
	}
};
console.log(recursive(40));

// var fibonacci = function(n){
// 	var a = 0, b = 1, f = 1
// 	for(var i = 2; i<= n; i++){
// 		f = a + b;
// 		a = b
// 		b = f;
// 	}
// 	return f;
// }