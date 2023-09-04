import List from "@/components/List/List";
import CartPanel from "@/components/CartPanel/CartPanel";
import fetchAsteroids from "@/actions/fetchAsteroids";
import Header from "@/components/UI/Header/Header";

const HomePage = async () => {
	const { asteroids, nextPage } = await fetchAsteroids();

	return (
		<>
			<Header />
			<List
				asteroids={asteroids}
				nextPage={nextPage}
			/>
			<CartPanel />
		</>
	);
};

export default HomePage;
