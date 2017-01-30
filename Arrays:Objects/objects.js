console.log("Waddup!");

var testObj = {
	addTwo : function (a, b) {
		return a + b;
	}, 
	name : 'Craig'
};

var testaddTwo = testObj.addTwo(1,2);
console.log(testaddTwo);
console.log(testObj);


function deleteTheProps(obj, deleteThisProp, eraseThisProp) {
    // your code goes here
    delete obj[deleteThisProp];
    obj[eraseThisProp] = undefined;
    return obj;
}

for(var key in testObj){
	console.log(key + ": " + testObj[key]);
}

var sumObj = {
	first : 1, 
	second : 3,
	third : 4
};

function addDigits(obj){
	var sum = 0;
	for (var digit in obj) {
		sum += parseFloat(obj[digit]);
	}
	console.log(sum);
	return sum;
}
addDigits(sumObj);

var objNamesLength = [{name : 'Jon'}, {name : 'Arya'}, {name : 'Sansa'}, {name : 'Catelyn'}];
console.log(objNamesLength);

function mapTheObjects(arrayOfObjects) {
    //your code goes here
    let nameLength = arrayOfObjects.map(n =>{
        let obj = {
            name : n.name,
            length: n.name.length
        };
        return obj;
    });
    console.log(nameLength);
    return nameLength;
}

mapTheObjects(objNamesLength);

