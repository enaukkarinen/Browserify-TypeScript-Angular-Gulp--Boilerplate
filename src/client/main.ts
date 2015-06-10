/// <reference path="../../typings/angularjs/angular.d.ts" />

//import model = require("./model/Person");
//var p = new model.Person("ensio");

import "./features/common/NavBarModule";

import Person from "./features/Person";
var p = new Person("ensio");

angular.module("app", ["NavBarModule"]).filter("greet", function() {
 return function(name: string) {
    return "Hello, " + name + "!";
  };
});

p.dance();
