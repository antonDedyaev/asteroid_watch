import List from "@/components/List/List";
import CartPanel from "@/components/CartPanel/CartPanel";
import fetchAsteroids from "@/actions/fetchAsteroids";
import Header from "@/components/UI/Header/Header";

const HomePage = async () => {
	const { asteroids, nextPage } = await fetchAsteroids();
	const preloadedPage = await fetchAsteroids(nextPage.replace("http", "https"));

	return (
		<>
			<Header />
			<List
				asteroids={asteroids}
				preloadedData={preloadedPage.asteroids}
				nextPage={preloadedPage.nextPage}
			/>
			<CartPanel />
		</>
	);
};

export default HomePage;
