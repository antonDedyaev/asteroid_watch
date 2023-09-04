import "@/styles/main.scss";
import styles from "./layout.module.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Asteroid Monitoring",
	description: "Test assignment",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ru'>
			<body>
				<div className={styles.mainContainer}>{children}</div>
			</body>
		</html>
	);
}
