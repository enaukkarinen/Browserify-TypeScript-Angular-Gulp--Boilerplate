/// <reference path="../../../../typings/tsd.d.ts" />

class Link 
{
	name: string;
	ref: string;
	
	constructor(n: string, r :string) {
		this.name = n;
		this.ref = r;
	}	
}
export default class NavBarCtrl {
	links;
	constructor () {
		this.links = new Array<Link>(new Link("Players", "players"));
			console.log(this.links);
	}
}

angular.module("NavBarModule").controller("NavBarController", NavBarCtrl);
