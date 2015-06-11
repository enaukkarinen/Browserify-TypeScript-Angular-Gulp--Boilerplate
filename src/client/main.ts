/// <reference path="../../typings/angularjs/angular.d.ts" />

//import model = require("./model/Person");
//var p = new model.Person("ensio");

import "./features/common/NavBarModule";

import Person from "./features/Person";
var p = new Person("ensio");

angular.module("app", [
  "NavBarModule",
  "ui.router"])
 .config(function($stateProvider, $urlRouterProvider)
	{
    $urlRouterProvider.otherwise("welcome");
		$stateProvider
			.state("welcome", {
				name: "welcome",
				url: "/welcome",
      	templateUrl: "./features/welcome/Welcome.html"
			})
			.state("players", {
				name: "players",
				url: "/players",
            	templateUrl: "./app/players/PlayersGrid.html",
				controller: "PlayersController",
				controllerAs: "pl"
			});
		
	})

p.dance();
