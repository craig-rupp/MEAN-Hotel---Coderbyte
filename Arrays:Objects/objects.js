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

function maptheObjectsDeux(arryofObjs){
	var finalObj = [];
	var newObj = arryofObjs.map(function(el){
		var object = {
			name : el.name,
			length : el.name.length
		};
		//console.log(object);
		finalObj.push(object);
	});
	console.log(finalObj);
	return finalObj;
}

mapTheObjects(objNamesLength);
maptheObjectsDeux(objNamesLength);


//freeze & seal 
var sealObject = {a : 3, b : 5, c : 7};
var freezeObject = {a: 7, b: 15, c : 14};

function freezeNSeal(freezeObj, sealObj){
	Object.freeze(freezeObj);
	Object.seal(sealObj);
	console.log(freezeObj, sealObj);
	return {
		freezedObject : freezeObj,
		sealedObject : sealObj
	};
}
freezeNSeal(freezeObject, sealObject);

//modify method to return a reference to the object
var obj = {
    method:function(){
       console.log(this);
    }
};
obj.method();

var iPhone = {};
var message = {
	beep : function () {
		console.log("call me beep me if you wanna reach me");
	}
};
var iPad = {
	versions : function(){
	console.log([1, 2, 3, 4, 5])
	} 
};

iPhone.kimPossible = message.beep.bind(iPhone);
iPhone.bigBrother = iPad.versions.bind(iPhone);
console.log(iPhone);



