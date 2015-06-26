
import Player from "../Player";

export interface IModalDialogParameters {
	player: Player;
	action: string;
}

export class ModalDialogParameters implements IModalDialogParameters {
	
	public player: Player;
	public action: string;
	
	constructor(a: string, p: Player) {
		this.action = a;
		this.player = p;
	}
}

