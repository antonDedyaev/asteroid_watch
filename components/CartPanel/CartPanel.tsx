"use client";
import styles from "./CartPanel.module.scss";
import { declineWord } from "@/helpers/declineWord";
import getSavedAsteroids from "@/helpers/getSavedItems";
import { useRouter } from "next/navigation";

const CartPanel = () => {
	const cartContent = getSavedAsteroids();
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
						{cartContent
							? `${cartContent.length}
							  ${declineWord(cartContent.length, ["астероид", "астероида", "астероидов"])}`
							: null}
					</span>
				</div>
				<button
					className={styles.containerBody__button}
					onClick={() => cartContent && router.push("/order")}
				>
					Отправить
				</button>
			</div>
		</div>
	);
};

export default CartPanel;
