import styles from "./page.module.scss";
import Header from "@/components/UI/Header/Header";
import fetchAsteroidData from "@/actions/fetchAsteroidData";
import Image from "next/image";
import ApproachInfo from "@/components/ApproachInfo/ApproachInfo";

const AsteroidPage = async ({ params }: { params: { id: string } }) => {
	const asteroidData = await fetchAsteroidData(params.id);

	return (
		<>
			<Header />
			<div className={styles.asteroidContainer}>
				<h1 className={styles.asteroidContainer__header}>Астероид {asteroidData.name}</h1>
				<div className={styles.asteroidContainer__diameter}>
					<div className={styles.asteroidContainer__diameterData}>
						<span>Диаметр</span>
						<span>Ø {asteroidData.diameter} м</span>
					</div>

					<Image
						src={asteroidData.diameter > 100 ? "/big_ast.png" : "/small_ast.png"}
						width={asteroidData.diameter > 100 ? 36.667 : 22}
						height={asteroidData.diameter > 100 ? 40 : 24}
						alt='Asteroid picture'
					/>
				</div>
				<h3
					className={
						asteroidData.isHazardous
							? styles.asteroidContainer_hazardous
							: styles.asteroidContainer_notHazardous
					}
				>
					{asteroidData.isHazardous
						? "Представляет опасность!"
						: "Не представляет опасности"}
				</h3>
				<h2>Сближения</h2>
				<div>
					{asteroidData.approachData.map((data, index) => (
						<ApproachInfo
							approach={data}
							key={index}
						/>
					))}
				</div>
			</div>
		</>
	);
};
export default AsteroidPage;
