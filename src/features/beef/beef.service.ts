/// <reference path="../../../typings/tsd.d.ts" />
   
import { Beef } from  "./beef";

interface IBeefService {
	
    get(s: number): Beef;
	
    get(): Beef[];
	
	add (player: Beef): void;
	
	delete (id: number): void;
	
	update (player: Beef): void;
	
}

export default class BeefService implements IBeefService {
    
	private _beefs: Array<Beef>;
	
    constructor() {
		this._beefs = [
			new Beef(1, "Kobe", 10, 1),
			new Beef(2, "Top Sirloin Cap", 6, 3),
			new Beef(3, "Tenderloin", 8, 2),
			new Beef(4, "Strip Loin / New York Strip", 8, 1)
		];
	}
	
    // overloading
	get (): Array<Beef>;
	get (id :number): Beef;
	get (id? :number): any {
		if(typeof id === "number")
			return _.find(this._beefs, (b) => { return b.id === id; });
		else
			return this._beefs;
	}
	
	add (beef: Beef): void {
		this._beefs.push(beef);
	} 
	
	delete (id: number): void {
		_.remove(this._beefs, (b) => {return b.id === id });
	}
	
	update (beef: Beef): void {
		let index = _.indexOf(this._beefs, _.find(this._beefs, {id: beef.id}));
		this._beefs.splice(index, 1, beef);
	}
}

angular.module("app.beef").service("BeefService", BeefService);

