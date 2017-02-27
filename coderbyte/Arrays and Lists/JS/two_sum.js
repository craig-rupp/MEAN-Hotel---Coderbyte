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

// function twoSum(arr, S) {

//   var sums = [];
//   var hashTable = {};

//   // check each element in array
//   for (var i = 0; i < arr.length; i++) {
 
//     // calculate S - current element
//     var sumMinusElement = S - arr[i];

//     // check if this number exists in hash table
//     // if so then we found a pair of numbers that sum to S
//     if (hashTable[sumMinusElement.toString()] !== undefined) { 
//       sums.push([arr[i], sumMinusElement]);
//     }

//     // add the current number to the hash table
//     hashTable[arr[i].toString()] = arr[i];

//   }

//   // return all pairs of integers that sum to S
//   console.log(sums);

// }


function twoSum(array, S){
	var sums = [];
	var hashTable = {};

	for (var i = 0; i < array.length; i++){
		var minusElement = S - array[i];
		// if(array.indexOf(minusElement, array[0])){
		// 	sums.push(minusElement, array[i]);
		// 	console.log(sums);
		// }
		if(hashTable[minusElement.toString()] !== undefined){
			sums.push([array[i], minusElement]);
		}
		hashTable[array[i].toString()] = array[i];
	}
	console.log(sums);
}


twoSum([3, 5, 2, -4, 8, 11], 7);






