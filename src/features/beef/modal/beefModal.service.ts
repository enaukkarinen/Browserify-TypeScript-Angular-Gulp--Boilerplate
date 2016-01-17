/// <reference path="../../../../typings/tsd.d.ts" />
   
import { Beef } from  "../beef";
import { IModalDialogParameters, ModalDialogParameters } from "./modalDialogParameters";
import BeefModalController from "./beefModal.controller";

export default class BeefModalService {
    
    static $inject = ["$modal"];
    constructor (private $modal: angular.ui.bootstrap.IModalService) {
        
    }
    
    private getTemplate(action: string): string {
        switch(action){
            case "create":
                return "beef.create.html";
            case "delete":
                return "beef.delete.html";
            case "edit":
                return "beef.edit.html";
            default:
                throw {name : "BeefActionError", message : "Invalid beef action."};
        }
    }
    
    openDialog (params: ModalDialogParameters): angular.IPromise<any> { 
        
        var options: angular.ui.bootstrap.IModalSettings = {
            backdrop: 'static',
            templateUrl: this.getTemplate(params.action),
            controller: BeefModalController,
            controllerAs: "md",
            //size: 'sm',
            resolve: {
                dialogParams: function (): ModalDialogParameters {
                    return params;
                }
            }
        };
        return this.$modal.open(options).result;
    }
}

angular.module("app.beef").service("BeefModalService", BeefModalService);

