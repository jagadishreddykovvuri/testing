import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./index";
import TodoStore from "../../../Stores/TodoStore";
describe("TodoList", () => {
  it("should render an component upto todolist size", () => {
    const todoStore = new TodoStore();
    todoStore.addTodo("Learn TDD");
    todoStore.addTodo("Learn TDD1");
    todoStore.addTodo("Learn TDD2");
    todoStore.addTodo("Learn TDD3");
    todoStore.addTodo("Learn TDD4");
    const { getAllByTestId } = render(<TodoList todoStore={todoStore} />);
    const checker = getAllByTestId("checkbox");
    expect(checker.length).toBe(todoStore.todos.length);
  });
});
