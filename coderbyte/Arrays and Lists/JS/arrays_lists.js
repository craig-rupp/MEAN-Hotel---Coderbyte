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

// input set = [1, 2, 3]
// power set = [[], [1], [2], [3], [1, 2], [2, 3], [1, 3] [1, 2, 3]]

// The power set contains every possible combination of numbers. It also includes the empty set which contains no numbers from the original set.
function powerSet(arr){
	var powers = [];
	var total = Math.pow(2, arr.length);
	for(var i = 0; i < total; i++){
		var tempSet = [];
		var number = i.toString(2);
		//console.log(number);
		while(number.length < arr.length){
			number = "0" + number;
		}
		console.log(number);
		for(var b = 0; b < number.length; b++){
			if(number[b] === "1"){
				//console.log(arr[b]);
				tempSet.push(arr[b]);
			}
		}
		powers.push(tempSet);
	}
	console.log(powers);
}
powerSet([1,2,3]);




