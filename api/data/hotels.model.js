var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	}, 
	rating : {
		type : Number,
		min : 0,
		max : 5,
		required : true
	},
	review : {
		type : String,
		required : true
	},
	createdOn : {
		type : Date,
		"default" : Date.now
	}
});

var roomsSchema = new mongoose.Schema({
	type : String,
	number : Number,
	description : String,
	photos : [String],
	price : Number
});

var hotelSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	stars : {
		type : Number,
		min : 0,
		max : 5,
		default : 0 //js reserved word 
	},
	services : [String],
	description : String,
	photos : [String],
	currency : String,
	reviews : [reviewSchema],
	rooms : [roomsSchema],
	location : {
		address : String,
		//Always store coordinates in longitude (E/W) of Greenwich, latitude (N/S) of equator
		coordinates : {
			type : [Number],
			//mongo db indexes coordinates path, map as sphere
			index : '2dsphere'
		}
	}
});

mongoose.model('Hotel', hotelSchema, 'Hotels');