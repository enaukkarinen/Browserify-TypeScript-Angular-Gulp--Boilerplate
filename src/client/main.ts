/// <reference path="../../typings/angularjs/angular.d.ts" />

import "./templates";
import "./features/common/NavBarModule";
import "./features/players/PlayersModule";

import Person from "./features/Person";
var p = new Person("ensio");
p.dance();

angular.module("app", [
  "app.templates",
  "NavBarModule",
  "PlayersModule",
  "ui.router",
  "ui.bootstrap"])
 .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("welcome");
	$stateProvider
		.state("welcome", {
			name: "welcome",
			url: "/welcome",
  			templateUrl: "features/welcome/Welcome.html"
		})
		.state("players", {
			name: "players",
			url: "/players",
        	templateUrl: "features/players/PlayersGrid.html",
			controller: "PlayersController",
			controllerAs: "pl"
		})
		.state("player", {
				name: "player",
				url: "/player",
            	templateUrl: "features/players/PlayerDetails.html",
				controller: "PlayerController",
				controllerAs: "pld",
				params: {player: null}
		});		
});


