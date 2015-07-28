/// <reference path="../../../../typings/tsd.d.ts" />


export class UsernameValidator implements angular.IDirective {
    restrict = "A";
    require = "ngModel";
    constructor(private $q, private $timeout) { }
    link = (scope: angular.IScope, element: angular.IAugmentedJQuery, attrs: angular.IAttributes, model: angular.INgModelController) =>
    {
        model.$asyncValidators["userNameValidator"] = (modelValue :any, viewValue :string) : angular.IPromise<any> => {
            
          var usernames = ['Jim', 'John', 'Jill', 'Jackie'];
          
          if(model.$isEmpty(modelValue)) {       
            return this.$q.when(); // consider empty model valid
          }
          
          let deferred :angular.IDeferred<any> = this.$q.defer();
          let rexex = new RegExp("^[-\w\.\$@\*\!]$");
          
          
          // Mock a delayed response
          this.$timeout(() => {
              
            if(rexex.test(modelValue)) {
              deferred.resolve();
            }
            else {
              deferred.reject("testi");
              console.log(model.$error);
            }
            
          }, 500);
          
          return deferred.promise;
        };
    }
}
angular.module("AuthModule").directive("usernameValidator", ["$q", "$timeout", ($q, $timeout) =>  new UsernameValidator($q, $timeout)]);