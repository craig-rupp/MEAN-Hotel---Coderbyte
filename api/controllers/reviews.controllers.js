var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');

//Get All Reviews for a hotel
module.exports.reviewsGetAll = function(req, res) {
var hotelId = req.params.hotelId;
	//var thisHotel = hotelData[hotelId]; used for the hard coded json data worked on earlier
	Hotel
		.findById(hotelId)
		.select('reviews')
		.exec(function(error, docs){
		var response = {
			status : 200,
			message : []
		};
		if(error){
			response.status = 500;
			response.message = err;
		}else if (!docs){
			console.log("Hotel id not found in database " + hotelId);
			response.status = 404;
			response.message = {
				message : "Hotel id not found " + hotelId
			};
		}else {
			response.message = docs.reviews ? docs.reviews : [];
		}
		//console.log("Returned Doc", docs);
		res
			.status(response.status)
			.json(response.message);
		});
};
//Get single Review for a hotel
module.exports.reviewsGetOne = function(req, res) {
	var hotelId = req.params.hotelId;
	var reviewId = req.params.reviewId;

	console.log("The hotel Id is " + hotelId + " and the review id is " + reviewId);

	Hotel
		.findById(hotelId)
		.select('reviews')
		.exec(function(error, hotel) {
			var response = {
				status : 200,
				message : {}
			};
			if(error){
				console.log("Error finding hotel");
				response.status = 500;
				response.message = err;
			}else if (!hotel) {
				console.log("Hotel id not found in database " + hotelId);
				response.status = 404;
				response.message = {
					"message" : "Hotel id not found " + hotelId
				};
			}else  {
				//get the review
				response.message = hotel.reviews.id(reviewId);
				//if review doesn't exist mongoose returns null
				if(!response.message) {
					response.status = 404;
					response.message = {
						"message" : "Review id not found " + reviewId
					};
				}
			}
			console.log("Returned Hotel ", hotel);
			//var review = hotel.reviews.id(reviewId);
			res
				.status(response.status)
				.json(response.message);
		});
};

var _addReview = function(req, res, hotel){

	//push hotel from below functions if doc exists
	hotel.reviews.push({
		name : req.body.name,
		rating : parseInt(req.body.rating, 10),
		review : req.body.review
	});
	//save instance 
	hotel.save(function(err, updatedHotel){
		if(err) {
			res 
				.status(501)
				.json(err);
		} else {
			res 
				.status(201)
				.json(updatedHotel.reviews[updatedHotel.reviews.length - 1]); //return last review in the array
		}
	});
};

module.exports.reviewsAddOne = function(req, res) {

	var hotelId = req.params.hotelId;
	//var thisHotel = hotelData[hotelId]; used for the hard coded json data worked on earlier
	Hotel
		.findById(hotelId)
		.select('reviews')
		.exec(function(error, docs){
		var response = {
			status : 200,
			message : []
		};
		if(error){
			response.status = 500;
			response.message = err;
		}else if (!docs){
			console.log("Hotel id not found in database " + hotelId);
			response.status = 404;
			response.message = {
				message : "Hotel id not found " + hotelId
			};
		}
		if(docs){
			_addReview(req,res, docs);
		} else {
			res
				.status(response.status)
				.json(response.message);
			}
		});
};

module.exports.reviewsUpdateOne = function (req, res) {
	var hotelId = req.params.hotelId;
	var reviewId = req.params.reviewId;
	console.log("Put review ID " + reviewId + ' for hotel ' + hotelId);

	Hotel 
		.findById(hotelId)
		.select('reviews')
		.exec(function(err, hotel){
			var updateReview;
			var response = {
				status : 200,
				message : {}
			};
			if(err){
				console.log("Error finding hotel");
				response.status = 500;
				response.message = err; //message would be error object
			} else if (!hotel) {
				console.log("Hotel id not found in database");
				response.status = 404;
				response.message = {
					"message" : "hotel ID not found " + hotelId
				};
			} else {
				//get the review
				updateReview = hotel.reviews.id(reviewId);
				//check to see if review even exists
				if(!updateReview) {
					response.status = 404;
					response.message = {
						"message" : "Review ID not found " + reviewId
					};
				}
			}
			if(response.status !== 200) {
				res 
					.status(response.status)
					.json(response.message);
			} else {
				updateReview.name = req.body.name;
				updateReview.stars = parseInt(req.body.stars);
				updateReview.review = req.body.review;
				hotel.save(function(err, hotelUpdated){
					if(err){
						res 
							.status(500)
							.json(err);
					} else {
						res 
							.status(204)
							.json();
					}
				});
			}
		});
};

module.exports.reviewsDeleteOne = function (req, res) {

	var hotelId = req.params.hotelId;
	var reviewId = req.params.reviewId;
	//chain on model
	Hotel
		.findById(hotelId)
		.select('reviews') //select property of object we wants 
		.exec(function(err, disHotel){
			var updateReviewId;
			var response = {
				status : 200,
				message : {}
			};	
			if(err) {
				response.status = 500;
				response.message = err; //err is the object 
			} else if (!disHotel) {
				response.status = 404;
				response.message = {
					"message" : "Hotel not found with id : " + hotelId
				};
			} else {
				//get review (need more than the ID duh)
				updateReviewId = disHotel.reviews.id(reviewId);
				if(!updateReviewId){
					response.status = 400;
					response.message = {
						"message" : "Review ID: " + reviewId + " does not exist" 
					};
				}
			}
			if(response.status !== 200) {
				res
					.status(response.status)
					.json(response.message);
			}
				disHotel.reviews.id(reviewId).remove();
				disHotel.save(function(err, hotelUpdated){
					if(err){
						res 
							.status(500)
							.json(err);
					} else {
						res 
							.status(204)
							.json();
					}
				});
		});

};
















