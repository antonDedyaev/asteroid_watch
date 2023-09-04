export default interface IAsteroid {
	id: number;
	name: string;
	isHazardous: boolean;
	diameter: number;
	approachDate: string;
	approachDistance: {
		kilometers: number;
		lunar: number;
	};
}