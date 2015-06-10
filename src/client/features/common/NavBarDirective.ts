/// <reference path="../../../../typings/angularjs/angular.d.ts" />

class Nav {
	
	constructor() {}
	
	
}

export function NavBarDirective () : ng.IDirective {
	
	console.log('build directive');
	return {
		templateUrl: "features/common/NavBar.html",
        controller: Nav,
        controllerAs: "nav",
		bindToController: true
	};
}

angular.module("NavBarModule").directive("optNavBar", NavBarDirective);



