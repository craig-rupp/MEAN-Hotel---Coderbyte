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