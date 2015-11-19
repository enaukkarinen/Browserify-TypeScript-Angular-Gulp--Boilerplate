/// <reference path="../typings/tsd.d.ts" />

import "./templates";
import "./features/home/home";


angular.module("app", [
  "app.templates",
  "ui.router",
  "ui.bootstrap"])
 .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("home");
	$stateProvider
		.state("home", {
			name: "home",
			url: "/home",
  			templateUrl: "./features/home/home.html",
			controller: "HomeController",
			controllerAs: "home"
		});
}]);
