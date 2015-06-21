/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";


import Player from "./Player";
import PlayerModalService from "./modalDialog/PlayerModalService";
import { ModalDialogParameters } from "./modalDialog/ModalDialogParameters";

export default class PlayersCtrl {
	
	public players: Player[];
	
	static $inject = ["PlayerModalService"];

	constructor(private PlayerModalService : PlayerModalService) {
		this.players = new Array<Player>();
		this.players.push(new Player(1, "Karl Anthony Towns", 18, "C"));
		this.players.push(new Player(2, "Jahlil Okafor", 19, "C"));
		this.players.push(new Player(3, "D'Angelo Russell", 19, "G"));
		this.players.push(new Player(4, "Emmanuel Mudiay", 19, "G"));
	}
	

	
	public create () {
		var prms = new ModalDialogParameters("create", new Player(this.players.length+1, "", 18, ""));
		 this.PlayerModalService.openDialog(prms).then((created) => { 
			this.players.push(created);
		});
	};
	
	public edit (player) {
		var prms = new ModalDialogParameters("edit", angular.extend({}, player));
		this.PlayerModalService.openDialog(prms).then((edited) => { 
			var index = _.indexOf(this.players, _.find(this.players, {id: player.id}));
			this.players.splice(index, 1, edited);
		});
	};
	
	public delete (player) {
		var prms = new ModalDialogParameters("delete", player);
        this.PlayerModalService.openDialog(prms).then((deleted) => { 
			_.remove(this.players, function(obj) { return obj.id === deleted.id; }); 
		});						
	};
}

angular.module("PlayersModule").controller("PlayersController", PlayersCtrl);



