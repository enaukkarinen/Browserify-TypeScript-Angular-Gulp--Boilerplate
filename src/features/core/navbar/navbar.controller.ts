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

export default class NavBarController {
	links;
	constructor () {
		this.links = new Array<Link>(new Link("Beef steaks", "beefs"));
			console.log(this.links);
	}
}

angular.module("app.core").controller("NavBarController", NavBarController);
