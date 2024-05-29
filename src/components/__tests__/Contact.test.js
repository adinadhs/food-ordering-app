import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {

    test("Should load Contact us Component", () => {
        render(<Contact />);

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    }); 

    test("Should load button inside Contact Component", () => {
        render(<Contact />);

        const button = screen.getByText("Submit");

        expect(button).toBeInTheDocument();
    }); 

    test("Should load input name inside Contact Component", () => {
        render(<Contact />);

        const name = screen.getByPlaceholderText("name");

        expect(name).toBeInTheDocument();
    }); 

    test("Should Load 2 input boxes on the Contact Component", () => {

        //Rendering
        render(<Contact />);

        //Querying
        const inputBoxes = screen.getAllByRole("textbox");

        //Asserting
        expect(inputBoxes.length).toBe(2);
    });

});