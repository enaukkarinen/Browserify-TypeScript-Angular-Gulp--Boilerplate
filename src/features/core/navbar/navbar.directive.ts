/// <reference path="../../../../typings/tsd.d.ts" />

import NavBarController from "./navbar.controller";

interface NavBarIsolatedScope extends angular.IScope
{
    title: string;
}


export class NavBarDirective implements angular.IDirective {
    
    public restrict = 'EA';
    public templateUrl = "navbar.html";
    public controller = NavBarController;
    public controllerAs =  "nav";
    public scope = { title:  "@" };
    public link: (scope?: NavBarIsolatedScope, element?: angular.IAugmentedJQuery, attrs?: angular.IAttributes) => void;

    constructor()
    {
        this.link = (scope: NavBarIsolatedScope, element: angular.IAugmentedJQuery, attrs: angular.IAttributes) =>
        {
            element.find("#main-title").append(scope.title);
        };
    }

    static factory(): angular.IDirectiveFactory {
        const directive = () => new NavBarDirective();
        //directive.$inject = ["$animate"];
        return directive;
    }
}

angular.module("app.core").directive("bfNavBar", NavBarDirective.factory());
