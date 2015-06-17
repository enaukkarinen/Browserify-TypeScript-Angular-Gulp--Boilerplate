/// <reference path="../../../../../typings/tsd.d.ts" />

import Player from  "../Player";
import { ModalDialogParameters, IModalDialogParameters } from "./ModalDialogParameters";

"use strict";

export default class PlayerModalCtrl {
	
	player :Player;
	
	
    static $inject = ["$stateParams", "dialogParams"];

    constructor(private $stateParams, private dialogParams : IModalDialogParameters) {
		console.log(dialogParams);
	}
}

angular.module("PlayersModule").controller("PlayerModalController", PlayerModalCtrl);

