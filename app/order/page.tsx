"use client";
import ListItem from "@/components/ListItem/ListItem";
import styles from "./page.module.scss";
import Header from "@/components/UI/Header/Header";
import getSavedAsteroids from "@/helpers/getSavedItems";

const OrderPage = () => {
	const addedAsteroids = getSavedAsteroids();

	return (
		<>
			<Header />
			<div className={styles.cartListContainer}>
				<h1 className={styles.cartListContainer__header}>Заказ отправлен!</h1>
				{addedAsteroids &&
					addedAsteroids.map((asteroid) => (
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
