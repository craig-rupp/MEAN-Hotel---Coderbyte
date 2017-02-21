
var after = "after badly";
var laura = "Laura sobs";
var ba = "Boya";

function ABCheck(str){
	var new_str = str.toLowerCase().search(/a...b/);
	if(new_str){
		console.log(new_str);
		console.log((new_str > - 1) ? true : false);
	}
}
ABCheck(after);
ABCheck(laura);
ABCheck(ba);

function WordCount(str) { 
    var count = 0;
    var new_str = str.split(" ");
    for(var i = 0; i < new_str.length; i++){
        count = new_str.length;
    }
    return count;
}
   
// keep this function call here 
WordCount(readline());