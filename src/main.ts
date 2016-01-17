/// <reference path="../typings/tsd.d.ts" />

import "./templates";
import "./features/home/home.controller";


angular.module("app", [
  "app.templates",
  "app.home",
  "ui.router",
  "ui.bootstrap"])
 .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("home");
	$stateProvider
		.state("home", {
			name: "home",
			url: "/home",
  			templateUrl: "home.html",
			controller: "HomeController",
			controllerAs: "h"
		});
}]);
