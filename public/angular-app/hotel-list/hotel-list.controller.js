angular.module('meanhotel').controller('HotelsController', HotelsController);

function HotelsController(hotelDataFactory) {
  var vm = this;
  vm.title = 'MEAN Hotel List';
  hotelDataFactory.hotelList().then(function(response) {
    console.log(response);
    vm.hotels = response.data;
  });
}
// function HotelsController($http) {
// 	var vm = this;
// 	vm.title = 'MEAN Hotel app'; 
// 	$http.get('/api/hotels').then(function(response){
// 		vm.hotels = response.data;
// 		console.log(vm.hotels);
// 	});
// }
