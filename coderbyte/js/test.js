//console.log('hello');
console.log('Longest String in Function');

var string = "Hello there Gooner";
var anotherString = "What the hellers";
var largest = 0;
var longString = "";
function longestString(str){
	var arrayOfStrings = str.split(" ");
	arrayOfStrings.forEach(function(el){
		if(el.length > largest){
			largest = el.length;
			longString = el;
		}
	});
	console.log(longString);
}
function forLongest(str){
	var forStrings = str.split(" ");
	for(var i = 0; i < forStrings.length; i++){
		if(forStrings[i].length > largest){
			largest = forStrings[i].length;
			longString = forStrings[i];
		}
	}
	console.log(longString);
}

//First Reverse CoderByte Challenge an string entered will reverse string
function FirstReverse(str) {
    
    var newstr = '';
    for(var i = str.length - 1; i >= 0; i--){
        newstr += str[i];
    }
  // code goes here  
  console.log(newstr); 
         
}
   
 
FirstReverse(anotherString);

//First Factorial CoderByte Challenge any number entered will return facotrial 4  = 24
function FirstFactorial(num) { 
    if(num === 0) {
        return 1;
    } else {
        return num * FirstFactorial(num - 1);
    }
  // code goes here  
  //return num; 

}
   
// keep this function call here 
//FirstFactorial(readline());