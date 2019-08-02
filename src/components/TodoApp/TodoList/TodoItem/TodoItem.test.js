import React from "react";
import TodoItem from "./index";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TodoModel from "../../../../Stores/TodoStore/Model/TodoModel";
import TodoStore from "../../../../Stores/TodoStore";
afterEach(cleanup);
describe("TodoItem", () => {
  it("should able to toggle the task Status of the todo", () => {
    const todoModel = new TodoModel("jagadish");
    jest.spyOn(todoModel, "toggleTaskStatus");
    const { getByTestId } = render(<TodoItem todoModel={todoModel} />);
    const checkBox = getByTestId("checkbox");
    expect(todoModel.taskStatus).toBeFalsy();
    fireEvent.click(checkBox);
    expect(todoModel.toggleTaskStatus).toHaveBeenCalledTimes(1);
    expect(todoModel.taskStatus).toBeTruthy();
  });
  it("should able to delete todo in todolist on click of delete button", () => {
    const todoStore = new TodoStore();
    todoStore.addTodo("jagadish");
    jest.spyOn(todoStore, "deleteTodo");
    const { getByTestId } = render(<TodoItem todo={todoStore.todos[0]} />);
    const deletebutton = getByTestId("delete");
    expect(todoStore.todos.length).toBe(1);
    fireEvent.click(deletebutton);
    expect(todoStore.todos.length).toBe(0);
  });
});
