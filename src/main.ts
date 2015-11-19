/// <reference path="../typings/tsd.d.ts" />

import "./templates";

angular.module("app", [
  "app.templates",
  "ui.router",
  "ui.bootstrap"])
 .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("welcome");
	$stateProvider
		.state("welcome", {
			name: "welcome",
			url: "/welcome",
  			templateUrl: "./features/welcome/Welcome.html"
		});
		
}]);

