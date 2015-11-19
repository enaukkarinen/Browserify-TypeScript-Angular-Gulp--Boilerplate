/// <reference path="../typings/tsd.d.ts" />

import "./templates";
import "./features/common/navbar/NavBarModule";
import "./features/players/PlayersModule";

angular.module("app", [
  "app.templates",
  "NavBarModule",
  "PlayersModule",
  "ui.router",
  "ui.bootstrap"])
 .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("welcome");
	$stateProvider
		.state("welcome", {
			name: "welcome",
			url: "/welcome",
  			templateUrl: "./features/welcome/Welcome.html"
		})
		.state("players", {
			name: "Players",
			url: "/Players",
        	templateUrl: "./features/players/PlayersGrid.html",
			controller: "PlayersController",
			controllerAs: "pl"
		})
		.state("Player", {
			name: "Player",
			url: "/Player",
        	templateUrl: "./features/players/PlayerDetails.html",
			controller: "PlayerController",
			controllerAs: "pld",
			params: {player: null}
		});
}]);

