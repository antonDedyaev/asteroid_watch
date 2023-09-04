
export interface IApproachData {
    velocity: number;
    approachDate: string;
    distance: number;
    orbitingBody: string; 
}


export interface IAsteroidData {
    name: string;
    diameter: number;
    isHazardous: boolean;
    approachData: IApproachData[];
}