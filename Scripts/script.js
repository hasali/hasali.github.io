

function closeBanner() 
{
	var hide = document.getElementsByClassName("hide");
	var navslide = document.getElementsByClassName("slide");
	//var nav = document.getElementById("navbar");

  	for(var i = 0; i < hide.length; i++)
  	{
  		if(i === 0)
  		{
  			hide[i].style.height = "12.5%";
  			
  		}
  		else
  		{
  			hide[i].style.display = "none";	
  			
  		}	
    }
    for(var i = 0; i < navslide.length; i++)
    {
    	navslide[i].style.transform = "translateX(0%)";
	}


}
var app = angular.module('myApp', ['ngRoute']); 

app.config(function($locationProvider, $routeProvider) {
	//$locationProvider.hashPrefix('');
	//$locationProvider.html5Mode({enabled:true, requireBase: false});
	$routeProvider

	.when('/', {
		templateUrl : 'Pages/Home.html',
		//controller : 'HomeController'
		resolve: { tmp: function ($timeout) { return $timeout(function () { }, 2000); } } 	
	})

	.when('/Projects', {
		templateUrl : 'Pages/Projects.html'
		//controller : 'ProjectsController'
			
	})

	.when('/About', {
		templateUrl : 'Pages/About.html'
		//controller : 'AboutController'
	})
	.otherwise({redirectTo: '/'});
});

app.run(['$location', function ($location) {
    $location.path('/');
}]);

 // app.controller('AboutController', function($scope){
 // 	$scope.message = "Hello from About Controller";
 // });

 // app.controller('ProjectsController', function($scope){
 // 	$scope.message = "Hello from Projects Controller";
 // });

 //  app.controller('HomeController', function($scope){
 // 	$scope.message = "Hello from Home Controller";
 // });