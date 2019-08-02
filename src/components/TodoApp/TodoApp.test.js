import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./index";
import todoStore from "../../Stores/instances";
describe("Todoapp", () => {
  it("it should call todoStore function on press enter ke in input inputBox", () => {
    jest.spyOn(todoStore, "addTodo");
    const { getByPlaceholderText } = render(<TodoApp />);
    const inputBox = getByPlaceholderText("What needs to be Done?");
    fireEvent.change(inputBox, {
      target: {
        value: "jagadish"
      }
    });
    fireEvent.keyDown(inputBox, { key: "Enter", keyCode: 13, code: 13 });
    expect(todoStore.addTodo).toHaveBeenCalledWith("jagadish");
  });
});
