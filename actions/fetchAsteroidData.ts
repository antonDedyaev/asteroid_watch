import { IAsteroidData, IApproachData } from 'models/IAsteroidData';

const fetchAsteroidData = async (id: string) => {
    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=qhemciUMn4zGMskFNG9gq1oKMkeKB9i14I0zwe8s`)
    const data = await response.json();

    const approaches: IApproachData[] = data.close_approach_data.map((item: any) => {
        const approachData: IApproachData = {
            velocity: Math.round(Number(item.relative_velocity.kilometers_per_hour)),
            approachDate: item.close_approach_date_full,
            distance: Math.round(item.miss_distance.kilometers),
            orbitingBody: item.orbiting_body,
        }
        return approachData;
    })

    const asteroidData: IAsteroidData = {
        name: data.designation,
        diameter: Math.round(data.estimated_diameter.meters.estimated_diameter_max),
        isHazardous: data.is_potentially_hazardous_asteroid,
        approachData: approaches,
    }

    return asteroidData;
};
export default fetchAsteroidData;