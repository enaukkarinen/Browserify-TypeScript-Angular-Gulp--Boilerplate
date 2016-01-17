
import { Beef } from "../beef";

export interface IModalDialogParameters {
	beef: Beef;
	action: string;
}

export class ModalDialogParameters implements IModalDialogParameters {
	
	public beef: Beef;
	public action: string;
	
	constructor(a: string, b: Beef) {
		this.action = a;
		this.beef = b;
	}
}

