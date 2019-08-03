import React from "react";
import TodoItem from "./index";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TodoModel from "../../../../Stores/TodoStore/Model/TodoModel";
import TodoStore from "../../../../Stores/TodoStore";
afterEach(cleanup);
describe("TodoItem", () => {
  let todoStore;
  beforeEach(() => {
    todoStore = new TodoStore();
    todoStore.addTodo("jagadish");
  });
  it("should able to toggle the task Status of the todo", () => {
    jest.spyOn(todoStore.todos[0], "toggleTaskStatus");
    const { getByTestId } = render(
      <TodoItem todo={todoStore.todos[0]} todoStore={todoStore} />
    );
    const checkBox = getByTestId("checkbox");
    expect(todoStore.todos[0].taskStatus).toBeFalsy();
    fireEvent.click(checkBox);
    expect(todoStore.todos[0].toggleTaskStatus).toHaveBeenCalledTimes(1);
    expect(todoStore.todos[0].taskStatus).toBeTruthy();
  });
  it("should able to delete todo in todolist on click of delete button", () => {
    jest.spyOn(todoStore, "deleteTodo");
    const { getByTestId } = render(
      <TodoItem todo={todoStore.todos[0]} todoStore={todoStore} />
    );
    window.confirm = jest.fn(() => true);
    const deletebutton = getByTestId("delete");
    expect(todoStore.todos.length).toBe(1);
    fireEvent.click(deletebutton);
    expect(window.confirm).toBeCalled();
    expect(todoStore.deleteTodo).toBeCalled();
    expect(todoStore.todos.length).toBe(0);
    window.confirm = jest.fn(() => false);
    expect(window.confirm).toBeCalledTimes(0);
  });
  it("should be get editable test on double click and update to do description", () => {
    jest.spyOn(todoStore.todos[0], "updateTodoDescription");
    const { getByTestId, getByPlaceholderText } = render(
      <TodoItem todo={todoStore.todos[0]} todoStore={todoStore} />
    );
    const deletebutton = getByTestId("tododesc");
    fireEvent.doubleClick(deletebutton);
    const inputbox = getByPlaceholderText("What needs to be Done?");
    expect(inputbox).toBeDefined();
    fireEvent.change(inputbox, {
      target: {
        value: "jagadishreddy"
      }
    });
    fireEvent.keyDown(inputbox, { key: "Enter", keyCode: 13, code: 13 });
    expect(todoStore.todos[0].updateTodoDescription).toHaveBeenCalledWith(
      "jagadishreddy"
    );
    expect(todoStore.todos[0].todoDesc).toBe("jagadishreddy");
  });
});
