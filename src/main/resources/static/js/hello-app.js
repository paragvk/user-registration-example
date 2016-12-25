angular
		.module('myApp', [ 'ui.router' ])
		.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

			$urlRouterProvider.otherwise("/home/welcome");
			
			$stateProvider
		    .state('login', {
		      url: "/login",
		      templateUrl: "html/login.html"
		    })
		    .state('home', {
		      url: "/home",
		      templateUrl: "html/home.html"
		    })
		    .state('home.welcome', {
		      url: "/welcome",
		      templateUrl: "html/modules/welcome.html"
		    })
		    .state('home.search', {
		      url: "/search",
		      templateUrl: "html/modules/search.html"
		    })
		    .state('home.mgmt', {
		      url: "/mgmt",
		      templateUrl: "html/modules/mgmt.html"
		    });

			$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		})
		.controller(
				'MainController',
				function($scope, $http, $state, $rootScope) {
					$scope.logout = function() {
						$http.post('logout', {}).finally(function() {
							// Clear current user data
						    	$rootScope.authenticated = false;
							$rootScope.currentuser = {};
							$state.go("login");
						});
					};
					$scope.login = function() {
						authenticate($scope.credentials, function() {
					        if ($rootScope.authenticated) {
					        	$state.go("home.welcome");
					        	$scope.autherror = false;
					        } else {
					        	$state.go("login");
					        	$scope.autherror = true;
					        }
					        // Clear user/password from scope
					        $scope.credentials = {};
					      });
					};
					
					var authenticate = function(credentials, callback) {
					    var headers = credentials ? {authorization : "Basic "
					        + btoa(credentials.username + ":" + credentials.password)
					    } : {};
					    $http.get('user', {headers : headers}).then(function(response) {
					      if (response.data.username) {
					        $rootScope.authenticated = true;
					        $rootScope.currentuser.name = response.data.username;
					        $rootScope.currentuser.admin = (response.data.userrole == 'admin');
					      } else {
					        $rootScope.authenticated = false;
					      }
					      callback && callback();
					    }, function() {
					      $rootScope.authenticated = false;
					      callback && callback();
					    });
					  }
					
					// initialize
					$rootScope.currentuser = {};
					authenticate();
					$scope.credentials = {};
					
				});