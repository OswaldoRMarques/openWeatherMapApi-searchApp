'use strict';

angular.module('openWeatherApiSearchApp').factory('OpenWeatherMap', OpenWeatherMap);

OpenWeatherMap.$inject = ['$http', '$q'];

function OpenWeatherMap($http, $q){
	var _key =  '8e542534b34a4ebdbdaa47c2ba1bbd0e';
	var _searchWeatherByCity = function(city){
		var defer = $q.defer();
		var params = {
			q: city,
			units: 'metric',
			APPID: _key
		}
		$http.get('http://api.openweathermap.org/data/2.5/weather', {params}).then(
			function success(response){
				defer.resolve(response);
			},
			function error(err){
				defer.reject(erro);
			}
		);
		return defer.promise;
	}

	return{
		searchWeatherByCity: _searchWeatherByCity
	};
}