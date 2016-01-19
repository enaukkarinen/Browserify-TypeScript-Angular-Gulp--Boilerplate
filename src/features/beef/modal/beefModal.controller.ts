/// <reference path="../../../../typings/tsd.d.ts" />

import { Beef } from  "../beef";
import { ModalDialogParameters, IModalDialogParameters } from "./modalDialogParameters";

"use strict";

export default class BeefModalController {
	
	beef :Beef;
	
	
    static $inject = ["$modalInstance", "dialogParams"];
    constructor(private $modalInstance, private dialogParams : IModalDialogParameters) {
		this.beef = dialogParams.beef;
	}
	
	proceed () {
		console.log(this.$modalInstance);
		
		this.$modalInstance.close(this.beef);
	}
	
	cancel () {
		this.$modalInstance.dismiss();
	}
}

angular.module("app.beef").controller("BeefModalController", BeefModalController);

