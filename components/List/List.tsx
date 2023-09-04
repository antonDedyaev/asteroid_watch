"use client";
import IAsteroid from "models/IAsteroid";
import styles from "./List.module.scss";
import ListItem from "../ListItem/ListItem";
import { useState, MouseEvent, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Spinner from "../UI/Spinner/Spinner";
import fetchAsteroids from "@/actions/fetchAsteroids";

const List = ({ asteroids, nextPage }: { asteroids: IAsteroid[]; nextPage: string }) => {
	const [measurementUnit, setMeasurementUnit] = useState("kilometer");
	const [currAsteroids, setCurrAsteroids] = useState<IAsteroid[]>(asteroids);
	const [fetchedPage, setFetchedPage] = useState<string>(nextPage);

	const handleMeasurementToggler = (e: MouseEvent<HTMLDivElement>) => {
		const selectedMU = document.querySelector(`.${styles.container__selectorOption_selected}`);
		if (selectedMU) {
			selectedMU.classList.remove(`${styles.container__selectorOption_selected}`);
			(e.target as HTMLButtonElement).classList.add(
				styles.container__selectorOption_selected
			);
			setMeasurementUnit(
				(
					document.querySelector(
						`.${styles.container__selectorOption_selected}`
					) as HTMLButtonElement
				).dataset.id!
			);
		}
	};

	const ScrollLoader = () => {
		const { ref, inView } = useInView();

		const loadMoreAsteroids = async () => {
			const newData = await fetchAsteroids(fetchedPage);

			setCurrAsteroids([...currAsteroids, ...newData.asteroids]);
			setFetchedPage(newData.nextPage);
		};

		useEffect(() => {
			if (inView) {
				loadMoreAsteroids();
			}
		}, [inView]);

		return (
			<div
				className={styles.spinner}
				ref={ref}
			>
				<Spinner />
			</div>
		);
	};

	return (
		<div className={styles.container}>
			<div className={styles.container__head}>
				<h1>Ближайшие подлёты астероидов</h1>
				<div
					className={styles.container__selector}
					onClick={(e) => handleMeasurementToggler(e)}
				>
					<button
						data-testid='kilometer'
						className={[
							styles.container__selectorOption,
							styles.container__selectorOption_selected,
						].join(" ")}
					>
						в километрах
					</button>
					<span>|</span>
					<button
						data-testid='lunar'
						className={styles.container__selectorOption}
					>
						в лунных орбитах
					</button>
				</div>
			</div>
			<div className={styles.container__body}>
				{currAsteroids.map((asteroid) => (
					<ListItem
						measurementUnit={measurementUnit}
						asteroid={asteroid}
						key={asteroid.id}
					/>
				))}
				<ScrollLoader />
			</div>
		</div>
	);
};
export default List;
