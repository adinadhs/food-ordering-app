import { sum } from "../Sum";

test("This is a sum function that Calculates Sum of two numbers", () => {
    const result = sum(3,4);

    //Assertion
    expect(result).toBe(7);
}
);