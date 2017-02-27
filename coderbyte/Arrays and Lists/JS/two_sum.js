console.log("Two Sum Problem from Coderbyte");

function twoSum(arr, Sum){
	var sums = [];
	//check each element in array
	for (var i = 0; i < arr.length; i++){
		//check following element in the array
		for (var j = i + 1; j < arr.length; j++){
			console.log(arr[i], arr[j], "Sum Check ", arr[i] + arr[j]);
			if(arr[i] + arr[j] === Sum){
				console.log(arr[i], arr[j]);
				sums.push("Sets", arr[i], arr[j]);
			}
		}
	}
	console.log(sums);
}

twoSum([3, 5, 2, -4, 8, 11], 7);