/// <reference path="../../../../typings/angularjs/angular.d.ts" />
"use strict";

export default class NavBarCtrl {
	
	message :string = "Some Message";
	constructor() {
		this.message += "!";
	}
}


angular.module("app").controller("NavBarController", NavBarCtrl);
