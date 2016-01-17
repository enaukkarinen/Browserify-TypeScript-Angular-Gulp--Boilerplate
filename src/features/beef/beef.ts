
export class Beef {
	
	id: number;
	name: string;
	grade: number;
	popularity: Popularity;
	
	constructor(i: number, n: string, g: number, p: Popularity) {
		this.id = i;
		this.name = n;
		this.grade = g;
		this.popularity = p;
	}
}

export enum Popularity {
    "Very Popular",
    "Popular",
    "Unpopular"
}
