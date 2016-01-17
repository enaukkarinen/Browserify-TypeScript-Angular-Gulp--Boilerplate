/// <reference path="../typings/tsd.d.ts" />

import "./templates";
import "./features/core/core.module";
import "./features/beef/beef.module";

angular.module("app", [
  "app.templates",
  "app.core",
  "app.beef",
  "ui.router",
  "ui.bootstrap"])
 .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("welcome");
	$stateProvider
		.state("welcome", {
			name: "welcome",
			url: "/welcome",
  			templateUrl: "welcome.html"
		})
		.state("beefs", {
			name: "beefs",
			url: "/beefs",
        	templateUrl: "beefs.html",
			controller: "BeefsController",
			controllerAs: "bfs"
		})
		.state("beef", {
			name: "beef",
			url: "/beef",
        	templateUrl: "beef.html",
			controller: "BeefController",
			controllerAs: "bf",
			params: {beef: null}
		});
}]);

