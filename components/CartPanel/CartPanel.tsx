"use client";
import styles from "./CartPanel.module.scss";
import { declineWord } from "@/helpers/declineWord";
import getSavedAsteroids from "@/helpers/getSavedItems";
import IAsteroid from "@/models/IAsteroid";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CartPanel = () => {
	const [asteroids, setAsteroids] = useState<IAsteroid[]>([]);

	const handleSendButtonHandler = () => {
		const storedAsteroids = getSavedAsteroids();
		if (!storedAsteroids) {
			return;
		}
		router.push("/order");
	};

	useEffect(() => {
		setAsteroids(getSavedAsteroids());
	}, []);

	const router = useRouter();

	return (
		<div className={styles.container}>
			<div className={styles.containerBody}>
				<div className={styles.containerBody__info}>
					<h3>Корзина</h3>
					<span
						id='cart-content'
						data-testid='cart-value'
					>
						{asteroids
							? `${asteroids.length}
							  ${declineWord(asteroids.length, ["астероид", "астероида", "астероидов"])}`
							: null}
					</span>
				</div>
				<button
					className={styles.containerBody__button}
					onClick={handleSendButtonHandler}
				>
					Отправить
				</button>
			</div>
		</div>
	);
};

export default CartPanel;
