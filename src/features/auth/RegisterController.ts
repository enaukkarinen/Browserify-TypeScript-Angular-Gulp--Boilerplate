/// <reference path="../../../typings/tsd.d.ts" />

"use strict";

export default class RegisterCtrl {
	
    static $inject = ["$stateParams"];

    constructor(private $stateParams) {

	}
}

angular.module("AuthModule").controller("RegisterController", RegisterCtrl);

