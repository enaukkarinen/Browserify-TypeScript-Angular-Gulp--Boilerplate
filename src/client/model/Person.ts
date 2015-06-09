
export class Person {
	name: string;
	constructor(name: string) {
		this.name = name;
	}

	dance() {
		console.log(this.name + " is awesome.");
	}
}