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


// Display a warning toast, with no title
//toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')

// Display a success toast, with a title
//toastr.success('Have fun storming the castle!', 'Miracle Max Says')

// Display an error toast, with a title
//toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')

// Override global options
//toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', {timeOut: 5000})