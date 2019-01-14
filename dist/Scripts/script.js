

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

app.config(function($routeProvider) {
	$routeProvider

	// .when('/', {
	// 	templateUrl : '/home.html'
	// 	//controller : 'HomeController'
			
	// })

	.when('Pages/Projects', {
		templateUrl : 'Projects.html'
		//controller : 'HomeController'
			
	})

	.when('Pages/About', {
		templateUrl : 'About.html'
		//controller : 'AboutController'
	})
	.otherwise({redirectTo: '/'});
});

  