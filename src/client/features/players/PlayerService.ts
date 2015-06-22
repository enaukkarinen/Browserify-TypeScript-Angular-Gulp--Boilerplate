/// <reference path="../../../../typings/tsd.d.ts" />
   
import Player from  "./Player";
import { IPlayerService } from "./IPlayerService";

export default class PlayerService implements IPlayerService {
    
	private _players: Array<Player>;
	
    constructor() {
		this._players = [
			new Player(1, "Karl Anthony Towns", 18, "C"),
			new Player(2, "Jahlil Okafor", 19, "C"),
			new Player(3, "D'Angelo Russell", 19, "G"),
			new Player(4, "Emmanuel Mudiay", 19, "G"),
			new Player(5, "Mario Hejonza", 19, "F")
		];
	}
	
	get (): Array<Player>;
	get (id :number): Player;
	get (id? :number): any {
		if(typeof id === "number")
			return _.find(this._players, (player) => { return player.id === id; });
		else
			return this._players;
	}
	
	add (player: Player): void {
		this._players.push(player);
	} 
	
	delete (id: number): void {
		_.remove(this._players, (player) => {
			return player.id === id
		});
		console.log(this._players);
	}
	
	update (player: Player): void {
		let index = _.indexOf(this._players, _.find(this._players, {id: player.id}));
		this._players.splice(index, 1, player);
	}
}

angular.module("PlayersModule").service("PlayerService", PlayerService);

