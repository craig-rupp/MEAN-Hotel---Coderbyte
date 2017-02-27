console.log("Two Sum Problem from Coderbyte");

function twoSumSimple(arr, Sum){
	var sums = [];
	//check each element in array
	for (var i = 0; i < arr.length; i++){
		//check following element in the array
		for (var j = i + 1; j < arr.length; j++){
			console.log(arr[i], arr[j], "Sum Check ", arr[i] + arr[j]);
			if(arr[i] + arr[j] === Sum){
				console.log(arr[i], arr[j], "adds up to ", Sum);
				sums.push("Sets", arr[i], arr[j]);
			}
		}
	}
	console.log(sums);
}

twoSumSimple([3, 5, 2, -4, 8, 11], 7);

function twoSum(array, S){
	var sums = [];
	var hashTable = {};

	for (var i = 0; i < array.length; i++){
		var minusElement = S - array[i];
		console.log(hashTable[minusElement.toString()]);
		if(hashTable[minusElement.toString()] !== undefined){
			sums.push([array[i], minusElement]);
			//console.log(sums);
		}
		//add current number to hash table
		hashTable[array[i].toString()] = array[i];
	}
	console.log(sums);
}


twoSum([3, 5, 2, -4, 8, 11], 7);






