/// <reference path="../../../../typings/tsd.d.ts" />

import Player from  "./Player";

"use strict";

export default class PlayerCtrl {
	
	player :Player;
	
    static $inject = ["$stateParams"];

    constructor(private $stateParams) {
		
			var vm = this;
	
			vm.player = $stateParams.player;
	}
}

angular.module("PlayersModule").controller("PlayerController", PlayerCtrl);

