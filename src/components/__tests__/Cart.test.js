import { screen, fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>  Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)        
    })
);

it("Should Load Restaurant Menu Component", async() => {

    await act( async () => 
    render(
        <BrowserRouter>
    <Provider store = {appStore} >
        <Header />
        <Cart />
        <RestaurantMenu />
    </Provider>
    </BrowserRouter>
    )
);

    const accordionHeader = screen.getByText("Dessert (3)");

    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(3);

    const addBtns = screen.getAllByRole("button", { name: "Add +"});

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(4);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(screen.getAllByTestId("foodItems").length).toBe(3);

    expect(
        screen.getByText("Cart is Empty. Please Add Items to the Cart!")
    ).toBeInTheDocument();


});