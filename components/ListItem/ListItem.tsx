"use client";
import IAsteroid from "models/IAsteroid";
import styles from "./ListItem.module.scss";
import Image from "next/image";
import Popup from "../UI/Popup/PopUp";
import { useEffect, useState } from "react";
import { declineWord } from "@/helpers/declineWord";
import Link from "next/link";
import getSavedAsteroids from "@/helpers/getSavedItems";

interface IListItemProps {
	measurementUnit: string;
	asteroid: IAsteroid;
	isVisible?: boolean;
}

const ListItem = ({ measurementUnit, asteroid, isVisible = true }: IListItemProps) => {
	const [asteroids, setAsteroids] = useState<IAsteroid[]>([]);

	useEffect(() => {
		setAsteroids(getSavedAsteroids());
	}, []);

	const asteroidAdded = asteroids && asteroids.find((item) => item.id === asteroid.id);

	const [popupActive, setPopupActive] = useState(false);
	const [addedToCart, setAddedToCart] = useState(!!asteroidAdded);

	const orderButtonHandler = (asteroid: IAsteroid) => {
		const savedAsteroids = getSavedAsteroids() ?? [];

		const duplicate = savedAsteroids.find((item) => item.id === asteroid.id);
		if (duplicate) {
			setPopupActive(true);
		}
		!duplicate && savedAsteroids.push(asteroid);
		setAddedToCart(true);
		localStorage.setItem("cartItems", JSON.stringify(savedAsteroids));
		const cartContent = document.getElementById("cart-content");
		if (cartContent)
			cartContent.innerHTML = `${String(savedAsteroids.length)} ${declineWord(
				savedAsteroids.length,
				["астероид", "астероида", "астероидов"]
			)}`;
	};
	return (
		<div className={styles.container}>
			<h2 className={styles.container__date}>{asteroid.approachDate}</h2>
			<div className={styles.container__metrics}>
				<div className={styles.container__distance}>
					{measurementUnit === "kilometer" ? (
						<div>{asteroid.approachDistance.kilometers.toLocaleString("ru-RU")} км</div>
					) : (
						<div data-testid='meas-unit'>
							{asteroid.approachDistance.lunar}{" "}
							{declineWord(asteroid.approachDistance.lunar, [
								"лунная орбита",
								"лунных орбиты",
								"лунных орбит",
							])}
						</div>
					)}

					<svg
						viewBox='0 0 96 6'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							id='Arrow 1'
							d='M0 3L5 5.88675L5 0.113249L0 3ZM96 3.00001L91 0.113257L91 5.88676L96 3.00001ZM4.5 3.5L91.5 3.50001L91.5 2.50001L4.5 2.5L4.5 3.5Z'
							fill='white'
							fillOpacity='0.5'
						/>
					</svg>
				</div>
				<Image
					src={asteroid.diameter > 100 ? "/big_ast.png" : "/small_ast.png"}
					width={asteroid.diameter > 100 ? 36.667 : 22}
					height={asteroid.diameter > 100 ? 40 : 24}
					alt='Asteroid picture'
				/>
				<div>
					<div className={styles.container__name}>
						<Link href={`/asteroid/${asteroid.id}`}>{asteroid.name}</Link>
					</div>
					<div className={styles.container__diameter}>Ø {asteroid.diameter} м</div>
				</div>
			</div>
			<div className={styles.container__status}>
				{isVisible && (
					<button
						data-testid='add-to-cart'
						className={
							addedToCart
								? [styles.container__order, styles.container__order_added].join(" ")
								: styles.container__order
						}
						onClick={() => orderButtonHandler(asteroid)}
					>
						{addedToCart ? "В корзине" : "Заказать"}
					</button>
				)}
				{asteroid.isHazardous && (
					<Image
						src='/danger.svg'
						alt='fg'
						width={67}
						height={20}
					/>
				)}
			</div>
			<Popup
				isActive={popupActive}
				setIsActive={setPopupActive}
			>
				Астероид уже в списке на уничтожение!
			</Popup>
		</div>
	);
};

export default ListItem;
