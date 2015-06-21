/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";


var m = angular.module("PlayersModule", []);
console.log("PlayersModule");


import "./modalDialog/PlayerModalService";
import "./modalDialog/PlayerModalController";
import "./PlayerController";
import "./PlayerService";
import "./PlayersController";



export default m;

