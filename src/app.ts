/// <reference path="../typings/angularjs/angular.d.ts" />

var todomvc = angular.module('todomvc', ['ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider.when('/', {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html'
		}).otherwise({
			redirectTo: '/'
		});
	});
	
	
import model = require('./model/Person');

var p = new model.Person('ensio');

p.dance();
