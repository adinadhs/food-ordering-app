import { fireEvent, render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("These are tests to test Header Component", () => {
it("Should render Header Component With a Login  Button", () => {
    render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();

});

it("Should render Cart Component in Header", () => {
    render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0 items)");

    expect(cartItems).toBeInTheDocument();

});

it("Should render Cart Component in Header", () => {
    render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "logout"});

    expect(logoutButton).toBeInTheDocument();

});

});

