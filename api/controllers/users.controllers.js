var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

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
				var token = jwt.sign({username : user.username}, 's3cr3t', {expiresIn : 3600}); //assign json web token, header, payload, verify signature
				res.status(200).json({success: true, webToken : token});
			} else {
				res.status(401).json('Unauthorized');
			}
		}
	});	
};

module.exports.authenticate = function (req, res, next) {
	var authHeader = req.headers.authorization; //json web tokens must be sent n the auth header
	if(authHeader){
		//res.status(200).json(authHeader);
		var token = authHeader.split(' ')[1];
		console.log(token);
		jwt.verify(token, 's3cr3t', function(err, decoded){
			if(err){
				console.log(err);
				res.status(401).json('Unauthorized');
			} else {
				req.user = decoded.username; //as part of login function, added username to payload and am accessing that here
				next();//if authenticated called whichever function is next (for testing purposes, get all hotels was called)
			}
		});
	}
	else{
		res.status(403).json('No Token Provided');
	}
};




