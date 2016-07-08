'use strict';

angular.module('openWeatherApiSearchApp')

.config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider) {
	$routeProvider.when("/weatherSearch", {
		templateUrl: "views/weatherSearch.html",
		controller: "WeatherSearchController"
	});

	$routeProvider.otherwise({
		redirectTo: "/weatherSearch"
	});
};