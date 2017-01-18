var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt-nodejs');

module.exports.register = function (req, res) {
	console.log('registering user');

	var username = req.body.username;
	var name = req.body.name || null; //because model didn't require this
	var password = req.body.password;

	User.create({
		username : username,
		name : name,
		password : bcrypt.hashSync(password, bcrypt.genSaltSync(10)) //using bcrypt which was npm installed and required in
	},function(err, user_data){
		if(err){
			console.log(err);
			res.status(400).json(err);
		} else {
			console.log('User created', user_data);
			res.status(201).json(user_data);
		}
	});
};

module.exports.login = function(req, res) {
	console.log("loggin in user");
	var username = req.body.username;
	var password = req.body.password;

	User.findOne({
		username : username
	}).exec(function(err, user){
		if(err){
			console.log(err);
			res.status(400).json(err);
		} else {
			if(bcrypt.compareSync(password, user.password)){
				//check password in request body against user's password found in findOne method
				console.log("User password coorect", user);
				res.status(200).json(user);
			} else {
				res.status(401).json('Unauthorized');
			}
		}
	});	
};