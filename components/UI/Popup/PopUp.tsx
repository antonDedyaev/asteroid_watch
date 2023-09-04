import styles from "./PopUp.module.scss";
import { ReactNode } from "react";

interface IPopupProps {
	isActive: boolean;
	setIsActive: (state: boolean) => void;
	children: ReactNode;
}

const Popup = ({ isActive, setIsActive, children }: IPopupProps) => {
	return (
		<div
			className={
				isActive
					? [styles.popupContainer, styles.popupContainer_active].join(" ")
					: styles.popupContainer
			}
			onClick={() => setIsActive(false)}
		>
			<div
				className={
					isActive
						? [
								styles.popupContainer__content,
								styles.popupContainer__content_active,
						  ].join(" ")
						: styles.popupContainer__content
				}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};
export default Popup;
