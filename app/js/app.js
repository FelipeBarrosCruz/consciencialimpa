"use scrict";

var app = angular.module('conscienciaApp', ['ui.bootstrap', 'ngRoute']);
app.value('INSTA_PUBLIC_KEY', 'b3772cf0fbf34a85a8bbc283e6588b32');

const APP_PAGE = 'html/pages/';
const APP_TPL  = 'html/tpls/';

app.config(function($routeProvider) {
	$routeProvider.
		when('/', {controller: 'HomeCtrl', templateUrl: APP_PAGE + 'home.html'})
		.otherwise({ redirectTo: '/' });
});

app.factory('InstaQuery', ['INSTA_PUBLIC_KEY', function (INSTA_PUBLIC_KEY) {
	
	var insta_config = {
		clientId: INSTA_PUBLIC_KEY,
		mock: true
	};

	var configuration = function(_config) {
		for(attr in _config) {
			insta_config[attr] = _config[attr];
		}
	};

	var getByTag = function(_tag_name, _callback) {
			configuration({
				get: 'tagged',
				tagName: _tag_name,
				success: _callback
			});

			var feed = new Instafeed(insta_config);
			var status = feed.run();
			return status;
		}; 

	return {
		getByTag: getByTag
	};
}])



app.controller('HomeCtrl', ['$scope', 'InstaQuery', function ($scope, InstaQuery) {

	$scope.feed = [];

	InstaQuery.getByTag('love', function(response) {
		$scope.feed = response.data;
		console.log(response);
		console.log(response.data[0].caption.text);
		console.log(data.data[0].images.standard_resolution.url);
		$scope.$digest();
	});

}]);