/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";


var m = angular.module("PlayersModule", []);
console.log("PlayersModule");


import "./modalDialog/PlayerModalProvider";
import "./modalDialog/PlayerModalController";
import "./PlayerController";
import "./PlayersController";



export default m;

