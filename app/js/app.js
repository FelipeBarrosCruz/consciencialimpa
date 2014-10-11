"use scrict";

var app = angular.module('conscienciaApp', ['ui.bootstrap']);
const APP_PAGE = 'html/page';
const APP_TPL  = 'html/tpl';

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.
		when('/', {controller: 'HomeCtrl', templateUrl: })
});