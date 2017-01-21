angular.module('meanhotel').controller('LoginController', LoginController);

function LoginController($http, $location, $window, AuthFactory, jwtHelper){
	var vm = this;

	vm.isLoggedIn = function(){
		if(AuthFactory.isLoggedIn){
			return true;
		} else {
			return false;
		}
	};

	vm.login = function() {
	    if (vm.username && vm.password) {
	      var user = {
	        username: vm.username,
	        password: vm.password
	      };

	      $http.post('/api/users/login', user).then(function(response) {
	      	console.log(response);
	        if (response.data.success) {
	          $window.sessionStorage.token = response.data.webToken;
	          AuthFactory.isLoggedIn = true;
	          var token = $window.sessionStorage.token;
	          var decodedToken = jwtHelper.decodeToken(token);
	          console.log(decodedToken);
	          vm.loggedInUser = decodedToken.username;
	        }
	      }).catch(function(error) {
	        console.log(error);
	      });

	    }
  };

	vm.logout = function() {
		AuthFactory.isLoggedIn = false;
		delete $window.sessionStorage.token;
		$location.path('/');
	};

	vm.isActiveTab = function(url) {
		var path = $location.path().split('/')[1];
		//console.log(path);
		//var currentPath = $location.path().split('/')[1];
		//console.log(currentPath);
		return (url === path ? 'active' : '');
	};
}