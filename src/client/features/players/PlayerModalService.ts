/// <reference path="../../../../typings/angularjs/angular.d.ts" />
   
import Player from  "./Player";

class ModalOptions {
	 public headerText :string;
     public closeButtonText :string;
     public actionButtonText: string;
     public player: Player;
     
     constructor(header: string, close: string, action: string, player: Player) {
         this.headerText = header;
         this.closeButtonText = close;
         this.actionButtonText = action;
         this.player = player;
     }
}

export class PlayerModalService {


    static $inject = ["$modal"];
    
    
    constructor (private $modal) {
        
    }
    
    
    private Player: Player; 
    
    private modalDefaults = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: "features/players/PlayerDelete.html"
        };
        
    private modalOptions : ModalOptions;
        
    public showModal (args) {
            switch (args.action) {
                case "edit":
                this.modalOptions = new ModalOptions("Edit player", "Cancel", "Edit", args.player);
                this.modalDefaults.templateUrl = "features/players/PlayerEdit.html";
                break;
                case "delete":
                this.modalOptions = new ModalOptions("Delete player", "Cancel", "Delete", args.player);
                this.modalDefaults.templateUrl = "features/players/PlayerDelete.html";
                break;
                case "create":
                this.modalOptions = new ModalOptions("Create player", "Cancel", "Create", args.player);
                this.modalDefaults.templateUrl = "features/players/PlayerCreate.html";
                break;
                default:
                break;            
            }
            return this.show(this.modalDefaults, this.modalOptions);
    };

    public show (customModalDefaults, customModalOptions) {
        //Create temp objects to work with since we're in a singleton service
        
        var tempModalDefaults = {controller: function(x, y) {}};
        var tempModalOptions = {};
        //Map angular-ui modal custom defaults to modal defaults defined in service
        angular.extend(tempModalDefaults, this.modalDefaults, customModalDefaults);

        //Map modal.html $scope custom properties to defaults defined in service
        angular.extend(tempModalOptions, this.modalOptions, customModalOptions);

        
        if (tempModalDefaults.controller) {
            tempModalDefaults.controller = function ($scope, $modalInstance) {
                $scope.modalOptions = tempModalOptions;
                $scope.modalOptions.ok = function (result) {
                    $modalInstance.close(result);
                };
                $scope.modalOptions.close = function (result) {
                    $modalInstance.dismiss("cancel");
                };
            };
        }
        return this.$modal.open(tempModalDefaults).result;
    };
}

angular.module("PlayersModule").service("PlayerModalService", PlayerModalService);

export default PlayerModalService;
