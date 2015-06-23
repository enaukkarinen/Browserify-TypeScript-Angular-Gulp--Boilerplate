/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";

import Player from "./Player";
import PlayerModalService from "./modalDialog/PlayerModalService";
import PlayerService from "./PlayerService";
import { ModalDialogParameters } from "./modalDialog/ModalDialogParameters";

export default class PlayersCtrl {
	
	public players: Player[];
	
	static $inject = ["PlayerService", "PlayerModalService"];

	constructor(private PlayerService :PlayerService, private PlayerModalService :PlayerModalService) {
		console.log("PlayersController constructor");
		this.players = this.PlayerService.get();
		let test= this.PlayerService.get(1);
		console.log(test);
	}
	
	public create () {
		var prms = new ModalDialogParameters("create", new Player(this.players.length + 1, "", 18, ""));
		 this.PlayerModalService.openDialog(prms).then((created) => { 
			this.PlayerService.add(created);
		});
	};
	
	public edit (player) {
		var prms = new ModalDialogParameters("edit", angular.extend({}, player));
		this.PlayerModalService.openDialog(prms).then((edited) => { 
			this.PlayerService.update(edited);
		});
	};
	
	public delete (player) {
		var prms = new ModalDialogParameters("delete", player);
        this.PlayerModalService.openDialog(prms).then((deleted) => { 
			this.PlayerService.delete(deleted.id);
		});						
	};
}

angular.module("PlayersModule").controller("PlayersController", PlayersCtrl);



