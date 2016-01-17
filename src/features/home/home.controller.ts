
/// <reference path="../../../typings/tsd.d.ts" />


export default class HomeController 
{
    message :string;
    
	constructor() {
		this.message = 'a lot to do here...';
	}
	
	
}

angular.module("app.home", []).controller("HomeController", HomeController);



