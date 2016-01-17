/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import { Beef } from "./beef";
import BeefModalService from "./modal/beefModal.service";
import BeefService from "./beef.service";
import { ModalDialogParameters } from "./modal/modalDialogParameters";

export default class BeefsCtrl {
	
	public beefs: Beef[];
	
	static $inject = ["BeefService", "BeefModalService"];

	constructor(private BeefService :BeefService, private BeefModalService :BeefModalService) {
		this.beefs = this.BeefService.get();
		let test= this.BeefService.get(1);
		console.log(this.beefs);
        console.log(test);
	}
	
	public create () {
		var prms = new ModalDialogParameters("create", new Beef(this.beefs.length + 1, "", 5, 1));
		 this.BeefModalService.openDialog(prms).then((created) => { 
			this.BeefService.add(created);
		});
	};
	
	public edit (beef) {
		var prms = new ModalDialogParameters("edit", angular.extend({}, beef));
		this.BeefModalService.openDialog(prms).then((edited) => { 
			this.BeefService.update(edited);
		});
	};
	
	public delete (beef) {
		var prms = new ModalDialogParameters("delete", beef);
        this.BeefModalService.openDialog(prms).then((deleted) => { 
			this.BeefService.delete(deleted.id);
		});						
	};
}

angular.module("app.beef").controller("BeefsController", BeefsCtrl);



