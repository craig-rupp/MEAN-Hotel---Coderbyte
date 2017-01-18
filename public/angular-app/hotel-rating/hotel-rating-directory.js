angular.module('meanhotel').component('hotelRating', {
  bindings: {
    stars: '='
  },
  template: '<span ng-repeat="star in vm.stars track by $index" class="glyphicon glyphicon-star">{{ star }}</span>',
  controller: 'HotelController',
  controllerAs: 'vm'
});
// angular.module('meanhotel').directive('hotelRating', hotelRating);
// //<hotel-rating in html not camel

// function hotelRating() {
// 	return {
// 		restrict : 'E', //element
// 		template : '<span ng-repeat="star in vm.stars track by $index" class="glyphicon glyphicon-star">{{ star }}</span>',
// 		bindToController : true,
// 		controller : HotelController,
// 		controllerAs : 'vm',
// 		scope : {
// 			stars : '@'
// 		}
// 	};
// }