/// <reference path="../../../../typings/tsd.d.ts" />


class NavBarDirective implements angular.IDirective {
    
    restrict = 'EA';
    templateUrl = "features/common/NavBar.html";
    controller = function() {};
    controllerAs =  "nav";

    constructor() {
    }

    static factory(): angular.IDirectiveFactory {
        const directive = () => new NavBarDirective();
        //directive.$inject = ['$location', 'toaster'];
        return directive;
    }
}

angular.module("NavBarModule").directive("optNavBar", NavBarDirective.factory());