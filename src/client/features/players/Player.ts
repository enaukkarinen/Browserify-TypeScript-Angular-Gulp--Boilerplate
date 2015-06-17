
export default class Player {
	
	id: number;
	name: string;
	age: number;
	position: string;
	
	constructor(i: number, n: string, a: number, p: string) {
		this.id = i;
		this.name = n;
		this.age = a;
		this.position = p;
	}
}
