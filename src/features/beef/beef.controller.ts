/// <reference path="../../../typings/tsd.d.ts" />

import { Beef } from  "./beef";

"use strict";

export default class BeefController {
	
	beef :Beef;
	
    static $inject = ["$stateParams"];
    constructor(private $stateParams) {
		this.beef = this.$stateParams.beef;
        console.log(this.beef);
	}
}

angular.module("app.beef").controller("BeefController", BeefController);

