/// <reference path="../typings/tsd.d.ts" />

import "./templates";
import "./features/auth/AuthModule";
import "./features/dataservices/AccessService";
import "./features/common/navbar/NavBarModule";
import "./features/players/PlayersModule";

angular.module("app", [
  "app.templates",
  "DataServiceModule",
  "AuthModule",
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
		})
		.state("register", {
			name: "register",
			url: "/register",
        	templateUrl: "./features/auth/Register.html",
			controller: "RegisterController",
			controllerAs: "req"
		})
		.state("login", {
			name: "login",
			url: "/login",
	    	templateUrl: "./features/auth/Login.html",
			controller: "LoginController",
			controllerAs: "log"
		});		
}]);


// Display a warning toast, with no title
//toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')

// Display a success toast, with a title
//toastr.success('Have fun storming the castle!', 'Miracle Max Says')

// Display an error toast, with a title
//toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')

// Override global options
//toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', {timeOut: 5000})