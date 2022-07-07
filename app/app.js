var app = angular.module('weatherApp', ['angular-loading-bar']);
app.controller('weatherControl', function($http,$scope){
	$scope.items = {};
	$scope.assetName = '';
	$scope.totalCount = 0;
	$scope.searchWeather = function(){
		var searchTerm = $scope.assetName;
		// $http.get('http://api.openweathermap.org/data/2.5/find?q='+searchTerm+'&type=like&sort=population&cnt=30&units=metric&APPID=73136fa514890c15bc4534e7b8a1c0c4').success(function(data){
		$http.get('http://api.weatherapi.com/v1/current.json?key=7a331c40bfb44cf0bf842911220707&q='+searchTerm
		).success(function(data){
		$scope.items = data;
		console.log(data);
		});
	};
});