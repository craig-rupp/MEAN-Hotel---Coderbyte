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
		console.log("Returned Doc", docs);
		res
			.status(200)
			.json(docs.reviews);
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
			console.log("Returned Hotel ", hotel);
			var review = hotel.reviews.id(reviewId);
			res
				.status(200)
				.json(review);
		});
};