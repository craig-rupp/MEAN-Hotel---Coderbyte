// var dbConn = require('../data/dbconnection.js');
// var objectId = require('mongodb').ObjectId;
// var hotelData = require('../data/hotel-data.json');
var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');

var runGeoQuery = function(request, response){

	var lng = parseFloat(request.query.lng);
	var lat = parseFloat(request.query.lat);

	//geoJSON point
	var point = {
		type : "Point",
		coordinates : [lng, lat]
	};
	var geoOptions = {
		spherical : true,
		maxDistance : 2000, //defaults to meters
		numb : 5 //locations/hotels coming back
	};

	Hotel
		.geoNear(point, geoOptions, function(error, results, stats){
			console.log("Geo results: " + results);
			console.log("Geo stats: " + stats);
			response	
				.status(200)
				.json(results); //return results array in response object
		});

};

module.exports.hotelsGetAll = function(request, response){
	//get the database
	//var db = dbConn.get();
	//use the collection Hotels from the database
	//var collection = db.collection('Hotels');

	//default pagination
	var offset = 0;
	var count = 5;

	//geoquery request check
	if(request.query && request.query.lat && request.query.lng){
		runGeoQuery(request, response);
		return;
	}

	//see if request object has a query string and offset 
	if(request.query && request.query.offset){
		offset = parseInt(request.query.offset, 10);
	}
	//same as above however just checking count
	if(request.query && request.query.count){
		count = parseInt(request.query.count, 10);
	}

	Hotel
		.find()
		.skip(offset)
	 	.limit(count)
		.exec(function(err, hotels){
			console.log('Found Hotels', hotels.length);
			response
				.json(hotels);
		});
};

module.exports.hotelsGetOne  = function(request, response){
	var hotelId = request.params.hotelId;
	//var thisHotel = hotelData[hotelId]; used for the hard coded json data worked on earlier
	Hotel
		.findById(hotelId)
		.exec(function(error, docs){
		console.log("GET hotelId", hotelId);
		response
			.status(200)
			.json(docs);
		});
};

module.exports.hotelsAddOne = function(req, res){
	var db = dbConn.get();
	//use the collection Hotels from the database
	var collection = db.collection('Hotels');
	var newHotel;
	console.log("POST new hotel");
	//body parser middleware outputs the data from the post it form

	if(req.body && req.body.name && req.body.stars){
		newHotel = req.body;
		newHotel.stars = parseInt(req.body.stars, 10);
		collection.insertOne(newHotel, function(error, response){
			console.log(response);
			console.log(response.ops);
			res	
				.status(201)
				.json(response.ops); 
		});
	} else {
		console.log("Data missing from body");
		res	
			.status(400)
			.json({message : "Required data missing from body" });
	}
};


