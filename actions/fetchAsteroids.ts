import IAsteroid from 'models/IAsteroid';

const fetchAsteroids = async (
	url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${new Date()
		.toLocaleDateString()
		.split(".")
		.reverse()
		.join("-")}&api_key=qhemciUMn4zGMskFNG9gq1oKMkeKB9i14I0zwe8s`
) => {
	const response = await fetch(url);
	const data = await response.json();
	const nextPage: string = data.links.next;

	const asteroidsData: IAsteroid[] = [];

	Object.values(data.near_earth_objects).forEach((item: any): void => {
		const result: IAsteroid = item.reduce((acc: IAsteroid, el: any) => {
			acc.id = el.id;
			acc.name = el.name.slice(1, -1);
			acc.isHazardous = el.is_potentially_hazardous_asteroid;
			acc.diameter = Math.round(el.estimated_diameter.meters.estimated_diameter_max);
			acc.approachDate = el.close_approach_data[0].close_approach_date;

			acc.approachDistance = {
				kilometers: Math.round(el.close_approach_data[0].miss_distance.kilometers),
				lunar: Math.round(el.close_approach_data[0].miss_distance.lunar),
			};
			return acc;
		}, {});

		asteroidsData.push(result);
	});

	const sortedAsteroids = asteroidsData
		.sort((a, b) => Number(new Date(a.approachDate)) - Number(new Date(b.approachDate)))
		.map((asteroid) => {
			const formattedDate = new Date(asteroid.approachDate)
				.toLocaleDateString("ru-RU", {
					year: "numeric",
					month: "short",
					day: "numeric",
				})
				.split(" ");
			const displayedDate = `${formattedDate[0]} ${formattedDate[1].slice(0, -1)} ${
				formattedDate[2].length > 4 ? formattedDate[2].slice(0, -2) : formattedDate[2]
			}`;
			asteroid.approachDate = displayedDate;
			return asteroid;
		});

	return { asteroids: sortedAsteroids.slice(0, sortedAsteroids.length - 1), nextPage };
};

export default fetchAsteroids;