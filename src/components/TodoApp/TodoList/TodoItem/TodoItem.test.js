import React from "react";
import TodoItem from "./index";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TodoModel from "../../../../Stores/TodoStore/Model/TodoModel";
describe("TodoItem", () => {
  it("should able to toggle the task Status of the todo", () => {
    const todoModel = new TodoModel("jagadish");
    jest.spyOn(todoModel, "toggleTaskStatus");
    const { getByTestId } = render(<TodoItem todoModel={todoModel} />);
    const checkBox = getByTestId("checkbox");
    expect(todoModel.taskStatus).toBeFalsy();
    fireEvent.click(checkBox);
    expect(todoModel.toggleTaskStatus).toHaveBeenCalledTimes(1);
    expect(todoModel.taskStatus).toBeFalsy();
  });
});
