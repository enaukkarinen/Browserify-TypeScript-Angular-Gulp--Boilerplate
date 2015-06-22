
import Player from "./Player";
	
export interface IPlayerService {
	
    get(s: number): Player;
	
    get(): Player[];
	
	add (player: Player): void;
	
	delete (id: number): void;
	
	update (player: Player): void;
	
}
	
