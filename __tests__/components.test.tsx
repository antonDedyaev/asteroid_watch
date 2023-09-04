import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/UI/Header/Header";
import Popup from "@/components/UI/Popup/PopUp";
import Spinner from "@/components/UI/Spinner/Spinner";

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
