import ListItem from "@/components/ListItem/ListItem";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "@/components/List/List";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

const asteroids = [
	{
		id: 1,
		name: "test asteroid",
		isHazardous: true,
		diameter: 333333333,
		approachDate: "2023-11-11",
		approachDistance: {
			kilometers: 1111111111,
			lunar: 3,
		},
	},
];

describe("BUTTONS TESTS", () => {
	it("adds asteroid to cart", () => {
		render(
			<ListItem
				measurementUnit='kilometer'
				asteroid={asteroids[0]}
			/>
		);

		const addButton = screen.getByTestId("add-to-cart");
		//const cartContent = screen.getByTestId("cart-value");
		fireEvent.click(addButton);
		expect(addButton).toHaveTextContent("В корзине");
	});

	it("switches to lunar measurement unit", () => {
		mockAllIsIntersecting(true);
		render(
			<List
				asteroids={asteroids}
				nextPage=''
			/>
		);

		const lunarButton = screen.getByTestId("lunar");
		expect(lunarButton).toHaveTextContent("в лунных орбитах");
		fireEvent.click(lunarButton);
		expect(screen.getByTestId("meas-unit")).toHaveTextContent("3 лунных орбиты");
	});
});
