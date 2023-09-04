"use client";
import ListItem from "@/components/ListItem/ListItem";
import styles from "./page.module.scss";
import Header from "@/components/UI/Header/Header";
import getSavedAsteroids from "@/helpers/getSavedItems";
import { useEffect, useState } from "react";
import IAsteroid from "@/models/IAsteroid";

const OrderPage = () => {
	const [asteroids, setAsteroids] = useState<IAsteroid[]>([]);

	useEffect(() => {
		setAsteroids(getSavedAsteroids());
	}, []);

	return (
		<>
			<Header />
			<div className={styles.cartListContainer}>
				<h1 className={styles.cartListContainer__header}>Заказ отправлен!</h1>
				{asteroids &&
					asteroids.map((asteroid) => (
						<ListItem
							measurementUnit='kilometer'
							asteroid={asteroid}
							isVisible={false}
							key={asteroid.id}
						/>
					))}
			</div>
			<span className={styles.disclaimer}>© Все права и планета защищены</span>
		</>
	);
};
export default OrderPage;
