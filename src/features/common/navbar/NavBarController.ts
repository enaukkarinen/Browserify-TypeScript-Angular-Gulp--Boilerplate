/// <reference path="../../../../typings/tsd.d.ts" />
import {AccessService, Module} from "../../dataservices/AccessService";


export default class NavBarCtrl {

	links: Module[];
	
	static $inject = ["AccessService"];
	constructor (private AccessService :AccessService) {
		this.links = this.AccessService.getAccess("test");
	}
}

angular.module("NavBarModule").controller("NavBarController", NavBarCtrl);
