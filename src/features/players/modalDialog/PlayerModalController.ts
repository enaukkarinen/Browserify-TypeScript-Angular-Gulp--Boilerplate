/// <reference path="../../../../typings/tsd.d.ts" />

import Player from  "../Player";
import { ModalDialogParameters, IModalDialogParameters } from "./ModalDialogParameters";

"use strict";

export default class PlayerModalCtrl {
	
	player :Player;
	
	
    static $inject = ["$modalInstance", "dialogParams"];

    constructor(private $modalInstance, private dialogParams : IModalDialogParameters) {
		this.player = dialogParams.player;
	}
	
	proceed () {
		console.log(this.$modalInstance);
		
		this.$modalInstance.close(this.player);
	}
	
	cancel () {
		this.$modalInstance.dismiss();
	}
}

angular.module("PlayersModule").controller("PlayerModalController", PlayerModalCtrl);

