import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./index";
import TodoStore from "../../Stores/TodoStore/index";
describe("Todoapp", () => {
  it("it should call todoStore function on press enter ke in input inputBox", () => {
    const todoStore = new TodoStore();
    jest.spyOn(TodoStore, "addTodo");
    const { getByPlaceholderText } = render(<TodoApp />);
    const inputBox = getByPlaceholderText("What needs to be Done?");
    const changeEvent = {
      target: {
        value: "jagadish"
      }
    };
    fireEvent.change(inputBox, changeEvent);
    fireEvent.keyDown(inputBox, { key: "Enter", keyCode: 13, code: 13 });
    expect(todoStore.addTodo).toHaveBeenCalledWith("jagadish");
  });
});
