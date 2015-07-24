/// <reference path="../../../typings/tsd.d.ts" />
   

export class Module {	
	ref: string;
	name: string;
	requireAuth: boolean;
	constructor(ref: string, name: string, reqAuth) {
		this.ref = ref;
		this.name = name;
		this.requireAuth = reqAuth; 
	}
}

export class AccessService {
    
	private Modules: Array<Module>;
	
    static $inject = ["$http"];
    constructor (private $http: angular.IHttpService) 
	{
		this.InitializeModules();
        
    }
	
	getAccess(user: string) :Array<Module> {
		if(user)
			return this.Modules;		
	}
	
	private InitializeModules() :void {
		this.Modules = new Array<Module>(
			new Module("players", "players", false), 
			new Module("register", "register", false),
			new Module("login", "login", false));
	}
    
}

angular.module("DataServiceModule").service("AccessService", AccessService);

