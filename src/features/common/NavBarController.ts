/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

class Link {	
	ref: string;
	name: string;
	constructor(r: string, n: string){
		this.ref = r;
		this.name = n;
	}
}

export default class NavBarCtrl {

	links: Link[];
	
	constructor () {
		this.links = new Array<Link>(new Link("Players", "players"), new Link("StyleTest", "style test"));
		console.log(this.links);
	}
}

angular.module("NavBarModule").controller("NavBarController", NavBarCtrl);
