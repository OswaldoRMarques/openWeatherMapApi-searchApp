'use strict';


angular.module('openWeatherApiSearchApp')
.controller('WeatherSearchController', function(OpenWeatherMap, $scope) {
	$scope.search = function(name){
		OpenWeatherMap.searchWeatherByCity(name).then(
			function success(response){
			   $scope.weather = angular.copy(response.data);
			}
		);
	}
});