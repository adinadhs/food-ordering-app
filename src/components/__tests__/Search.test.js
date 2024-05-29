import { screen, render, fireEvent } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});


it("Should Render the Body Component with Search", async () => 
{
    await act (async() => 
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>        
        )
    );

const cards = screen.getAllByTestId("resCard");

expect(cards.length).toBe(9);

    
});

it("Should Render the Body Component with Search tiffins", async () => 
{
    await act (async() => 
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>        
        )
    );

const cardsBeforeSearch = screen.getAllByTestId("resCard");

expect(cardsBeforeSearch.length).toBe(9);

const searchBtn = screen.getByRole("button", {name: "Search"});

const searchInput = screen.getByTestId("searchInput");

fireEvent.change(searchInput, {target: { value: "tiffins" } });

fireEvent.click(searchBtn);

const cardsAfterSearch = screen.getAllByTestId("resCard");

expect(cardsAfterSearch.length).toBe(2);

    
});

it("Should Render the Body Component with Top Rated Restaurants", async () => 
{
    await act (async() => 
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>        
        )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(9);
    
    const ropRatedButton = screen.getByRole("button", {name: "Top Rated Restaurants"});
    
    fireEvent.click(ropRatedButton);
    
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    
    expect(cardsAfterFilter.length).toBe(7);
    
    
});