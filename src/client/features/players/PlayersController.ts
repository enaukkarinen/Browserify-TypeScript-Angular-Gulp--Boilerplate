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
		var temp = this.players;
		 this.PlayerModalService.openDialog(new ModalDialogParameters("create", new Player(this.players.length+1, "", 18, ""))).then(function (created) { 
			temp.push(created);
		});
		this.players = temp;
	};
	
	public edit (player) {
		var temp = this.players;
		 this.PlayerModalService.openDialog(new ModalDialogParameters("edit", angular.extend({}, player))).then(function (edited) { 
			var index = _.indexOf(temp, _.find(temp, {id: player.id}));
			temp.splice(index, 1, edited);
		});
		this.players = temp;
		
	};
	
	public delete (player) {
		var temp = this.players;
        this.PlayerModalService.openDialog(new ModalDialogParameters("delete", player)).then(function (result) { 
			_.remove(temp, function(obj) { return obj.id === player.id; }); 
		});
		this.players = temp;						
	};
}

angular.module("PlayersModule").controller("PlayersController", PlayersCtrl);



