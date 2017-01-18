angular.module('meanhotel').controller('HotelController', HotelController);

function HotelController($routeParams, hotelDataFactory){
	var vm = this;
	var id = $routeParams.id;
	hotelDataFactory.hotelDisplay(id).then(function(response){
		vm.hotel = response.data;
		vm.stars = _getStarRating(response.data.stars);
		console.log(vm.hotel);
	});
}

function _getStarRating(stars) {
	return new Array(stars);
}

// function HotelController($http, $routeParams) {
// 	var vm = this;
// 	var id = $routeParams.id;
// 	$http.get('/api/hotels/' + id).then(function(response){
// 		vm.hotel = response.data;
// 	});
// }