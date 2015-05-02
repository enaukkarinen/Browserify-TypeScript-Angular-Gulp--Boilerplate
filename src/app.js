'use strict';

// This is the root of the app.
// We have to 'require()' all of our app modules here.


var angular = require('angular'); 
var app = angular.module('myApp', []);

app.controller('HelloCtrl', function($scope) {
  $scope.testVar = 'Test varretjes';
  $scope.test2 = 'should call watch';
});


var assMonkey = require('./controllers/newCtrl.js');
