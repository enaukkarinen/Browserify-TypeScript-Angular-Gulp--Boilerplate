/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/lodash/lodash.d.ts"/>
"use strict";


import Player from "./Player";
import PlayerModalService from "./PlayerModalService";

export default class PlayersCtrl {
	
	public players: Player[];
	
	static $inject = ['PlayerModalService'];

	constructor(private ModalService : PlayerModalService) {
		this.players = new Array<Player>();
		this.players.push(new Player(1, "Karl Anthony Towns", 18, "C"));
		this.players.push(new Player(2, "Jahlil Okafor", 19, "C"));
		this.players.push(new Player(3, "D'Angelo Russell", 19, "G"));
		this.players.push(new Player(4, "Emmanuel Mudiay", 19, "G"));
	}
	

	
	public create () {
		var temp = this.players;
		 this.ModalService.showModal({action: "create", player: {id: this.players.length+1, name: "", age: 18, position: ""}}).then(function (created) { 
			temp.push(created);
		});
		this.players = temp;
	};
	
	public edit (player) {
		var temp = this.players;
		 this.ModalService.showModal({action: "edit", player: angular.extend({}, player)}).then(function (edited) { 
			var index = _.indexOf(temp, _.find(temp, {id: player.id}));
			temp.splice(index, 1, edited);
		});
		this.players = temp;
		
	};
	
	public delete (player) {
		var temp = this.players;
        this.ModalService.showModal({action: "delete", player: player}).then(function (result) { 
			_.remove(temp, function(obj) { return obj.id === player.id; }); 
		});
		this.players = temp;						
	};
}

angular.module("PlayersModule").controller("PlayersController", PlayersCtrl);



