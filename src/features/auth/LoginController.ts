/// <reference path="../../../typings/tsd.d.ts" />

"use strict";

export default class LoginCtrl {
	

	
    static $inject = ["$stateParams"];

    constructor(private $stateParams) {

	}
}

angular.module("AuthModule").controller("LoginController", LoginCtrl);
