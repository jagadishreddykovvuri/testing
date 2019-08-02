import React from "react";
import { render } from "@testing-library/react";
import EnterTodo from "./index";
describe("Enter Todo", () => {
  it("should contain input box", () => {
    const { getByPlaceholderText } = render(<EnterTodo />);
    const inputbox = getByPlaceholderText("What needs to be Done?");
    expect(inputbox).toBeDefined();
  });
});
