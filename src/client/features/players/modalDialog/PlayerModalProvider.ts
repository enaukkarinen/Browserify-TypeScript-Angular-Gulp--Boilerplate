/// <reference path="../../../../../typings/tsd.d.ts" />
   
import Player from  "../Player";
import { IModalDialogParameters, ModalDialogParameters } from "./ModalDialogParameters";
import PlayerModalCtrl from "./PlayerModalController";

export default class PlayerModalProvider {
    
    static $inject = ["$modal"];
    
    constructor (private $modal) {    
    }
    
    private getTemplate(action: string): string {
        switch(action){
            case "create":
            return "features/players/modalDialog/PlayerCreate.html";
            case "edit":
            return "features/players/modalDialog/PlayerCreate.html";
            case "delete":
            return "features/players/modalDialog/PlayerDelete.html";
            default:
                throw {name : "PlayerActionError", message : "Invalid player action."};
        }
    }
    
    openDialog (params: ModalDialogParameters): angular.ui.bootstrap.IModalServiceInstance { 
        
        var options: angular.ui.bootstrap.IModalSettings = {
            backdrop: 'static',
            templateUrl: this.getTemplate(params.action),
            controller: PlayerModalCtrl,
            size: 'sm',
            resolve: {
                dialogParams: function (): ModalDialogParameters {
                    return params;
                }
            }
        };
        return this.$modal.open(options).result;
    }
}
console.log("modalprovider");
angular.module("PlayersModule").service("PlayerModalProvider", PlayerModalProvider);

