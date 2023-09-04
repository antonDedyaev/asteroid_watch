import { IApproachData } from "models/IAsteroidData";
import styles from "./ApproachInfo.module.scss";

const ApproachInfo = ({ approach }: { approach: IApproachData }) => {
	const formattedDate = new Date(approach.approachDate).toLocaleString().split(", ");

	return (
		<div className={styles.approachContainer}>
			<table>
				<tbody>
					<tr>
						<td>Скорость</td>
						<td>{approach.velocity.toLocaleString("ru-RU")} км/ч</td>
					</tr>
					<tr>
						<td>Время сближения с землей</td>
						<td>
							в {formattedDate[1].slice(0, -3)} ч, {formattedDate[0]} г.
						</td>
					</tr>
					<tr>
						<td>Расстояние до земли</td>
						<td>{approach.distance.toLocaleString("ru-RU")} км</td>
					</tr>
					<tr>
						<td>По чьей орбите движется</td>
						<td>{approach.orbitingBody}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
export default ApproachInfo;
