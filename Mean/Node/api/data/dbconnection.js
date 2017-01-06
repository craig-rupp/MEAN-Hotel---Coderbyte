var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/meanHotel';

var _connection = null;

var open = function() {
	MongoClient.connect(dburl, function(error, db) {
		if(error){
			console.log("DB Connection failed");
			return;
		}
		_connection = db;
		console.log("DB Connection achieved", db);
	});
	//set the connection
};

var get = function() {	
	return _connection;
};

module.exports = {
	open : open,
	get : get
};