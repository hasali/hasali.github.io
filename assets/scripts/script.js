
window.onload = function()
{

  document.getElementById("viewprofilebtn").addEventListener("click", showMain);

}

function showMain()
{
  var fadeI = angular.element(document.querySelector('.mainHidden'));
  fadeI.addClass('mainVisible');
  
}

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
//var col = document.getElementsByClassName("slide");


var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'routeStyles', 'angularSlideables']);

myApp.config(function($locationProvider, $routeProvider) {
	//$locationProvider.hashPrefix('');
	//$locationProvider.html5Mode({enabled:true, requireBase: false});
	$routeProvider

	.when('/', {
		templateUrl : 'Pages/Projects.html',
		//controller : 'HomeController'
		
		css: 'assets/css/styleProjects.css'
	})

	.when('/Contact', {
		templateUrl : 'Pages/Contact.html'
		//controller : 'ProjectsController'
			
	})

	.when('/About', {
		templateUrl : 'Pages/About.html',
		//controller : 'AboutController'
    css: 'assets/css/styleAbout.css'
	})
	.otherwise({redirectTo: '/'});


  });


myApp.directive('toggleClass', function() {
  return {
      restrict: 'A',
      link: function(scope, element, attrs) { 
          element.bind('click', function() {
              element.toggleClass(attrs.toggleClass);
              
          });
      }
  };
});
myApp.run(['$location', function ($location) {
  $location.path('/');
}]);

// myApp.controller('formCtrl', function($scope, $http){
//   $scope.sub = function(){
//     $http.post('/', $scope.formData).
//     then(function(response){
//       $scope.status = response.status;
//       $scope.data = response.data;
//       console.log('post success');
//     },function(response){
//       $scope.status = response.status;
//       $scope.data = response.data;
//       console.error("post error")
//     });
//   }
// });
// app.controller('MainCtrl', function($scope, $routeParams, $route, $location) 
// {
//   $scope.$watch(function()
//   {
//     return ($route.current && $route.current.css) ? $route.current.css : 'assets/css/styleMain.css';
//   }, 
//   function(value) 
//   {
//     $scope.css = value;
//   });
// });

 // app.controller('AboutController', function($scope){
 // 	$scope.message = "Hello from About Controller";
 // });

 // app.controller('ProjectsController', function($scope){
 // 	$scope.message = "Hello from Projects Controller";
 // });

 //  app.controller('HomeController', function($scope){
 // 	$scope.message = "Hello from Home Controller";
 // });