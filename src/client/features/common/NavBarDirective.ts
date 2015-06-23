/// <reference path="../../../../typings/tsd.d.ts" />


interface NavBarIsolatedScope extends angular.IScope
{
    name: string;
    title: string;
}


export class NavBarDirective implements angular.IDirective {
    
    restrict = 'EA';
    templateUrl = "features/common/NavBar.html";
    controller = () => {};
    controllerAs =  "nav";
    scope = { title:  "@" };
    link: (scope: angular.IScope, element: angular.IAugmentedJQuery, attrs: angular.IAttributes) => void;

    constructor()
    {
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
