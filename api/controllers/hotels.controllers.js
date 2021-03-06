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
			if(error){
				console.log("Error finding hotels");
				response
					.status(500)
					.json(error);
			} else {
				response	
					.status(200)
					.json(results); //return results array in response object
			}
		});

};

module.exports.hotelsGetAll = function(request, response){
	//get the database
	//var db = dbConn.get();
	//use the collection Hotels from the database
	//var collection = db.collection('Hotels');
	console.log("Requested by " + request.user); //now we can see which user requested this method, property created when user log's in in users controller

	//default pagination
	var offset = 0;
	var count = 5;
	var maxCount = 15;

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
	//catch offset || count if either is not a number
	if(isNaN(offset) || isNaN(count)){
		response
			.status(400)
			.json({
				message : "Please provide numbers either in count or offfset"
			});
		return;
	}

	if(count > maxCount){
		response
			.status(400)
			.json({
				message : "Count limit of " + maxCount + " has been exceeded"
			});
		return;
	}

	Hotel
		.find()
		.skip(offset)
	 	.limit(count)
		.exec(function(err, hotels){
			if(err){
				console.log('Error finding hotels');
				response
					.status(500)
					.json(err);
			} else {
			console.log('Found Hotels', hotels.length);
			response
				.json(hotels);
			}
		});
};

module.exports.hotelsGetOne = function(req, res) {
	var hotelId = req.params.hotelId;
	console.log("Get hotelId ", hotelId);
	//chain methods onto Model
	Hotel
		.findById(hotelId)
		.exec(function(err, doc){
			var response = {
				status : 200,
				message : doc
			};
			if(err){
				console.log("Error finding hotel");
				response.status = 500;
				response.message = err;
			}else if (!doc){
				console.log("Hotel ID not found");
				response.status = 500;
				response.message = {
					"message" : "Hotel ID not found"
				};
			}
			res
				.status(response.status)
				.json(response.message);
		});
};
var _splitArray = function(input){
	var output;
	if(input && input.length > 0){
		output = input.split(";");
	} else {
		output = [];
	}
	return output;
};

module.exports.hotelsAddOne = function (req, res) {

	Hotel
		.create({
			name : req.body.name,
			description : req.body.description,
			stars : parseInt(req.body.stars, 10),
			services : _splitArray(req.body.services),
			photos : _splitArray(req.body.photos),
			currency : req.body.currency,
			location : {
				address : req.body.address,
				coordinates : [
					parseFloat(req.body.lng), 
					parseFloat(req.body.lat)
				]
			}
		}, function(error, hotel){
			if(error){
				console.log("Error creating hotel");
				res 
					.status(400)
					.json(error);
			} else {
				console.log("Hotel created " + hotel);
				res 
					.status(201)
					.json(hotel);
			}
		});

};

module.exports.hotelsUpdateOne = function(req, res) {
	var hotelId = req.params.hotelId;
	console.log("Get hotelId ", hotelId);
	//chain methods onto Model
	Hotel
		.findById(hotelId)
		.select("-reviews -rooms")//just come back with fields we want to update
		.exec(function(err, doc){
			var response = {
				status : 200,
				message : doc
			};
			if(err){
				console.log("Error finding hotel");
				response.status = 500;
				response.message = err;
			}else if (!doc){
				console.log("Hotel ID not found");
				response.status = 500;
				response.message = {
					"message" : "Hotel ID not found"
				};
			}
			if(response.status !== 200){
				res
					.status(response.status)
					.json(response.message);
			} else {
				doc.name = req.body.name;
				doc.description = req.body.description;
				doc.stars = parseInt(req.body.stars, 10);
				doc.services = _splitArray(req.body.services);
				doc.photos = _splitArray(req.body.photos);
				doc.currency = req.body.currency;
				doc.location = {
					address : req.body.address,
					coordinates : [
						parseFloat(req.body.lng), 
						parseFloat(req.body.lat)
					]
				};

				doc.save(function(error, updatedHotel){
					if(error) {
						res 
							.status(500)
							.json(error);
					} else {
						res 
							.status(204)
							.json();
					}
				});
			}
		});
};
module.exports.hotelsDeleteOne = function (req, res) {
	var hotelId = req.params.hotelId;

	Hotel 
		.findByIdAndRemove(hotelId)
		.exec(function(err, hotel){
			if(err){
				res
					.status(404)
					.json(err);
			}
			console.log("Hotel succesfully delted : " + hotelId);
				res
					.status(204)
					.json();3
		});
};


