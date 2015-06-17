/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";

export default class NavBarCtrl {
	
	message :string = "Some Message";
	
	constructor () {
	}
}

angular.module("NavBarModule").controller("NavBarController", NavBarCtrl);
