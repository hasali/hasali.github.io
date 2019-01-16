

function closeNav() 
{
	var hide = document.getElementsByClassName("hide");
	var navslide = document.getElementById("slide");
  	for(var i = 0; i < hide.length; i++)
  	{
  		if(i === 0)
  		{
  			hide[i].style.height = "7%";	
  		}
  		else
  		{
  			hide[i].style.display = "none";	
  			
  		}	
    }
    navslide.style.transform = "translateX(0%)";


}
var app = angular.module('myApp', ['ngRoute']); 

app.config(function($locationProvider, $routeProvider) {
	//$locationProvider.html5Mode(true);
	$routeProvider

	.when('/', {
		templateUrl : '/index.html'
		//controller : 'HomeController'
			
	})

	.when('/Projects', {
		templateUrl : 'Pages/Projects.html',
		controller : 'ProjectsController'
			
	})

	.when('/About', {
		templateUrl : 'Pages/About.html',
		controller : 'AboutController'
	})
	.otherwise({redirectTo: '/'});
});

 app.controller('AboutController', function($scope){
 	$scope.message = "Hello from AboutController";
 });
 app.controller('ProjectsController', function($scope){
 	$scope.message = "Hello from ProjectsController";
 });