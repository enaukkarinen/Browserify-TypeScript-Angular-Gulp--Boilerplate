/// <reference path="../../../../typings/tsd.d.ts" />

import NavBarController from "./NavBarController";

interface NavBarIsolatedScope extends angular.IScope
{
    name: string;
    title: string;
}


export class NavBarDirective implements angular.IDirective {
    
    public restrict = 'EA';
    public templateUrl = "features/common/NavBar.html";
    public controller = NavBarController;
    public controllerAs =  "nav";
    public scope = { title:  "@" };
    public link: (scope: angular.IScope, element: angular.IAugmentedJQuery, attrs: angular.IAttributes) => void;

    constructor()
    {
        //this.controller = () => {}; definition and injection here unless using another class.
        this.link = (scope: NavBarIsolatedScope, element: angular.IAugmentedJQuery, attrs: angular.IAttributes) =>
        {
            scope.name = 'Enska!';
            element.find("#main-title").text(scope.title);
        };
    }

    static factory(): angular.IDirectiveFactory {
        const directive = () => new NavBarDirective();
        //directive.$inject = ["$animate"];
        return directive;
    }
}

angular.module("NavBarModule").directive("optNavBar", NavBarDirective.factory());
