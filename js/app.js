/*global angular */
/*jshint unused:false */
'use strict';

/**
 * The main CoffeeMVC app module
 *
 * @type {angular.Module}
 */
var coffeemvc = angular.module('coffeemvc', ['ngRoute', 'firebase']);

coffeemvc.filter('todoFilter', function ($location) {

	return function (input) {
		var filtered = {};
		angular.forEach(input, function (todo, id) {
			var path = $location.path();
			if (path === '/active') {
				if (!todo.completed) {
					filtered[id] = todo;
				}
			} else if (path === '/completed') {
				if (todo.completed) {
					filtered[id] = todo;
				}
			} else if (path === '/ourshop') {
				console.log('test');
			} else if (path === '/feines') {
				console.log('test');
			}  

			 else {
				filtered[id] = todo;
			}
		});
		return filtered;
	};
});


coffeemvc.config(function ($routeProvider) {
		//set up config


		//routes
		$routeProvider
			.when('/ourshop', {
				templateUrl: '/templates/introPage.html',
				controller: 'coffeemvc'
			})
			.when('/feines', {
				templateUrl: '/templates/feinesGallery.html',
				controller: 'coffeemvc'
			});
			
	});
