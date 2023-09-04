import styles from "./Header.module.scss";

const Header = () => {
	return (
		<div
			className={styles.headerContainer}
			role='header'
		>
			<div className={styles.headerContainer__title}>ARMAGEDDON 2023</div>
			<div className={styles.headerContainer__body}>
				<span>ООО “Команда им. Б. Уиллиса”.</span>
				<span>Взрываем астероиды с 1998 года.</span>
			</div>
		</div>
	);
};

export default Header;
