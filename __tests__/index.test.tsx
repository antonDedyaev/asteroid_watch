import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/UI/Header/Header";
import Popup from "@/components/UI/Popup/PopUp";
import Spinner from "@/components/UI/Spinner/Spinner";
import ListItem from "@/components/ListItem/ListItem";
import { asteroid } from "../templates/asteroid";

describe("UI COMPONENTS SHAPSHOT TESTS", () => {
	it("renders Header unchanged", () => {
		const { container } = render(<Header />);
		expect(container).toMatchSnapshot();
	});

	it("renders PopUp unchanged", () => {
		render(
			<Popup
				isActive={true}
				setIsActive={(): void => console.log("Test")}
			>
				Предупреждающая модалка
			</Popup>
		);
		const modal = screen.getByText("Предупреждающая модалка");
		expect(modal).toMatchSnapshot();
	});

	it("renders Spinner unchanged", () => {
		const { container } = render(<Spinner />);
		expect(container).toMatchSnapshot();
	});
});

// describe("ORDER BUTTON TESTS", () => {
// 	it("adds asteroid to cart", () => {
// 		render(
// 			<ListItem
// 				measurementUnit='kilometer'
// 				asteroid={asteroid}
// 			/>
// 		);

// 		const addButton = screen.getByTestId("add-to-cart");
// 		//const cartContent = screen.getByTestId("cart-value");
// 		addButton.click();
// 		expect(addButton).toHaveTextContent("В корзине");
// 	});
// });
