/// <reference path="../typings/angularjs/angular.d.ts" />

var myAppModule = angular.module('todomvc', []);

myAppModule.filter('greet', function() {
 return function(name) {
    return 'Hello, ' + name + '!';
  };
});	
	
import model = require('./model/Person');

var p = new model.Person('ensio');

p.dance();
