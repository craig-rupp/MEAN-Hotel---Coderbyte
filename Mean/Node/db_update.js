//set id for reviews, only the first review will be set however
db.Hotels.update(
	{},
	{
		$set : {
			"reviews.0._id" : ObjectId()
		}
	},
	{
		multi : true
	}
);
//set id for one Hotel with multiple reviews	
db.Hotels.update(
	{
		"name" : "Grand Hotel Palatino" 
	},
	{
		$set : {
			"reviews.1._id" : ObjectId()
		}
	}
);