/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/lodash/lodash.d.ts"/>
"use strict";


import Player from "./Player";
import PlayerModalService from "./PlayerModalService";

export default class PlayersCtrl {
	
	players: Player[];
	
	static $inject = ['PlayerModalService'];
	
	constructor(private ModalService : PlayerModalService) {

		this.players = [
			{id: 1, name: "Karl Anthony Towns", age: 18, position: "C"},
			{id: 2, name: "Jahlil Okafor", age: 19, position: "C"},
			{id: 3, name: "D'Angelo Russell", age: 19, position: "G"},
			{id: 4, name: "Emmanuel Mudiay", age: 20, position: "G"}
		];
	}
	

	
	public create () {
		
		 this.ModalService.showModal({action: "create", player: {id: this.players.length+1, name: "", age: 18, position: ""}}).then(function (created) { 
			this.players.push(created);
		});
		
	};
	
	public edit (player) {
		
		 this.ModalService.showModal({action: "edit", player: angular.extend({}, player)}).then(function (edited) { 
			var index = _.indexOf(this.players, _.find(this.players, {id: player.id}));
			this.players.splice(index, 1, edited);
		});
		
	};
	
	public delete (player) {
		
        this.ModalService.showModal({action: "delete", player: player}).then(function (result) { 
			_.remove(this.players, function(obj) { return obj.id === player.id; }); 
		});
						
	};
}

angular.module("PlayersModule").controller("PlayersController", PlayersCtrl);



